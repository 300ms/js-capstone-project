import Phaser from 'phaser';

const highScoresScene = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize:

    function highScoresScene() {
      Phaser.Scene.call(this, { key: 'HighScoresScene' });
    },

  create() {
    this.add.text(100, 100, 'HighScores!');
    /* this.scene.start('bootScene'); */
    const mainMenu = this.add.text(100, 150, 'Back to Main Menu!', { fill: '#0f0' });

    mainMenu
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => {
        this.scene.start('BootScene');
      })
      .on('pointerover', () => {
        mainMenu.setStyle({ fill: '#ff0' });
      })
      .on('pointerout', () => {
        mainMenu.setStyle({ fill: '#0f0' });
      });
  },
});

export { highScoresScene as default };
