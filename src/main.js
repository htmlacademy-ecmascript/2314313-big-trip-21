import BoardPresenter from './presenter/board-presenter.js';

const headerElement = document.body.querySelector('.page-header');
const tripInfoElement = headerElement.querySelector('.trip-main');
const siteHeaderElement = tripInfoElement.querySelector('.trip-controls__filters');
const sectionTripEventsSort = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter(siteHeaderElement, sectionTripEventsSort, tripInfoElement);
boardPresenter.init();
