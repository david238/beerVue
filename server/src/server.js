const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var validateRequest = require('./Middlewares/validateRequest');
var cacheMemory = require('./Middlewares/cacheMemory');

const app = express();
app.use(bodyParser.json());
app.use(require('sanitize').middleware);

app.use(cors());

const PunkApiService = require('./Services/PunkApiService');
const NoSqlService = require('./Services/NoSqlService');

const punkApiService = new PunkApiService();
const noSqlService = new NoSqlService();

// Task 1: Add a REST endpoint to retrieve a list of beers.
app.get('/beers', validateRequest, cacheMemory, (req, res) => {
    // sanitize query string parameter
    const beerName = req.queryString('name');
    try {
        if (beerName && beerName != '') {
            punkApiService.getBeerName(beerName).then((response) => {
                // fire and forget
                res.status(200).send({
                    result: response
                });
            }).catch((error) => {
                res.status(401).json({
                    path: '/beers',
                    error: error
                });
            });
        } else {
            res.status(401).json({
                path: '/beers',
                error: 'sorry you have to pass a beer name'
            });
        }
    } catch(error) {
        res.status(401).json({
            path: '/beers',
            error: error
        });
    }
});

// Task 2: Add a REST endpoint to allow a user to add a rating to a beer.
app.post('/beers/rating/:id', validateRequest, (req, res) => {
    var params = {
        initParams: {
            beerId: req.paramInt('id'),
            rating: req.bodyString('rating'),
            comments: req.bodyString('comments')
        }
    };

    //validate if beer id exists
    try {
        punkApiService.checkBeerId(params.initParams.beerId).then((beerDetails) => {
            if (params.initParams.rating >= 1 && params.initParams.rating <= 5) {
                // add ratings and comments to this beer
                beerDetails.ratings = params.initParams.rating;
                beerDetails.comments = params.initParams.comments;
                // save to embedded database nosql
                noSqlService.insertService(beerDetails).then((response) => {
                    // uncomment to check if well stored in embedded database nosql
                    // noSqlService.findService().then((response) => console.log('ALL:', response)).catch();
                    res.status(200).send({
                        result: response
                    });
                }).catch((error) => {
                    res.status(401).json({
                        path: '/beers/rating/:id',
                        error: error
                    });
                });
            } else {
                // return error with ratings
                res.status(401).json({
                    path: '/beers/rating/:id',
                    error: 'rating not within range'
                });
            }
        }).catch((error) => {
            //return error
            res.status(401).json({
                path: '/beers/rating/:id',
                error: error
            });
        });
    } catch (error) {
        //return error
        res.status(401).json({
            path: '/beers/rating/:id',
            error: error
        });
    }
});


var server = app.listen(process.env.PORT || 8081);

module.exports = server;