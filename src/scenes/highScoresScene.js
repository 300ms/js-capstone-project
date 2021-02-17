import Phaser from 'phaser';
import axios from 'axios';

const highScoresScene = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize:

    function highScoresScene() {
      Phaser.Scene.call(this, { key: 'HighScoresScene' });
    },

  create() {
    this.add.text(100, 100, 'HighScores!');
    /* this.scene.start('bootScene'); */
    this.getHighScores();
    const mainMenu = this.add.text(100, 220, 'Back to Main Menu!', { fill: '#0f0' });

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
  async getHighScores() {
    const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XNEYrKflyHKjlImWvLxZ/scores';

    axios.get(baseUrl)
      .then((response) => {
        console.log(response);
        this.listHighScores(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  listHighScores(response) {
    const { result } = response.data;
    for (let i = 0; i < 5; i++) {
      this.add.text(100, 120 + i * 25, `${result[i].user} = ${result[i].score}`, { fill: '#0f0' });
    }
  },
});

export { highScoresScene as default };
