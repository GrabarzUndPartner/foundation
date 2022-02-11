import Option from './Option';

export default class Options {
  #options = [];
  constructor (options) {
    this.#options = options.map((option) => {
      if (option instanceof Option) {
        return option;
      }
      const { label, value, content } = option;
      return new Option(label, value, content);
    });
  }

  [Symbol.iterator] () {
    return this.#options.values();
  }

  toJSON () {
    return [].concat(this.#options);
  }
}
