import AbstractView from '../framework/view/abstract-view.js';

function createOpenEventButtonView() {
  return `<button class="event__rollup-btn" type="button">
  <span class="visually-hidden">Open event</span>
</button>`;
}

export default class OpenEventButtonView extends AbstractView {
  #handleClick = null;
  #point = null;
  #destination = null;
  #place = null;

  constructor({onClick, point, destination, place}) {
    super();
    this.#point = point;
    this.#destination = destination;
    this.#place = place;
    this.#handleClick = onClick;
    this.element.addEventListener('click', this.#clickHandler);
  }

  get template (){
    return createOpenEventButtonView();
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick(this.#point, this.#destination, this.#place, evt);
  };
}

