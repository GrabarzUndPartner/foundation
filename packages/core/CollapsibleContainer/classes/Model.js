export default class Model {
  #name = null;

  constructor (name, value) {
    this.#name = name;
    this.value = value;
  }

  get name () {
    return this.#name;
  }

  toJSON () {
    return {
      name: this.#name,
      value: this.value
    };
  }
}
