const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { UserArticles, User } = require('../../db/models');
const {requireAuth} = require('../../utils/auth')

router.get('/', asyncHandler(async (req, res)=>{
    const articles = await UserArticles.findAll()
    return res.json({articles})
}));

router.get(`/:id(\\d+)`, asyncHandler(async (req, res)=>{
    const id = Number.parseInt(req.params.id);
    const article = await UserArticles.findOne({where: id});
    return res.json({article});
}))

// router.get(`/:id(\\d+)`, asyncHandler(async (req, res)=>{
//     const id = Number.parseInt(req.params.id);
//     const articleFind = await UserArticles.findAll({
//         where: {
//             id
//         },
//         include: [
//             {
//                 model: User
//             }
//         ]
//     });
    // console.log("articles!!!!!!!", articleFind);
    // const articleList = articleFind.map(article => {
    //     return {
    //         id: article.id,
    //         user_id: article.user_id,
    //         title: article.title,
    //         blurb: article.blurb,
    //         content: article.content,
    //         username: article.User.username
    //     }
    // })
//     return res.json({articleList});
// }))

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
