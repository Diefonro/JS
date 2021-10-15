class Person {
  constructor(name, surname) {
    this._name = name;
    this._surname = surname;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get surname() {
    return this._surname;
  }

  set surname(surname) {
    this._surname = surname;
  }
}
