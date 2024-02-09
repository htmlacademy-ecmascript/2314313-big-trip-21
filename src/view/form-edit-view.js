import AbstractView from '../framework/view/abstract-view.js';
import { TYPES } from '../mock.js/const.js';
import { toDateEditingForm, addElementOfPictureList } from '../mock.js/utils.js';

function generateCheckboxElements(types) {
  const newElement = document.createElement('div');
  types.forEach((type) => {
    const checkboxElement = document.createElement('div');
    checkboxElement.innerHTML = (`<div class="event__type-item">
      <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type.toLowerCase()}">
      <label class="event__type-label  event__type-label--${type.toLowerCase()}" for="event-type-bus-1">${type}</label>
    </div>`);

    return newElement.appendChild(checkboxElement);
  }
  );
  return newElement.innerHTML;
}

function createFormEditTemplate(point, destination) {
  return `<form class="event event--edit" action="#" method="post">
  <header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src=img/icons/${point.type}.png alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
      ${generateCheckboxElements(TYPES)}
      </fieldset>
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${point.type}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
      <datalist id="destination-list-1">
        <option value="Amsterdam"></option>
        <option value="Geneva"></option>
        <option value="Chamonix"></option>
      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${toDateEditingForm(point.dateFrom)}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${toDateEditingForm(point.dateTo)}">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span> &euro; ${point.price}
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Cancel</button>
  </header>

  <section class="event__details">
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${destination.description}</p>

      <div class="event__photos-container">
        <div class="event__photos-tape">
        ${addElementOfPictureList(destination).join('<br>')}
        </div>
      </div>
    </section>
  </section>
</form>`;
}

export default class FormEditView extends AbstractView{
  #point = null;
  #destination = null;
  #submitForm = null;

  constructor({point, destination, onSubmit}){
    super();
    this.#point = point;
    this.#destination = destination;
    this.#submitForm = onSubmit;
    this.element.addEventListener('submit', this.#formSubmitter);
  }

  get template() {
    return createFormEditTemplate(this.#point, this.#destination);
  }

  #formSubmitter = (evt) => {
    evt.preventDefault();
    this.#submitForm(evt, this.#point);
  };

}
