var express = require('express');
var router = express.Router();

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('blogEntries',  {
    isLoggedIn: req.isLoggedIn,
    blogEntries: [
        {
            title: "Blog entry 1",
            author: "Camila",
            createdDate: "07/07/2020 3:49 PM",
            content: "Sarasasdasdasdasd"
        },
        {
            title: "Blog entry 2",
            author: "Mariano",
            createdDate: "07/06/2020 1:35 AM",
            content: "mas sasadarasrasrsa"
        }
    ]
});
});

router.get('/signUp', function(req, res, next) {
  res.render('signup',  { isLoggedIn: false });
});

router.get('/login', function(req, res, next) {
  res.render('login', { isLoggedIn: false });
});

module.exports = router;
