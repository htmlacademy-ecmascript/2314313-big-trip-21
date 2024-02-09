import AbstractView from '../framework/view/abstract-view.js';

function createDivElementOfWayPint() {
  return '<div class = "event"></div>';
}

export default class DivElementOfWayPoint extends AbstractView{


  get template() {
    return createDivElementOfWayPint();
  }
}
