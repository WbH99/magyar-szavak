/**
 * Magyar Szavak - API
 * schema.js
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
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = require('graphql')

const WordType = require('./word-type')

/************************************************************/
/************************************************************/

/******************/
/***** SCHEMA *****/
/******************/

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    description: 'Main query for words',
    fields: () => ({
      word: {
        type: WordType,
        args: {
          id: { type: GraphQLString }
        }
      }
    })
  })
})

/************************************************************/
/************************************************************/

/*******************/
/***** EXPORTS *****/
/*******************/

module.exports = schema