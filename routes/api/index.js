const router = require('express').Router();
const userRoutes = require('./user-routes');
const sessionRoutes = require('./session-routes');

router.use('/users', userRoutes);
router.use('/sessions', sessionRoutes);

module.exports = router;