import data from './utils/ingredients';

export default function () {
  this.namespace = '/api';

  this.get('/ingredients', function (db, request) {
    const query = request.queryParams.name;
    if (query !== undefined) {
      let filteredIngredients = data.filter(i => {
        return i.attributes.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      })
      return { data: filteredIngredients };
    }
    return { data };
  });
}
