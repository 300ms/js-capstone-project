import Phaser from 'phaser';

const BootScene = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize:

    function BootScene() {
      Phaser.Scene.call(this, { key: 'BootScene' });
    },

  preload() {
    // map tiles
    this.load.image('tiles', 'assets/map/spritesheet.png');

    // map in json format
    this.load.tilemapTiledJSON('map', 'assets/map/map.json');

    // our two characters
    this.load.spritesheet('player', 'assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });

    this.load.spritesheet('enemy', 'assets/enemy.png', { frameWidth: 32, frameHeight: 32 });
    /* this.load.image('dragonblue', 'assets/dragonblue.png');

    this.load.image('dragonorrange', 'assets/dragonorrange.png'); */

    this.load.html('form', 'form.html');
  },

  create() {
    this.add.text(100, 50, 'Welcome!');
    /* this.scene.start('bootScene'); */
    const newGameButton = this.add.text(100, 150, 'New Game!', { fill: '#0f0' });
    const highScoresButton = this.add.text(100, 200, 'HighScores!', { fill: '#0f0' });
    this.nameInput = this.add.dom(100, 100).createFromCache('form');

    newGameButton
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => {
        this.name = this.nameInput.getChildByName('name').value;
        this.scene.start('WorldScene');
      })
      .on('pointerover', () => {
        newGameButton.setStyle({ fill: '#ff0' });
      })
      .on('pointerout', () => {
        newGameButton.setStyle({ fill: '#0f0' });
      });

    highScoresButton
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => {
        /* await this.getHighScores()
          .then((response) => {
            this.scene.start('HighScoresScene', response);
          })
          .catch((error) => {
            console.log(error);
          }); */
        this.scene.start('HighScoresScene');
      })
      .on('pointerover', () => {
        highScoresButton.setStyle({ fill: '#ff0' });
      })
      .on('pointerout', () => {
        highScoresButton.setStyle({ fill: '#0f0' });
      });
  },
  getName() {
    return this.name;
  },
});

export { BootScene as default };
