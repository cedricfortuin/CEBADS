export default class Model {
  #layers;
  constructor(layers = 10) {
    this.#layers = layers;
  }

  setNetwork = async () => {
    return this.#layers * 0.5;
  }
}