import { cyrb53 } from '../../utils/hash';

export default class Option {
  #label = null;
  #value = null;
  #content = null;

  constructor (label, value, content) {
    this.#label = label;
    this.#value = value;
    this.#content = content;
  }

  get key () {
    return `${cyrb53(JSON.stringify(this.toJSON()))}`;
  }

  get label () {
    return this.#label;
  }

  get value () {
    return this.#value;
  }

  get content () {
    return this.#content;
  }

  toJSON () {
    return {
      label: this.#label,
      value: this.#value,
      content: this.#content
    };
  }
}
