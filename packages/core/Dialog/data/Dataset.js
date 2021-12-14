export default class Dataset {
  #components = [];

  add (config) {
    this.#components = this.#components.concat(config);
  }

  get components () {
    return this.#components;
  }
}
