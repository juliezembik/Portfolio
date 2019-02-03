const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// Add project to list
router.post('/', (req, res) => {
    console.log('req.body', req.body);
    
    const addProject = req.body;
    const queryText = `INSERT INTO projects ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
                       VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    const queryValues = [
        addProject.name,
        addProject.description,
        addProject.thumbnail,
        addProject.website,
        addProject.github,
        addProject.date_completed,
        addProject.tag_id
    ];
    pool.query(queryText, queryValues)
    .then((response) => { 
        res.send(response.data); 
        console.log('response', response.data);
        
    }).catch((error) => {
        console.log('Error completing POST /projects', error);
        res.sendStatus(500);
        
    });
});

// Return back array of projects
router.get('/', (req, res) => {
    const queryText = `SELECT "projects"."id", "projects"."name", "projects"."description", "projects"."thumbnail", "projects"."website", "projects"."github", "projects"."date_completed", "projects"."tag_id"
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