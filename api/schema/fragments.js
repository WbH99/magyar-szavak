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

/************************************/
/***** WORD CONJUGATION VARIANT *****/
/************************************/

const WordConjugationVariantFragment = `value { 
                                          id,
                                          kind,
                                          value
                                        }`

/************************************************************/
/************************************************************/

/****************************/
/***** WORD CONJUGATION *****/
/****************************/

const WordConjugationFragment = `conjugation { 
                                    id,
                                    tense,
                                    ${WordConjugationVariantFragment}
                                  }`

/************************************************************/
/************************************************************/

/***************************/
/***** WORD DECLENSION *****/
/***************************/

const WordDeclensionFragment = `declension { 
                                  id,
                                  kind,
                                  value,
                                }`

/************************************************************/
/************************************************************/

/****************/
/***** WORD *****/
/****************/

const WordFragment = `definitions { 
                        id,
                        kind,
                        gender,
                        plural,
                        opposite,
                        synonym,
                        antonym,
                        ${WordDeclensionFragment},
                        ${WordConjugationFragment}
                      }`

/************************************************************/
/************************************************************/

/*******************/
/***** EXPORTS *****/
/*******************/

module.exports = {
  WordFragment: WordFragment,
  WordDeclensionFragment: WordDeclensionFragment,
  WordConjugationFragment: WordConjugationFragment,
  WordConjugationVariantFragment: WordConjugationVariantFragment
}
