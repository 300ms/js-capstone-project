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
  },

  create() {
    this.scene.start('WorldScene');
    /* this.scene.start('BattleScene'); */
  },
});

export { BootScene as default };
