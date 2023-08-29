import { createElement } from '../render.js';

function createElementOfListTemplate(content) {
  return `<li class="trip-events__item">${content}</li>`;
}

export default class ElementOfListView {

  constructor(content) {
    this.content = content;
  }

  getTemplate() {
    return createElementOfListTemplate(this.content);
  }

  getElement() {
    if(!this.element){
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
