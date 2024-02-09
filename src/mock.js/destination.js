import { DESCRIPTION, CITIES } from './const.js';
import { createDescription, getRandomInteger, getRandomValue } from './utils.js';

function generateDestination() {
  const city = getRandomValue(CITIES);

  return {
    id: crypto.randomUUID(),
    name: city,
    description: createDescription(DESCRIPTION),
    pictures: [
      {
        'src' : `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': `${city} description`
      }
    ]
  };
}

export { generateDestination };
