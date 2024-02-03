export default class OfferModel {
  #service = null;
  #offers = null;

  constructor(service) {
    this.#service = service;
    this.#offers = this.#service.getOffer();
  }

  get(){
    return this.#offers;
  }

  getByType(type){
    return this.#offers.find((offer) => offer.type === type).offers;
  }
}
