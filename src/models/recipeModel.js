const connectDb = require('../configs/db');

const findIdRecipe = async (id) => {
  const queryRecipe = await connectDb.query(
    `SELECT 
            *
        FROM 
            food_recipes
        LEFT JOIN 
            users
        ON 
            food_recipes.users_id = users.users_id
        WHERE 
            food_recipes.recipes_id = ${id}`,
  );
  return queryRecipe;
};

const createRecipe = async (body) => {
  const queryRecipe = await connectDb.query(
    `INSERT INTO food_recipes (name_recipes, ingredients ,image, name_video, video, users_id) 
        VALUES ('${body.name_recipes}','${body.ingredients}','${body.image}','${body.name_video}','${body.video}',${body.users_id})`,
  );
  return queryRecipe;
};

const updateRecipe = async (body, id) => {
  const queryRecipe = await connectDb.query(
    `UPDATE food_recipes SET name_recipes = '${body.name_recipes}', image = '${body.image}',ingredients= '${body.ingredients}',video ='${body.video}', name_video = '${body.name_video}'WHERE food_recipes.recipes_id=${id}`,
  );
  return queryRecipe;
};

const destroyRecipe = async (id) => {
  const queryRecipe = await connectDb.query(
    `DELETE FROM food_recipes WHERE food_recipes.recipes_id = ${id}`,
  );
  return queryRecipe;
};

const getRecipeAndQuery = async (query) => {
  const queryRecipe = await connectDb.query(
    `SELECT 
           *
        FROM  
            food_recipes
        WHERE
            food_recipes.${query.columnName}
        ILIKE 
            '%${query.search}%' 
        ORDER BY 
            food_recipes.${query.columnName} ${query.sort} 
        LIMIT 
            ${query.limit} 
        OFFSET 
            ${query.offset}`,
  );
  return queryRecipe;
};

const countPage = async () => {
  const queryRecipe = await connectDb.query(
    'SELECT COUNT(*) FROM food_recipes',
  );
  return queryRecipe;
};

module.exports = {
  findIdRecipe,
  createRecipe,
  updateRecipe,
  destroyRecipe,
  getRecipeAndQuery,
  countPage,
};
