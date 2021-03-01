import Phaser from 'phaser';
import axios from 'axios';
import Swal from 'sweetalert2';

const highScoresScene = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize:

    function highScoresScene() {
      Phaser.Scene.call(this, { key: 'HighScoresScene' });
    },

  create() {
    this.add.text(100, 20, 'HighScores!');
    (async () => {
      await this.getHighScores();
    })();
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
        this.listHighScores(response);
      })
      .catch(() => {
        Swal.fire({
          title: 'Oops...',
          text: 'Something went wrong! Your score was not registered. Please try again later.',
          icon: 'warning',
        });
      });
  },
  listHighScores(response) {
    let { result } = response.data;
    result = result.sort((a, b) => ((a.score > b.score) ? -1 : 1));
    for (let i = 0; i < 5; i += 1) {
      this.add.text(100, 50 + i * 20, `${result[i].user} = ${result[i].score}`, { fill: '#0f0' });
    }
  },
});

export default highScoresScene;
