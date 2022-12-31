const express = require('express');
const router = express.Router();
const Present = require('../models/Present');

// GET all presents
// ROUTE /presents
router.get('/', async function (req, res, next) {
    try {
        const presents = await Present.find({});
        res.render('presentsView', { presents });
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

module.exports = router;