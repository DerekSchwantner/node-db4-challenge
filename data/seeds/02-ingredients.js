exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "bread", recipe_ID: 1 },
        { ingredient_name: "cheese", recipe_ID: 1 },
        { ingredient_name: "butter", recipe_ID: 1 },
        { ingredient_name: "ramen", recipe_ID: 3 },
        { ingredient_name: "water", recipe_ID: 2 }
      ]);
    });
};
