export default class PointModel {
  constructor(service) {
    this.service = service;
    this.points = service.getPoint();
  }

  getPoints(){
    return this.points;
  }
}
