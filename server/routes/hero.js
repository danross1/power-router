var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.get('/all', function (req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            let queryText = `SELECT hero.name AS hero, power.name AS power FROM hero
                JOIN hero_power ON hero.id=hero_id
                JOIN power ON power.id = power_id;`
            console.log('queryText:', queryText);
            client.query(queryText, function (errorMakingDatabaseQuery, result) {
                done();
                if (errorMakingDatabaseQuery) {
                    console.log('error', errorMakingDatabaseQuery);
                    res.sendStatus(500);
                } else {
                    console.log('sending back:', result.rows);
                    res.send(result.rows);
                }
            });
        }
    });
});

module.exports = router;