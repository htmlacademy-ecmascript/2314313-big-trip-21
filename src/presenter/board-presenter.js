import FiltersView from '../view/filter-view.js';
import SortView from '../view/element-sort-view.js';
import SortsView from '../view/sort-view.js';
import MainTripView from '../view/main-trip-view.js';
import WayPointView from '../view/way-point-view.js';
import ListTripEventsView from '../view/list-trip-events-view.js';
import ElementOfListView from '../view/element-of-list-view.js';
import FormEditView from '../view/form-edit-view.js';
import { render } from '../framework/render.js';
import OpenEventButtonView from '../view/open-event-button-view.js';
import DivElementOfWayPoint from '../view/div-way-point-view.js';
import { renderElementWithoutComponent } from '../framework/render.js';

const sortsTabs = [
  {
    type: 'Day',
    id: 'day',
    checked: 'checked',
    disabled: null
  },
  {
    type: 'Event',
    id: 'event',
    checked: null,
    disabled: 'disabled'
  },
  {
    type: 'Time',
    id: 'time',
    checked: null,
    disabled: null
  },
  {
    type: 'Price',
    id: 'price',
    checked: null,
    disabled: null
  },
  {
    type: 'Offer',
    id: 'offer',
    checked: null,
    disabled: 'disabled'
  }
];

export default class BoardPresenter {
  #boardComponentFilter = new FiltersView();
  #boardSort = new SortsView();
  #mainTrip = new MainTripView();
  #boardEventsList = new ListTripEventsView();
  #boardFormEditView = null;
  #boardWayPoint = null;
  #boardContainerFilter = null;
  #boardContainerSort = null;
  #tripInfoElement = null;
  #destinationModel = null;
  #offerModel = null;
  #pointModel = null;
  #openEventButtonComponent = null;
  #elementOfListView = null;
  #destinationOfPoint = null;
  #offersOfPoint = null;
  #divElementOfWayPoint = null;


  //#divElementOfWayPoint = null;

  constructor(boardContainerFilter, boardContainerSort, tripInfoElement, destinationModel, offerModel, pointModel) {
    this.#boardContainerFilter = boardContainerFilter;
    this.#boardContainerSort = boardContainerSort;
    this.#tripInfoElement = tripInfoElement;
    this.#destinationModel = destinationModel;
    this.#offerModel = offerModel;
    this.#pointModel = pointModel;

  }

  #submitForm = (evt, point) => {
    this.#divElementOfWayPoint = new DivElementOfWayPoint();
    this.#destinationOfPoint = this.#destinationModel.getById(point.destination);
    this.#offersOfPoint = this.#offerModel.getByType(point.type);
    this.#boardWayPoint = new WayPointView(point, this.#offersOfPoint, this.#destinationOfPoint);

    render(this.#divElementOfWayPoint, evt.target.parentNode);

    Array.from(this.#boardWayPoint.element).forEach((element) => {
      renderElementWithoutComponent(element, this.#divElementOfWayPoint.element);
    });

    this.#openEventButtonComponent = new OpenEventButtonView({
      onClick: this.#openEventButtonClick,
      point: point,
      destination: this.#destinationOfPoint,
      place: this.#elementOfListView,
    });

    render(this.#openEventButtonComponent, this.#divElementOfWayPoint.element);
    evt.target.remove();
  };

  #openEventButtonClick = (point, destination, place, evt) => {

    this.#boardFormEditView = new FormEditView({
      point: point,
      destination: destination,
      onSubmit : this.#submitForm
    });
    this.#elementOfListView = new ElementOfListView();
    render(this.#boardFormEditView, this.#elementOfListView.element);
    render(this.#elementOfListView, place.element);
    evt.target.removeEventListener('click', this.#openEventButtonClick);
    evt.target.parentNode.remove();
  };

  init() {
    render(this.#boardComponentFilter, this.#boardContainerFilter);
    render(this.#boardSort, this.#boardContainerSort);
    sortsTabs.forEach(({type, id, checked, disabled}) => render(new SortView(type, id, checked, disabled), this.#boardContainerSort.lastElementChild));
    render(this.#mainTrip, this.#tripInfoElement, 'afterbegin');
    render(this.#boardEventsList, this.#boardContainerSort);
    //render(new ElementOfListView(this.#boardFormEditView.getTemplate(this.#pointModel.getPoints()[1], this.#destinationModel.getById(this.#pointModel.getPoints()[1].destination))), this.#boardEventsList.element);

    this.#pointModel.getPoints().forEach((point) => {

      this.#elementOfListView = new ElementOfListView();
      this.#divElementOfWayPoint = new DivElementOfWayPoint();
      this.#destinationOfPoint = this.#destinationModel.getById(point.destination);
      this.#offersOfPoint = this.#offerModel.getByType(point.type);
      this.#boardWayPoint = new WayPointView(point, this.#offersOfPoint, this.#destinationOfPoint);


      render(this.#elementOfListView, this.#boardEventsList.element);
      render(this.#divElementOfWayPoint, this.#elementOfListView.element);
      // divElementOfWayPoint1.element.forEach((element) => {
      //   render(boardWayPoint, element)
      // })

      Array.from(this.#boardWayPoint.element).forEach((element) => {
        renderElementWithoutComponent(element, this.#divElementOfWayPoint.element);
      });

      this.#openEventButtonComponent = new OpenEventButtonView({
        onClick: this.#openEventButtonClick,
        point: point,
        destination: this.#destinationOfPoint,
        place: this.#elementOfListView,
      });

      render(this.#openEventButtonComponent, this.#divElementOfWayPoint.element);

      //render(boardWayPoint, divElementOfWayPoint1.element);

      // const boardWayPoint = new WayPointView(point, this.#offerModel.getByType(point.type), this.#destinationModel.getById(point.destination));
      // render(new ElementOfListView(createDivPointElement(boardWayPoint.template, this.#openEventButtonComponent.template)), this.#boardEventsList.element);
      // render(new ElementOfListView())

    });
    // for(let i = 0; i < 3; i++){
    //   render(new ElementOfListView(this.boardWayPoint.getTemplate()), this.boardEventsList.getElement());
    // }
  }
}

