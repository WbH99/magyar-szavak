/**
 * Magyar Szavak - API
 * word-conjugation-variant.js
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

const WordConjugationVariant = new GraphQLObjectType({
  name: 'WordConjugationVariant',
  description: 'Word conjugation variant',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (parents, args) => parents.id
    },
    kind: {
      type: GraphQLString,
      resolve: (parents, args) => parents.kind
    },
    value: {
      type: GraphQLString,
      resolve: (parents, args) => parents.value
    }
  })
})

/************************************************************/
/************************************************************/

/*******************/
/***** EXPORTS *****/
/*******************/

module.exports = WordConjugationVariant