/**
 * Magyar Szavak - API
 * word-declension.js
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

/************************************************************/
/************************************************************/

/****************/
/***** TYPE *****/
/****************/

const WordDeclension = new GraphQLObjectType({
  name: 'WordDeclension',
  description: 'Word declension',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    kind: {
      type: GraphQLString
    },
    value: {
      type: GraphQLString
    },
  })
})

/************************************************************/
/************************************************************/

/*******************/
/***** EXPORTS *****/
/*******************/

module.exports = WordDeclension