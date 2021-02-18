import Phaser from 'phaser';
import config from './config/config';

const game = new Phaser.Game(config);
game();
/* class Game extends Phaser.Game {
  constructor() {
    super(Config);
    this.scene.add('Game', SimpleScene);
    this.scene.start('Game');
  }
}

window.game = new Game(); */
