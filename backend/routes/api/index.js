const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const articleRouter = require('./articles.js');
const commentsRouter = require('./comments.js');

router.use('/session', sessionRouter);

router.use('/articles', articleRouter);

router.use('/users', usersRouter);

router.use('/comments', commentsRouter);

module.exports = router;
