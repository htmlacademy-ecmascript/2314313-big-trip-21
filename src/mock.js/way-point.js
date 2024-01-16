// const mockWayPoints = [
//   {
//     dueDate: new Date('2019-03-18'),
//     type: 'taxi',
//     title: 'Taxi Amsterdam',
//     time: {
//       start: new Date('2019-03-18T10:30'),
//       end: new Date('2019-03-18T11:00')
//     },
//     price: '20',
//     offers: [
//       {
//         title: 'Order Uber',
//         price: '20'
//       }
//     ]
//   },
//   {
//     dueDate: new Date('2019-03-18'),
//     type: 'flight',
//     title: 'Flight Chamonix',
//     time: {
//       start: new Date('2019-03-18T12:25'),
//       end: new Date('2019-03-18T13:35')
//     },
//     price: '160',
//     offers: [
//       {
//         title: 'Add luggage',
//         price: '50'
//       },
//       {
//         title: 'Switch to comfort',
//         price: '80'
//       }
//     ]
//   },
//   {
//     dueDate: new Date('2019-03-18'),
//     type: 'drive',
//     title: 'Drive Chamonix',
//     time: {
//       start: new Date('2019-03-18T14:30'),
//       end: new Date('2019-03-18T16:05')
//   },
//   price: '160',
//   offers: [
//     {
//       title: 'Rent a car',
//       price: '200'
//     }
//   ]
// },
// {
//   dueDate: new Date('2019-03-18'),
//   type: 'check-in',
//   title: 'Check-in Chamonix',
//     time: {
//       start: new Date('2019-03-18T12:25'),
//       end: new Date('2019-03-18T13:35')
//     },
//     price: '600',
//     offers: [
//       {
//         title: 'Add breakfast',
//         price: '50'
//       }
//     ]
//   },

// ]


// const offers = [

// ]s
import { PRICE, DURATION } from './const.js';
import dayjs from 'dayjs';
import { getRandomInteger } from './utils.js';

function generatePoint(destinationId, offerIds, type) {
  return {
    id: crypto.randomUUID(),
    price: getRandomInteger(PRICE.MIN, PRICE.MAX),
    dateFrom: dayjs().add(getRandomInteger(0, DURATION.MINUTES), 'minutes').format('YYYY-MM-DDTHH:mm:ss'),
    dateTo: dayjs().add(getRandomInteger(DURATION.MINUTES, DURATION.MINUTES * 2), 'minutes').format('YYYY-MM-DDTHH:mm:ss'),
    destination: destinationId,
    isFavorite: Boolean(getRandomInteger(0, 1)),
    offer: offerIds,
    type
  };
}

export { generatePoint };
