import Unit from './unitMock';

it('Check hp after attack', () => {
  const warrior = new Unit('Warrior', 10, 5);
  const dragon = new Unit('Dragon', 10, 5);

  expect(dragon.hp).toBe(10);
  warrior.attack(dragon);
  expect(dragon.hp).toBe(5);
});

it('Check visibility after get destroyed', () => {
  const warrior = new Unit('Warrior', 10, 5);
  const dragon = new Unit('Dragon', 10, 5);

  expect(dragon.hp).toBe(10);

  warrior.attack(dragon);
  expect(dragon.hp).toBe(5);

  warrior.attack(dragon);
  expect(dragon.hp).toBe(0);
  expect(dragon.visible).toBe(false);
});
