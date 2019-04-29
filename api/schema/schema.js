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
const WiktionaryService = require('../services/wiktionary.service')

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
        },
        resolve: (root, args) => {
          return new Promise((resolve, reject) => {
            WiktionaryService.getData(args.id)
            .then(res => {
              console.log('::: schema :::')
              console.log(res.data)
              resolve(res.data)
              return
            })
            .catch(e => {
              console.error(e.error)
              reject(e)
              return
            })
          })
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