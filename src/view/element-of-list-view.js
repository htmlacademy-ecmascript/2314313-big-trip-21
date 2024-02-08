import AbstractView from '../framework/view/abstract-view.js';

function createElementOfListTemplate() {
  return '<li class="trip-events__item"></li>';
}

export default class ElementOfListView extends AbstractView{
  //#content = null;

  // constructor(content) {
  //   super();
  //   this.#content = content;
  // }

  get template() {
    return createElementOfListTemplate();
  }

}
