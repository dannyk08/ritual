import Component from '@ember/component';

export default Component.extend({
  actions: {
    onSubmit(form) {
      this.get('onSubmit')(form);
    }
  }
});
