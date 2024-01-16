import { generateDestination } from '../mock.js/destination.js';
import { generateOffer } from '../mock.js/offer.js';
import { generatePoint } from '../mock.js/way-point.js';
import { OFFER_COUNT, TYPES, POINT_COUNT } from '../mock.js/const.js';
import { getRandomInteger, getRandomValue } from '../mock.js/utils.js';


export default class MockService {
  offers = [];
  destination = [];
  points = [];

  constructor() {
    this.destinations = this.generateDestinations();
    this.offers = this.generateOffers();
    this.points = this.generatePoints();
  }

  getDestination() {
    return this.destinations;
  }

  getOffer () {
    return this.offers;
  }

  getPoint() {
    return this.points;
  }

  generateDestinations() {
    //return TYPES.map(() => generateDestination());
    return Array.from({length: POINT_COUNT }, () => generateDestination());
  }

  generateOffers() {
    return TYPES.map((type) => ({
      type,
      offers: Array.from({length: getRandomInteger(0, OFFER_COUNT)},() => generateOffer(type))
    }));
  }

  generatePoints() {
    return Array.from({length: POINT_COUNT}, () => {
      const type = getRandomValue(TYPES);
      const destination = getRandomValue(this.destinations);
      const destinationId = destination.id;
      const hasOffers = getRandomInteger(0, 1);
      const offersByType = this.offers.find((offer) => offer.type === type);
      //const offersIds = offersByType.
      const offerIds = (hasOffers)
        ? offersByType.offers
          .slice(0, getRandomInteger(0, OFFER_COUNT))
          .map((offer) => offer.id)
        : [];
      return generatePoint(destinationId, offerIds, type);
    });
  }


}


