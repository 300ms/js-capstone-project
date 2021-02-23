import Phaser from 'phaser';
import Enemy from '../units/enemy';
import PlayerCharacter from '../units/playerCharacter';

const BattleScene = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize:

  function BattleScene() {
    Phaser.Scene.call(this, { key: 'BattleScene' });
  },
  create() {
    this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');
    this.startBattle();
    this.sys.events.on('wake', this.startBattle, this);
  },
  startBattle() {
    const warrior = new PlayerCharacter(this, 250, 50, 'player', 1, 'Warrior', 10, 5);
    this.add.existing(warrior);

    const mage = new PlayerCharacter(this, 250, 100, 'player', 4, 'Mage', 10, 5);
    this.add.existing(mage);

    const dragonblue = new Enemy(this, 50, 50, 'enemy', 17, 'Dragon', 11, 3);
    this.add.existing(dragonblue);

    const dragonOrange = new Enemy(this, 50, 100, 'enemy', 18, 'Dragon2', 10, 3);
    this.add.existing(dragonOrange);

    this.heroes = [warrior, mage];
    this.enemies = [dragonblue, dragonOrange];
    this.units = this.heroes.concat(this.enemies);

    this.index = -1;

    this.scene.run('UIScene');
  },
  nextTurn() {
    if (this.checkEndBattle()) {
      this.endBattle();
      return;
    }
    do {
      this.index += 1;
      if (this.index >= this.units.length) {
        this.index = 0;
      }
    } while (!this.units[this.index].living);
    if (this.units[this.index] instanceof PlayerCharacter) {
      this.events.emit('PlayerSelect', this.index);
    } else {
      let r;
      do {
        r = Math.floor(Math.random() * this.heroes.length);
      } while (!this.heroes[r].living);
      this.units[this.index].attack(this.heroes[r]);
      this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });
    }
  },
  checkEndBattle() {
    let victory = true;
    for (let i = 0; i < this.enemies.length; i += 1) {
      if (this.enemies[i].living) victory = false;
    }
    let gameOver = true;
    for (let i = 0; i < this.heroes.length; i += 1) {
      if (this.heroes[i].living) gameOver = false;
    }

    return victory || gameOver;
  },
  endBattle() {
    this.worldScene = this.scene.get('WorldScene');
    this.enemies.forEach((enemy) => {
      if (enemy.hp > 0) {
        this.worldScene.setScore(-10);
      }
    });
    this.heroes.forEach((hero) => {
      if (hero.hp > 0) {
        this.worldScene.setScore(10);
      }
    });
    this.heroes.length = 0;
    this.enemies.length = 0;
    for (let i = 0; i < this.units.length; i += 1) {
      this.units[i].destroy();
    }
    this.units.length = 0;
    this.scene.sleep('UIScene');
    this.scene.switch('WorldScene');
  },
  receivePlayerSelection(action, target) {
    if (action === 'attack') {
      this.units[this.index].attack(this.enemies[target]);
    }
    this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });
  },
  exitBattle() {
    this.scene.sleep('UIScene');
    this.scene.switch('WorldScene');
  },
  wake() {
    this.scene.run('UIScene');
    this.time.addEvent({ delay: 3000, callback: this.exitBattle, callbackScope: this });
  },
});

export default BattleScene;
