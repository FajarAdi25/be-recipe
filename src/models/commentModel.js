const connectDb = require('../configs/db');

const getAllComment = async () => {
  const queryComment = await connectDb.query(
    `SELECT 
      *,
      TO_CHAR(comment.created_at, 'DD-MM-YYYY HH24:MI:SS') AS created_at
    FROM comment`,
  );
  return queryComment;
};

const createComment = async (body) => {
  const queryComment = await connectDb.query(
    `INSERT INTO comment (commen, users_id, recipes_id) VALUES ('${body.commen}', ${body.users_id}, ${body.recipes_id})`,
  );
  return queryComment;
};

const destroyComment = async (id) => {
  const queryComment = await connectDb.query(
    `DELETE FROM comment WHERE comment.comment_id = ${id}`,
  );
  return queryComment;
};

module.exports = {
  getAllComment,
  createComment,
  destroyComment,
};
