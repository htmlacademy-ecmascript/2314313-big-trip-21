import AbstractView from '../framework/view/abstract-view.js';

function createSortsTemplate() {
  return '<form class="trip-events__trip-sort  trip-sort" action="#" method="get"></form>';
}

export default class SortsView extends AbstractView{
  get template() {
    return createSortsTemplate();
  }

}
