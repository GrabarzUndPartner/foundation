export default class Deep {
  #name;
  #value;

  constructor (name, value) {
    this.#name = name;
    this.#value = value ? String(value) : value;
  }

  get name () {
    return this.#name;
  }

  get value () {
    return this.#value;
  }
}
