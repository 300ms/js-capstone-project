import game from './gameMock';

describe('Create the game', () => {
  test('Create a new game object', () => {
    expect(typeof game()).toBe('object');
  });

  test('Create all the scenes in game', () => {
    expect(typeof game().scene.scenes.length).toBe('number');
  });
});
