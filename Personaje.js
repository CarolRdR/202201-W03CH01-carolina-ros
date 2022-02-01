export class Character {
  #status = 'isAlive';
  constructor(name, family, age) {
    this.name = name;
    this.age = age;
    this.family = family;
  }

  comunicate() {
    return this.message;
  }
  die() {
    this.status = 'isDeath';
  }
}

Character.prototype.series = 'GoT';
