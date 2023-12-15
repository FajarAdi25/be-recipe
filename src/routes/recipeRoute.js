const express = require('express');
const {
  addRecipe, editRecipe, deleteRecipe, allRecipeAndQuery,
} = require('../controllers/recipeController');

const router = express.Router();

router.get('/recipes', allRecipeAndQuery);
router.post('/addRecipe', addRecipe);
router.put('/recipe/:recipes_id', editRecipe);
router.delete('/recipe/:recipes_id', deleteRecipe);

module.exports = router;
