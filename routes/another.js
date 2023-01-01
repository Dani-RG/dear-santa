const express = require('express');
const router = express.Router();
const Present = require('../models/Present');

// GET another present form view
// ROUTE /another
router.get('/', function (req, res, next) {
    res.render('another');
});

router.post('/', async function (req, res, next) {
    const { name,image,price,recipient,description } = req.body;
    try {
        const createdPresent = await Present.create({ name, image, price, recipient, description });
        //res.redirect(`/presents/${createdPresent._id}`);
        res.redirect('/presents');
    }
    catch (error) {
        next(error)
    }
});

module.exports = router;