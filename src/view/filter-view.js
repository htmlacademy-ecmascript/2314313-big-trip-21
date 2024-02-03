import AbstractView from '../framework/view/abstract-view.js';

const filters = [
  {
    title: 'Everything',
    value: 'everything',
    id: 'filter-everything',
    checked: true
  },
  {
    title: 'Future',
    value: 'future',
    id: 'filter-future'
  },
  {
    title: 'Present',
    value: 'present',
    id: 'filter-present'
  },
  {
    title: 'Past',
    value: 'past',
    id: 'filter-past'
  }
];

function createFilterTemplate({title, value, id, checked}) {
  if(checked){
    return `<div class="trip-filters__filter">
            <input id="${id}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${value}" checked>
             <label class="trip-filters__filter-label" for="${id}">${title}</label>
           </div>`;
  } else {
    return `<div class="trip-filters__filter">
  <input id="${id}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${value}">
   <label class="trip-filters__filter-label" for="${id}">${title}</label>
 </div>`;
  }
}

function joinFilters(array) {
  return (array.map((item) => createFilterTemplate(item))).join('');
}

function createButtonTemplate() {
  return '<button class="visually-hidden" type="submit">Accept filter</button>';
}

function createFiltersTemplate () {
  return `<form class="trip-filters" action="#" method="get">${joinFilters(filters)} ${createButtonTemplate()}</form>`;
}

export default class FiltersView extends AbstractView{
  get template() {
    return createFiltersTemplate();
  }

}

