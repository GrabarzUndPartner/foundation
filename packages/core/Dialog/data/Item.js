export default class Item {
  #component;
  #props = {};

  constructor (component, props) {
    this.#component = component;
    this.#props = props;
  }

  get component () {
    return this.#component;
  }

  get props () {
    return this.#props;
  }
}
