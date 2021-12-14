export default class Dataset {
  #options = null;
  #model = null;

  constructor (options, model) {
    this.#options = options;
    this.#model = model;
  }

  get options () {
    return this.#options;
  }

  get model () {
    return this.#model;
  }

  toJSON () {
    return {
      options: this.#options,
      model: this.#model.toJSON()
    };
  }
}
