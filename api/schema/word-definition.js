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
const WordConjugation = require('./word-conjugation')

/************************************************************/
/************************************************************/

/****************/
/***** TYPE *****/
/****************/

const WordDefinition = new GraphQLObjectType({
  name: 'WordDefinition',
  description: 'Word definition',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (parents, args) => parents.id
    },
    kind: {
      type: GraphQLString,
      resolve: (parents, args) => parents.kind
    },
    gender: {
      type: GraphQLString,
      resolve: (parents, args) => parents.type
    },
    plural: {
      type: GraphQLString,
      resolve: (parents, args) => parents.plural
    },
    opposite: {
      type: GraphQLString,
      resolve: (parents, args) => parents.opposite
    },
    synonym: {
      type: new GraphQLList(GraphQLString),
      resolve: (parents, args) => parents.synonym
    },
    antonym: {
      type: new GraphQLList(GraphQLString),
      resolve: (parents, args) => parents.antonym
    },
    declension: {
      type: new GraphQLList(WordDeclension)
    },
    conjugation: {
      type: new GraphQLList(WordConjugation)
    }
  })
})

/************************************************************/
/************************************************************/

/*******************/
/***** EXPORTS *****/
/*******************/

module.exports = WordDefinition