import Controller from '@ember/controller';

import { dataSubmission } from './../../helpers/ingredients-form';

export default Controller.extend({
  actions: {
    handleSubmit() {
      this.send('submit', { type: dataSubmission.new })
    },
  },
});
