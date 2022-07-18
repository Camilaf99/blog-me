const router = require('express').Router();

const { User } = require('../../models');

const isStringNotEmpty = (s) => {
    return(s && s.trim() !== '');
}

/*
    Creates a new session (sign in user story)

    Request: 
    {
        "user_name": "JohnWick",
        "password": "MyAwesomePassword"
    }

*/
router.post('/', (req, res) => {
    const { user_name, password } = req.body;
    if(isStringNotEmpty(user_name) && 
       isStringNotEmpty(password)) {
        User.findOne({ where: { user_name: user_name, password: Buffer.from(password).toString('base64') } })
            .then((user) => {
                if(user) {
                    // Found it
                    const session = req.session;
                    session.user_name = user_name;
                    session.isLoggedIn = true;
                    res.sendStatus(200);
                } else {
                    // Didn't find it
                    res.sendStatus(404);
                }
            })
            .catch((error) => {
                console.error(error);
                res.sendStatus(500);
            });
    } else {
        console.log(`Error while signing in user with values: user_name = ${user_name} and password = ${password}`);
        res.sendStatus(400);
    }
});

module.exports = router;