const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { UserArticles, User } = require('../../db/models');
const {requireAuth} = require('../../utils/auth')

router.get('/', asyncHandler(async (req, res)=>{
    const articles = await UserArticles.findAll();
    return res.json({articles});
}))

router.get(`/:id(\\d+)`, asyncHandler(async (req, res)=>{
    const id = Number.parseInt(req.params.id);
    const article = await UserArticles.findOne({where: id});
    return res.json({article});
}))

router.post('/', requireAuth, asyncHandler(async (req, res) => {
    const article = await UserArticles.build({
        user_id: req.user.id,
        title: req.body.title,
        blurb: req.body.blurb,
        content: req.body.content
    })
    await article.save();
    res.json({article})
    // res.redirect('/');
}));

module.exports = router;
