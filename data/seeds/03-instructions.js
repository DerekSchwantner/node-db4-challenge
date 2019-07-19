exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          step_number: 1,
          step: "heat pan to medium heat and melt butter",
          recipe_id: 1
        },
        {
          step_number: 2,
          step: "put two pieces of cheese between the slices of bread",
          recipe_id: 1
        },
        {
          step_number: 3,
          step: "cook until golden brown on both sides",
          recipe_id: 1
        },
        {
          step_number: 1,
          step: "pour water in glass",
          recipe_id: 2
        },
        {
          step_number: 2,
          step: "tip into mouth and swallow",
          recipe_id: 2
        },
        {
          step_number: 1,
          step: "boil water in a pot",
          recipe_id: 3
        },
        {
          step_number: 2,
          step: "cook for 5 minutes and mix spices in when fully cooked",
          recipe_id: 3
        }
      ]);
    });
};
