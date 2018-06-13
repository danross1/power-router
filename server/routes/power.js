var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.get('/', function (req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM power ORDER BY id;', function (errorMakingDatabaseQuery, result) {
                done();
                if (errorMakingDatabaseQuery) {
                    console.log('error', errorMakingDatabaseQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });
        }
    });
});

router.post('/', function(req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            let powerName = req.body.name;
            let powerDescription = req.body.description;
            const queryText = `INSERT INTO power (name, description)
                VALUES($1, $2)`;
            client.query(queryText, [powerName, powerDescription], function (errorMakingDatabaseQuery, result) {
                done();
                if (errorMakingDatabaseQuery) {
                    console.log('error', errorMakingDatabaseQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });
        }
    });
});

router.put('/:id', function(req, res) {
    let queryText;
    console.log('req.params:', req.params.id);
    console.log('req.body.name:', req.body.name);
    console.log('req.body.description:', req.body.description);
    
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            let powerID = req.params.id;
            let powerName =req.body.name || null;
            let powerDescription = req.body.description || null;
            let powerInjection = [];
            if(powerName && powerDescription) {
                queryText = `UPDATE power SET name=$1 AND description=$2 WHERE id=$3`;
                powerInjection = [powerName, powerDescription, powerID];
            } else if(!powerName){
                queryText = `UPDATE power SET description=$1 WHERE id=$2`;
                powerInjection = [powerDescription, powerID];
            } else if(!powerDescription) {
                queryText = `UPDATE power SET name=$1 WHERE id=$2`;
                powerInjection = [powerName, powerID];
            }
            // console.log('queryText:', queryText);
            // console.log('powerInjection:', powerInjection);
            
            
            client.query(queryText, powerInjection, function (errorMakingDatabaseQuery, result) {
                done();
                if (errorMakingDatabaseQuery) {
                    console.log('error', errorMakingDatabaseQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(200);
                }
            });
        }
    });
});
       

module.exports = router;