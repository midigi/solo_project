const express = require('express');
const router = express.Router();
const {ArticleComments} = require('../../db/models');
const asyncHandler = require('express-async-handler');
const {requireAuth} = require('../../utils/auth');


router.get('/', asyncHandler(async (req, res)=>{
    const comments = await ArticleComments.findAll();
    return res.json({comments});
}))

router.get(`/:id(\\d+)`, asyncHandler(async (req, res)=>{
    const id = Number.parseInt(req.params.id);
    const comments = await ArticleComments.findAll({where: {
        article_id: id
    }
    });
    return res.json({ comments });
}))

router.post('/', requireAuth, asyncHandler(async (req, res) => {
    const comments = await ArticleComments.build({
        user_id: req.body.user_id,
        article_id: req.body.article_id,
        content: req.body.content
    })
    await comments.save();
    res.json({comments})
}));

module.exports = router;
