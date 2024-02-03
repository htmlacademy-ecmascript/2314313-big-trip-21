import AbstractView from '../framework/view/abstract-view.js';


function createSortTemplate(type, id, checked, disabled){
  return `<div class="trip-sort__item  trip-sort__item--${id}">
  <input id="sort-${id}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${id}" ${checked} ${disabled}>
  <label class="trip-sort__btn" for="sort-${id}">${type}</label>
</div>`;
}

export default class SortView extends AbstractView{
  #type = null;
  #id = null;
  #checked = null;
  #disabled = null;

  constructor (type, id, checked, disabled) {
    super();
    this.#type = type;
    this.#id = id;
    this.#checked = checked;
    this.#disabled = disabled;
  }

  get template() {
    return createSortTemplate(this.#type, this.#id, this.#checked, this.#disabled);
  }

}
