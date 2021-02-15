import Phaser from 'phaser';
import config from './config/config';

new Phaser.Game(config);
/* class Game extends Phaser.Game {
  constructor() {
    super(Config);
    this.scene.add('Game', SimpleScene);
    this.scene.start('Game');
  }
}

window.game = new Game(); */
