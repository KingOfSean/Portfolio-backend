const express = require('express');
const router = express.Router();
const Admin = require('../Models/Admin');
// const Project = require('../Models/Project');
const { jsonAuth, auth } = require('./authController');


router.get('/:username', auth, (req, res) => {
    const adminQuery = Admin.findOne({ username: req.params.username }).select('-password')

    adminQuery.exec((err, foundAdmin) => {
        if (err){
            console.log(err);
            res.status(400).json({ msg: err.message });
        } else {
           res.status(200).json(foundAdmin) 
        }
    })
})


module.exports = router