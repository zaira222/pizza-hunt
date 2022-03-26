const router = require('express').Router();
const { addComment,
    removeComment, 
    addReply, 
    removeReply } = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment)

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeReply);

module.exports = router;