const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// Add project to list
router.post('/', (req, res) => {
    const addProject = req.body;

});

// Return back array of projects
router.get('/', (req, res) => {
    res.send(response);
});


module.exports = router;