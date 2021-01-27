const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { UserArticles } = require('../../db/models');

router.get('/', asyncHandler(async (req, res)=>{
    const articles = await UserArticles.findAll();
    return res.json({articles});
}))

router.post('/createArticle', asyncHandler(async (req, res) => {
    const user= await db.User.findOne({where: {id: req.session.auth.user_id}});
    const article = await UserArticles.build({
        user_id: user.id,
        title: req.body.title,
        blurb: req.body.blurb,
        content: req.body.content
    })
    await article.save();
    res.redirect('/');
}));

module.exports = router;
