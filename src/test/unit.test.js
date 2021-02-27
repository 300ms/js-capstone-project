/* eslint-disable no-unused-vars */
import Enemy from '../units/enemy';
import PlayerCharacter from '../units/playerCharacter';

jest.mock('../units/enemy');
jest.mock('../units/playerCharacter');

beforeEach(() => {
  Enemy.mockClear();
  PlayerCharacter.mockClear();
});

it('works', () => {
  expect(PlayerCharacter).not.toHaveBeenCalled();
  expect(Enemy).not.toHaveBeenCalled();

  const warrior = new PlayerCharacter(this, 250, 50, 'player', 1, 'Warrior', 10, 5);
  const mage = new PlayerCharacter(this, 250, 100, 'player', 4, 'Mage', 10, 5);
  const dragon = new Enemy(this, 50, 50, 'enemy', 17, 'Dragon', 11, 3);

  expect(PlayerCharacter).toHaveBeenCalledTimes(2);
  expect(Enemy).toHaveBeenCalledTimes(1);
});
