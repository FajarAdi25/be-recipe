const connectDb = require('../configs/db');

const getLiked = async () => {
  const query = await connectDb.query(
    `SELECT 
      liked.*
      FROM liked`,
  );
  return query;
};

const createLiked = async (body) => {
  const query = await connectDb.query(
    `INSERT INTO liked (users_id,recipes_id) VALUES (${body.users_id},${body.recipes_id})`,
  );
  return query;
};

const deleteLiked = async (id) => {
  const query = await connectDb.query(
    `DELETE FROM liked WHERE liked.liked_id = ${id}`,
  );
  return query;
};

module.exports = {
  getLiked,
  createLiked,
  deleteLiked,
};
