import { createElement } from '../render.js';


function createSortTemplate(type, id, checked, disabled){
  return `<div class="trip-sort__item  trip-sort__item--${id}">
  <input id="sort-${id}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${id}" ${checked} ${disabled}>
  <label class="trip-sort__btn" for="sort-${id}">${type}</label>
</div>`;
}

export default class SortView {

  constructor (type, id, checked, disabled) {
    this.type = type;
    this.id = id;
    this.checked = checked;
    this.disabled = disabled;
  }

  getTemplate() {
    return createSortTemplate(this.type, this.id, this.checked, this.disabled);
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
