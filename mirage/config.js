import data from './utils/ingredients';

export default function () {
  this.namespace = '/api';

  this.get('/ingredients/:id', function (db, request) {
    return {
      data: data.find(i => i.id === parseInt(request.params.id))
    }
  })

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

  // this.post('/ingredients', function (db, request) {
  //   // const ingredient = JSON.parse(request.requestBody).data;
  //   console.log({ db, request });
  //   // if (!ingredient.id) {
  //   //   ingredient['id'] = data.length + 1;
  //   //   ingredient.attributes['natural-sources'] = splitToArray(ingredient.attributes['natural-sources'])
  //   //   // ingredient.attributes['benefits'] = ingredient.attributes['benefits']
  //   //   console.log({ ingredient });
  //   // }

  //   // return db.ingredients.create(ingredient);
  // });
}

// function splitToArray(source) {
//   return source.split(',').map(i => i.trim());
// }
