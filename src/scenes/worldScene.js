import Phaser from 'phaser';
import axios from 'axios';

const WorldScene = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize:

    function WorldScene() {
      Phaser.Scene.call(this, { key: 'WorldScene' });
    },
  preload() {

  },
  create() {
    const map = this.make.tilemap({ key: 'map' });
    const tiles = map.addTilesetImage('spritesheet', 'tiles');
    // eslint-disable-next-line no-unused-vars
    const grass = map.createStaticLayer('Grass', tiles, 0, 0);
    const obstacles = map.createLayer('Obstacles', tiles, 0, 0);
    this.score = 0;
    this.scoreText = this.add.text(8, 8, `Score: ${this.score}`, { fontSize: '12px', fill: '#fff' });
    obstacles.setCollisionByExclusion([-1]);
    this.player = this.physics.add.sprite(50, 100, 'player', 6);
    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;
    this.player.setCollideWorldBounds(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.name = this.scene.get('BootScene').getName();
    this.esc = this.input.keyboard.addKey('ESC');
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.roundPixels = true;
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13] }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13] }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('player', { frames: [2, 8, 2, 14] }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('player', { frames: [0, 6, 0, 12] }),
      frameRate: 10,
      repeat: -1,
    });
    this.physics.add.collider(this.player, obstacles);
    this.spawns = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
    for (let i = 0; i < 30; i += 1) {
      const x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
      const y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
      this.spawns.create(x, y, 20, 20);
    }
    this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy, false, this);
    this.sys.events.on('wake', this.wake, this);
  },
  onMeetEnemy(zone) {
    zone.x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
    zone.y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);

    this.cameras.main.flash(300);
    this.scene.switch('BattleScene');
  },
  update() {
    this.player.body.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-80);
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(80);
    }

    if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-80);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(80);
    }

    if (this.cursors.left.isDown) {
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.anims.play('right', true);
    } else if (this.cursors.up.isDown) {
      this.player.anims.play('up', true);
    } else if (this.cursors.down.isDown) {
      this.player.anims.play('down', true);
    } else {
      this.player.anims.stop();
    }

    if (this.esc.isDown) {
      this.registerScore(this.name, this.score);
    }
  },
  wake() {
    this.cursors.left.reset();
    this.cursors.right.reset();
    this.cursors.up.reset();
    this.cursors.down.reset();
  },
  getScore() {
    return this.score;
  },
  setScore(score) {
    this.score += score;
    this.scoreText.setText(`Score: ${this.score}`);
  },
  backToMenu() {

  },
  async registerScore(user, score) {
    const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XNEYrKflyHKjlImWvLxZ/scores';

    axios.post(baseUrl, {
      user,
      score,
    })
      .then(() => {
        this.scene.switch('BootScene');
      });
  },
});

export default WorldScene;
