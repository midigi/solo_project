const router = require('express').Router();

const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth, restoreUser  } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const articleRouter = require('./articles.js');
const commentsRouter = require('./comments.js');

router.use('/session', sessionRouter);

router.use('/articles', articleRouter);

router.use('/users', usersRouter);

router.use('/comments', commentsRouter);


// Test routes for auth
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       },
//     })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
//   });


module.exports = router;
