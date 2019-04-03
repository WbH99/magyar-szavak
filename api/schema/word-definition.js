/**
 * Magyar Szavak - API
 * word-definition.js
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

const WordDeclension = require('./word-declension')

/************************************************************/
/************************************************************/

/****************/
/***** TYPE *****/
/****************/

const WordDefinition = new GraphQLObjectType({
  name: 'WordDefinition',
  description: 'Word definition',
  fields: () => ({
    id: GraphQLString,
    kind: GraphQLString,
    gender: GraphQLString,
    plural: GraphQLString,
    opposite: GraphQLString,
    synonym: {
      type: new GraphQLList(GraphQLString)
    },
    antonym: {
      type: new GraphQLList(GraphQLString)
    },
    declension: {
      type: new GraphQLList(WordDeclension)
    },
    conjugation: GraphQLString
  })
})

/************************************************************/
/************************************************************/

/*******************/
/***** EXPORTS *****/
/*******************/

module.exports = WordDefinition