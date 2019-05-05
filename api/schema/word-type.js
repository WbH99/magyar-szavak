/**
 * Magyar Szavak - API
 * word-type.js
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

const WordDefinition = require('./word-definition')

/************************************************************/
/************************************************************/

/****************/
/***** TYPE *****/
/****************/

const WordType = new GraphQLObjectType({
  name: 'WordType',
  description: 'Word type',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    definitions: {
      type: new GraphQLList(WordDefinition),
      resolve: (parents, args) => parents.definitions
    }
  })
})

/************************************************************/
/************************************************************/

/*******************/
/***** EXPORTS *****/
/*******************/

module.exports = WordType