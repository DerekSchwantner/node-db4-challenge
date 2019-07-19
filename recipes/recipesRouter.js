const express = require("express");

const Recipes = require("./recipesHelpers");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id/shoppingList", async (req, res) => {
  const { id } = req.params;
  try {
    const shoppingList = await Recipes.getShoppingList(id);
    res.status(200).json(shoppingList);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id/shoppingList", async (req, res) => {
  const { id } = req.params;
  try {
    const shoppingList = await Recipes.getShoppingList(id);
    if (shoppingList.length > 0) {
      res.status(200).json(shoppingList);
    } else {
      res
        .status(404)
        .json({ message: "Could not find list for given recipe ID" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to get Shopping List" });
  }
});

router.get("/:id/instructions", async (req, res) => {
  const { id } = req.params;
  try {
    const instructions = await Recipes.getInstructions(id);
    if (instructions.length > 0) {
      res.status(200).json(instructions);
    } else {
      res
        .status(404)
        .json({ message: "Could not find instructions for given recipe ID" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to get Instructions" });
  }
});

module.exports = router;
