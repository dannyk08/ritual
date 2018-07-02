import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  syntheticForm: DS.attr('string'),
  dosage: DS.attr('string'),
  origin: DS.attr('string'),
  manufacturer: DS.attr('string'),
  image: DS.attr('string'),
  benefits: DS.attr(),
  naturalSources: DS.attr(),
});
