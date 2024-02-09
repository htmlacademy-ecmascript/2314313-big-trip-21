import dayjs from 'dayjs';
// import { DURATION } from './const.js';

//let date = dayjs().substract(getRandomInteger(0, DURATION.DAY), 'day').toDate();

function getRandomInteger(a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

function createDescription(arr) {
  const finishedArr = [];
  const numOfProposals = getRandomInteger(0, arr.length);
  for (let i = 0; i < numOfProposals; i++){
    finishedArr.push(arr[getRandomInteger(0, arr.length)]);
  }
  return finishedArr.join(' ');
}

function getRandomValue (arr) {
  return arr[getRandomInteger(0, arr.length - 1)];
}

function toEventDateFormat(date) {
  return dayjs(date).format('YYYY-MM-DD');
}

function toEventDateFormatContent(date) {
  return dayjs(date).format('DD MMM');
}

function toUpperFirstLetter(str){
  return str[0].toUpperCase() + str.slice(1);
}

function toDateTimeFormat(date) {
  return dayjs(date).format('YYYY-MM-DDTHH:mm');
}

function toDateTimeFormatContent(date){
  return dayjs(date).format('HH:mm');
}

function getDurationMinutes(dateFrom, dateTo){
  return dayjs(dateTo).diff(dateFrom, 'minutes');
}

function toDateEditingForm(date){
  return dayjs(date).format('DD/MM/YY HH:mm');
}

//function getArrayOffersByType

function getElementOfList(title, price){
  return `<li class="event__offer">
  <span class="event__offer-title">${title}</span>
  &plus;&euro;&nbsp;
  <span class="event__offer-price">${price}</span>
</li>`;
}

function getPicture(obj){
  return `<img class="event__photo" src="${obj.src}" alt="${obj.alt}">`;
}

function addElementOfPictureList(destination){
  const elements = [];
  destination.pictures.forEach((pictureInfo) => {
    const picture = getPicture(pictureInfo);
    elements.push(picture);
  });
  return elements;
}

function addElementsInOffersList(offers){
  const elements = [];
  offers.forEach((offer) => {
    const li = getElementOfList(offer.title, offer.price);
    elements.push(li);
  });
  return elements;
//   return `<li class="event__offer">
//   <span class="event__offer-title">${title}</span>
//   &plus;&euro;&nbsp;
//   <span class="event__offer-price">${price}</span>
// </li>`;
}


export {getRandomInteger, createDescription, getRandomValue, toEventDateFormat, toEventDateFormatContent, toUpperFirstLetter, toDateTimeFormat, toDateTimeFormatContent, getDurationMinutes, addElementsInOffersList, toDateEditingForm, addElementOfPictureList};
