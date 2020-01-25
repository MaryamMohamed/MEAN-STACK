const express = require('express');
const router = express.Router();
const User = require('../models/user');

// get list from db
router.get('/list', function(req, res, next){
    User.find({}).then(function(user){
        res.send(user);
    })
});

// add new user
router.post('/edit', function(req, res, next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});

// update user in db
router.put('/edit/:id', function(req, res, next){
    User.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        User.findOne({_id: req.params.id}).then(function(user){
            res.send(user);
        });
    }).catch(next);
});

// delete from db
router.delete('/delete/:id', function(req, res, next){
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user);
    }).catch(next);
});

// search from db
router.get('/search/:id', function(req, res, next){
    User.findOne({_id: req.params.id}).then(function(user){
        res.send(user);
    }).catch(next);
});

module.exports = router;
