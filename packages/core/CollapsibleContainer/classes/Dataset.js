import Options from './Options';

export default class Dataset {
  #options = null;
  #model = null;

  constructor (options, model) {
    this.#options = new Options(options);
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
      options: this.#options.toJSON(),
      model: this.#model.toJSON()
    };
  }
}
