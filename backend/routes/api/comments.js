const express = require('express');
const router = express.Router();
const {ArticleComments} = require('../../db/models');
const asyncHandler = require('express-async-handler');
const {requireAuth} = require('../../utils/auth');


router.get('/', asyncHandler(async (req, res)=>{
    const comments = await ArticleComments.findAll();
    return res.json({comments});
}))

router.post('/', requireAuth, asyncHandler(async (req, res) => {
    console.log("this is the req body!!!!!", req.body)
    const article = await ArticleComments.build({
        user_id: req.user.id,
        content: req.body.content
    })
    await article.save();
    res.json({article})
    // res.redirect('/');
}));

module.exports = router;
