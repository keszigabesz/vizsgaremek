const express = require('express');
const User = require('../../model/user');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/', async (req, res, next) => {
   /*  const newUser = new User({
        userName: 'user',
        fullName: 'User User',
        password: 'user',
    });

    try {
        await newUser.save();
    } catch (e) {
        res.statusCode = 401;
        return res.json({
            error: 'Database error'
        });
    }

    return res.json({
        message: 'user created'
    }); */

    const {
        userName,
        password
    } = req.body;
    const user = await User.findOne({
        userName
    });
    if (!user) {
        return res.sendStatus(401);
    }
    user.comparePassword(password, function (err, isMatch) {
        if (err) {
            return res.sendStatus(403);
        }

        const accessToken = jwt.sign({
            _id: user._id,
            userName: user.userName,
            role: 1,
        }, 'egynagyo9ntitkosszöveg', {
            expiresIn: '1h',
        });



        res.json({
            success: true, 
            accessToken, 
            user: {...user._doc, password: ''},
        })
    });
});

module.exports = router;

/*
fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"userName": "user", "password": "user"}',
}).then(r => r.json())
    .then( d => console.log(d) );
*/