const express = require('express');
const { allComment, addComment, deleteComment } = require('../controllers/commentController');

const router = express.Router();

router.get('/comment', allComment);
router.post('/comment', addComment);
router.delete('/comment/:comment_id', deleteComment);

module.exports = router;
