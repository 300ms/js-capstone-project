class Unit {
  constructor(type, hp, damage) {
    this.type = type;
    this.maxHp = hp;
    this.hp = hp;
    this.damage = damage;
    this.living = true;
    this.menuItem = null;
  }

  setMenuItem(item) {
    this.menuItem = item;
  }

  attack(target) {
    if (target.living) {
      target.takeDamage(this.damage);
    }
  }

  takeDamage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      this.hp = 0;
      this.unitKilled();
      this.living = false;
      this.visible = false;
      this.menuItem = null;
    }
  }

  unitKilled() {
    this.visible = false;
  }
}

export default Unit;
