import FiltersView from '../view/filter-view.js';
import SortView from '../view/element-sort-view.js';
import SortsView from '../view/sort-view.js';
import MainTripView from '../view/main-trip-view.js';
import WayPointView from '../view/way-point-view.js';
import ListTripEventsView from '../view/list-trip-events-view.js';
import ElementOfListView from '../view/element-of-list-view.js';
import FormEditView from '../view/form-edit-view.js';
import { render } from '../render.js';


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
  boardComponentFilter = new FiltersView();
  boardSort = new SortsView();
  mainTrip = new MainTripView();
  pointView = new WayPointView();
  boardEventsList = new ListTripEventsView();
  boardFormEditView = new FormEditView();
  boardWayPoint = new WayPointView();

  constructor(boardContainerFilter, boardContainerSort, tripInfoElement) {
    this.boardContainerFilter = boardContainerFilter;
    this.boardContainerSort = boardContainerSort;
    this.tripInfoElement = tripInfoElement;
  }

  init() {
    render(this.boardComponentFilter, this.boardContainerFilter);
    render(this.boardSort, this.boardContainerSort);
    sortsTabs.forEach(({type, id, checked, disabled}) => render(new SortView(type, id, checked, disabled), this.boardContainerSort.lastElementChild));
    render(this.mainTrip, this.tripInfoElement, 'afterbegin');
    render(this.boardEventsList, this.boardContainerSort);
    render(new ElementOfListView(this.boardFormEditView.getTemplate()), this.boardEventsList.getElement());
    for(let i = 0; i < 3; i++){
      render(new ElementOfListView(this.boardWayPoint.getTemplate()), this.boardEventsList.getElement());
    }
  }
}

