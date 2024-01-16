import BoardPresenter from './presenter/board-presenter.js';
import MockService from './service/service-mock.js';
import DestinationModel from './model/destination-model.js';
import OfferModel from './model/offer-model.js';
import PointModel from './model/point-model.js';

const headerElement = document.body.querySelector('.page-header');
const tripInfoElement = headerElement.querySelector('.trip-main');
const siteHeaderElement = tripInfoElement.querySelector('.trip-controls__filters');
const sectionTripEventsSort = document.querySelector('.trip-events');

const mockService = new MockService();
const destinationModel = new DestinationModel(mockService);
const offerModel = new OfferModel(mockService);
const pointModel = new PointModel(mockService);
const boardPresenter = new BoardPresenter(siteHeaderElement, sectionTripEventsSort, tripInfoElement, destinationModel, offerModel, pointModel);
boardPresenter.init();
