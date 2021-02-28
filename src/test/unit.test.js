import Unit from './unitMock';

describe('Test units', () => {
  it('Create units and check properties', () => {
    const warrior = new Unit('Warrior', 10, 5);
    const mage = new Unit('Mage', 10, 5);
    const dragon = new Unit('Dragon', 10, 5);

    expect(warrior.hp).toBe(10);
    expect(mage.damage).toBe(5);
    expect(dragon.type).toBe('Dragon');
  });
});
