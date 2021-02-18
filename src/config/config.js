import Phaser from 'phaser';
import bootScene from '../scenes/bootScene';
import worldScene from '../scenes/worldScene';
import uiScene from '../scenes/uiScene';
import battleScene from '../scenes/battleScene';
import highScoresScene from '../scenes/highScoresScene';

const config = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 320,
  height: 240,
  zoom: 2,
  pixelArt: true,
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [
    bootScene,
    worldScene,
    battleScene,
    uiScene,
    highScoresScene,
  ],
};

export { config as default };
