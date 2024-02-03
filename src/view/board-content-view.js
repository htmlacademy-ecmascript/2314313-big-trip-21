import AbstractView from '../framework/view/abstract-view.js';

function createContentTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class ContentView extends AbstractView{
  get template() {
    return createContentTemplate();
  }
}
