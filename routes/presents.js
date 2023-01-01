const express = require('express');
const router = express.Router();
const Present = require('../models/Present');

// GET all presents
// ROUTE /presents
router.get('/', async function (req, res, next) {
    try {
        const presents = await Present.find({});
        res.render('presentView', { presents });
    }
    catch (error) {
        next(error)
    }
});

// GET one present details
// ROUTE /presents/:id
router.get('/:presentId', async function (req, res, next) {
    const { presentId } = req.params;
    try {
        const present = await Present.findById(presentId);
        res.render('detail', present);
    }
    catch (error) {
        next(error)
    }
});

// GET delete present
// ROUTE /presents/:id
router.get('/delete/:id', async function (req, res, next) {
    const { id } = req.params;
    try {
        await Present.findByIdAndDelete(id);
        res.redirect('/presents');
    }
    catch (error) {
        next(error)
    }
});

/*
// GET new present form view
// ROUTE /presents/new
router.get('/new', function (req, res, next) {
    res.render('newPresent');
  });

// POST new present created view
// ROUTE /presents/new

router.post('/new', async function (req, res, next) {
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
*/

module.exports = router;