import { getRandomInteger } from './utils.js';
import { PRICE } from './const.js';
function generateOffer(type) {
  return {
    id: crypto.randomUUID(),
    title: `Offer ${type}`,
    price: getRandomInteger(PRICE.MIN, PRICE.MAX)
  };
}

export { generateOffer} ;
