import { cyrb53 } from '../../utils/hash';

export default class Dataset {
  #label = null;
  #model = null;

  constructor (label, model) {
    this.#label = label;
    this.#model = model;
  }

  get key () {
    return cyrb53(JSON.stringify({ label: this.#label, name: this.#model.name }));
  }

  get label () {
    return this.#label;
  }

  get model () {
    return this.#model;
  }

  toJSON () {
    return {
      label: this.#label,
      model: this.#model.toJSON()
    };
  }
}
