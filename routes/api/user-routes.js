const router = require('express').Router();

const { User } = require('../../models');

const isStringNotEmpty = (s) => {
    return(s && s.trim() !== '');
}

/*
    Creates a new user (sign up user story)

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
        User.create( { user_name: user_name, 
                       password: Buffer.from(password).toString('base64')})
            .then((user) => {
                res.location('/api/users/' + user.id);
                res.sendStatus(201);
            })
            .catch((error) => {
                console.error(error);
                res.sendStatus(500);
            });
    } else {
        console.log(`Error while signing up user with values: user_name = ${user_name} and password = ${password}`);
        res.sendStatus(400);
    }
});

module.exports = router;