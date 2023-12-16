const connectDb = require('../configs/db');

const getSaved = async () => {
  const query = await connectDb.query(
    `SELECT 
      *
      FROM saved`,
  );
  return query;
};

const createSaved = async (body) => {
  const query = await connectDb.query(
    `INSERT INTO saved (users_id,recipes_id) VALUES (${body.users_id}, ${body.recipes_id})`,
  );
  return query;
};

const deleteSaved = async (id) => {
  const query = await connectDb.query(
    `DELETE FROM saved WHERE saved.saved_id = ${id}`,
  );
  return query;
};

module.exports = {
  getSaved,
  createSaved,
  deleteSaved,
};
