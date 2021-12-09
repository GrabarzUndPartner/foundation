export default class Content {
  #list = [];

  constructor (list) {
    this.#list = this.#list.concat(list);
  }

  add (component, props) {
    this.#list = this.#list.concat({ component, props });
  }
}
