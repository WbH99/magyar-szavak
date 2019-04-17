/**
 * Magyar Szavak - API
 * search.js
 * 
 * @author mlbors
 * @version 1.0.0.0
 * @since 2019.03.27
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const express = require('express')
const router = express.Router()

const graphql = require('graphql');

const schema = require('../schema/schema.js')
const fragments = require('../schema/fragments.js')

/************************************************************/
/************************************************************/

/*****************/
/***** INDEX *****/
/*****************/

router.get('/', function(req, res, next) {
  res.send('search')
})

/************************************************************/
/************************************************************/

/****************/
/***** WORD *****/
/****************/

router.get('/:word', function(req, res, next) {

  const query = `{ 
                    word(id: "${req.params.word}") { 
                      ...${fragments.WordFragment} 
                    } 
                  }`
  
  graphql.graphql(schema, query).then(result => {
    res.json(result);
  });
})

/************************************************************/
/************************************************************/

/*******************/
/***** EXPORTS *****/
/*******************/

module.exports = router
