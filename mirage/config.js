import staticIngredients from './utils/ingredients';
import Ingredient from './utils/ingredients.model';

export default function () {
  this.namespace = '/api';

  this.get('/ingredients/:id', function (db, request) {
    if (!db.ingredients.length) {
      staticIngredients.forEach(i => db.ingredients.create(i));
    }

    return { data: db.ingredients.find(request.params.id) }
  })

  this.get('/ingredients', function (db, request) {
    if (!db.ingredients.length) {
      staticIngredients.forEach(i => db.ingredients.create(i));
    }
    const data = db.ingredients.all().models;
    const query = request.queryParams.name;

    if (query !== undefined) {
      let filteredIngredients = data.filter(i => {
        return i.attributes.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      })
      return { data: filteredIngredients };
    }
    return { data };
  });

  this.post('/ingredients', function (db, request) {
    const parsedData = JSON.parse(request.requestBody).data;
    const ingredient = Object.assign({}, parsedData, {
      id: Date.now(),
      attributes: new Ingredient(parsedData.attributes),
    });

    return db.ingredients.create(ingredient);
  });
}
