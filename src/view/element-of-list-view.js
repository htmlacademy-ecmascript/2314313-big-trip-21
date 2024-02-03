import AbstractView from '../framework/view/abstract-view.js';

function createElementOfListTemplate(content) {
  return `<li class="trip-events__item">${content}</li>`;
}

export default class ElementOfListView extends AbstractView{
  #content = null;

  constructor(content) {
    super();
    this.#content = content;
  }

  get template() {
    return createElementOfListTemplate(this.#content);
  }

}
