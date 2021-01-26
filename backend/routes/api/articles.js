const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { UserArticles } = require('../../db/models');

router.get('/', asyncHandler(async (req, res)=>{
    const articles = await UserArticles.findAll();
    return res.json({articles});
}))

module.exports = router;
