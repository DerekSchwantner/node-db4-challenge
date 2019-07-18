exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();

      tbl
        .string("ingredient_name", 128)
        .notNullable()
        .unique();
      tbl
        .string("quantity", 256)
        .notNullable()
        .unique();
      tbl
        .integer("ingredient_ID", 256)
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("ingredients", tbl => {
      tbl.increments();

      tbl
        .string("ingredient_name", 128)
        .notNullable()
        .unique();
    })
    .createTable("instructions", tbl => {
      tbl.increments();

      tbl.integer("step_number").notNullable();

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("instructions");
};
