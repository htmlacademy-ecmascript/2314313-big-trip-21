export default class PointModel {
  #service = null;
  #points = null;

  constructor(service) {
    this.#service = service;
    this.#points = this.#service.getPoint();
  }

  getPoints(){
    return this.#points;
  }
}
