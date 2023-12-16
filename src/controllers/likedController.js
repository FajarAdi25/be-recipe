const { responseError, response } = require('../helpers/response');
const { getLiked, createLiked, deleteLiked } = require('../models/likedModel');

const likedController = {
  allLiked: async (req, res) => {
    try {
      const result = await getLiked();
      response(res, result.rows, 200, 'get liked successful');
    } catch (error) {
      responseError(res, 400, error.message);
    }
  },
  addLiked: async (req, res) => {
    try {
      const { body } = req;
      await createLiked(body);
      response(res, body, 200, 'add liked successful');
    } catch (error) {
      responseError(res, 400, error.message);
    }
  },
  deleteLiked: async (req, res) => {
    try {
      const id = req.params.liked_id;
      const result = await deleteLiked(id);
      response(res, result.rows, 200, 'delete liked successful');
    } catch (error) {
      responseError(res, 400, error.message);
    }
  },
};

module.exports = likedController;
