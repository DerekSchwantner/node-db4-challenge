const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("ingredients")
    .where({ recipe_id: id })
    .then(list => {
      if (list) {
        return list;
      } else {
        return null;
      }
    });
}

function getInstructions(id) {
  return db("instructions")
    .where({ recipe_id: id })
    .orderBy("instructions.step_number", "asc");
}
