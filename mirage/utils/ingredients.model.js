export default class Ingredient {
  constructor(obj) {
    this.name = obj && obj.name;
    this.dosage = obj && obj.dosage;
    this.origin = obj && obj.origin;
    this.manufacturer = obj && obj.manufacturer;
    this.image = obj && obj.image;
    this.benefits = obj && obj.benefits;
    this['natural-sources'] = obj && this.naturalSourcesArray(obj['natural-sources']);
    // this['syntheticForm'] = obj && obj['syntheticForm'];
  }

  naturalSourcesArray(sources) {
    return sources ? sources.split(',').map(i => i.trim()) : [];
  }
}
