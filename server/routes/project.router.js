const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// Add project to list
router.post('/', (req, res) => {
    const addProject = req.body;

});

// Return back array of projects
router.get('/', (req, res) => {
    const queryText = `SELECT "projects"."id", "projects"."name", "projects"."description", "projects"."thumbnail", "projects"."website", "projects"."github", "projects"."date_completed"
                       FROM "projects"
                       JOIN "tags"
                       ON "tags"."id" = "projects"."id";`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log('Error in get selecting', error);
        res.sendStatus(500);
    });
    
});


module.exports = router;