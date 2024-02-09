import AbstractView from '../framework/view/abstract-view.js';
import { toEventDateFormat, toEventDateFormatContent, toUpperFirstLetter, toDateTimeFormat, getDurationMinutes, addElementsInOffersList, toDateTimeFormatContent } from '../mock.js/utils.js';


function createWayPointTemplate(point, offers, destination) {
  return `
  <div class="event">
  <time class="event__date" datetime=${toEventDateFormat(point.dateFrom)}>${toEventDateFormatContent(point.dateFrom)}</time>
  <div class="event__type">
    <img class="event__type-icon" width="42" height="42" src="img/icons/${point.type}.png" alt="Event type icon">
  </div>
  <h3 class="event__title">${toUpperFirstLetter(point.type)} ${destination.name}</h3>
  <div class="event__schedule">
    <p class="event__time">
      <time class="event__start-time" datetime="${toDateTimeFormat(point.dateFrom)}">${toDateTimeFormatContent(point.dateFrom)}</time>
      &mdash;
      <time class="event__end-time" datetime="${point.dateTo}">${toDateTimeFormatContent(point.dateTo)}</time>
    </p>
    <p class="event__duration">${getDurationMinutes(point.dateFrom, point.dateTo)}M</p>
  </div>
  <p class="event__price">
    &euro;&nbsp;<span class="event__price-value">${point.price}</span>
  </p>
  <h4 class="visually-hidden">Offers:</h4>
  <ul class="event__selected-offers">${addElementsInOffersList(offers).join('<br>')}
  </ul>
  <button class="event__favorite-btn event__favorite-btn--active" type="button">
    <span class="visually-hidden">Add to favorite</span>
    <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
    </svg>
  </button>
  <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
                </div>
`;
}

// function createPointElement(template) {
//   const newElement = document.createElement('div');
//   newElement.innerHTML = template;
//   return newElement.children;
// }

export default class WayPointView extends AbstractView{
  #point = null;
  #offers = null;
  #destination = null;
  #handleEditClick = null;
  //#element = null;

  constructor({point, offers, destination, onEditClick}) {
    super();
    this.#point = point;
    this.#offers = offers;
    this.#destination = destination;
    this.#handleEditClick = onEditClick;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
  }

  get template(){
    return createWayPointTemplate(this.#point, this.#offers, this.#destination);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };

  // get element() {
  //   if (!this.#element) {
  //     this.#element = createPointElement(this.template);
  //   }
  //   return this.#element;
  // }

}
