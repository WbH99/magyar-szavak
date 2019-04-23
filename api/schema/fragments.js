/**
 * Magyar Szavak - API
 * fragments.js
 * 
 * @author mlbors
 * @version 1.0.0.0
 * @since 2019.03.27
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const {
  GraphQL,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql')

/************************************************************/
/************************************************************/

/****************/
/***** WORD *****/
/****************/

const WordFragment = `definitions { 
                        id 
                      }`

/************************************************************/
/************************************************************/

/*******************/
/***** EXPORTS *****/
/*******************/

module.exports = {
  WordFragment: WordFragment
}
