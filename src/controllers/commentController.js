const { response, responseError } = require('../helpers/response');
const { getAllComment, createComment, destroyComment } = require('../models/commentModel');

const commentController = {
  allComment: async (req, res) => {
    try {
      const result = await getAllComment();
      response(res, result.rows, 200, 'get comment successful');
    } catch (error) {
      responseError(res, 400, error.message);
    }
  },
  addComment: async (req, res) => {
    try {
      const { body } = req;
      await createComment(body);
      response(res, body, 201, 'add comment successfull');
    } catch (error) {
      responseError(res, 400, error.message);
    }
  },
  deleteComment: async (req, res) => {
    try {
      const id = req.params.comment_id;
      const result = await destroyComment(id);
      response(res, result.rows, 200, 'delete successful');
    } catch (error) {
      responseError(res, 400, error.message);
    }
  },
};

module.exports = commentController;
