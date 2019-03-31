/**
 * Magyar Szavak - API
 * word-tpye.js
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

const WordType = new GraphQLObjectType({
  name: 'WordType',
  description: 'Word type',
  fields: () => ({
  })
})

/************************************************************/
/************************************************************/

/*******************/
/***** EXPORTS *****/
/*******************/

module.exports = WordType