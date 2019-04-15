/**
 * Magyar Szavak - API
 * word-conjugation.js
 * 
 * @author mlbors
 * @version 1.0.0.0
 * @since 2019.03.27
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const fetch = require('node-fetch')
const util = require('util')
const fs = require('fs')

require('dotenv').config()

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = require('graphql')

const WordConjugationVariant = require('./word-conjugation-variant')

/************************************************************/
/************************************************************/

/****************/
/***** TYPE *****/
/****************/

const WordConjugation = new GraphQLObjectType({
  name: 'WordConjugation',
  description: 'Word conjugation',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    tense: {
      type: GraphQLString
    },
    value: {
      type: new GraphQLList(WordConjugationVariant)
    }
  })
})

/************************************************************/
/************************************************************/

/*******************/
/***** EXPORTS *****/
/*******************/

module.exports = WordConjugation