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

router.get('/:word', (req, res, next) => {

  const query = `{ 
                    word(id: "${req.params.word}") { 
                      ${fragments.WordFragment}
                    } 
                  }`

  console.log('::: entering route :::')

  const graphqlQuery = () => {
    return new Promise((resolve, reject) => {
      console.log('::: calling graphqlQuery :::')
      graphql.graphql(schema, query).then(response => {
        console.log('::: data:::')
        console.log(response)
        resolve(response)
        return
      })
      .catch(e => {
        reject ({ 
          data: null, 
          error: `Error with main query - ${e}`, 
          status: 500, 
          response: null 
        })
        return
      })
    })
  }

  graphqlQuery().then((result) => {
    console.log("::: returning :::")
    res.json(result)
    return
  })
  .catch(e => {
    res.json({ 
      data: null, 
      error: `Error with main query - ${e}`, 
      status: 500, 
      response: null 
    })
    return
  })
})            

/************************************************************/
/************************************************************/

/*******************/
/***** EXPORTS *****/
/*******************/

module.exports = router
