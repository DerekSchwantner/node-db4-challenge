exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "grilled cheese" },
        { recipe_name: "glass of water" },
        { recipe_name: "ramen" }
      ]);
    });
};
