/**
 * Magyar Szavak - API
 * word.factory.js
 * 
 * @author mlbors
 * @version 1.0.0.0
 * @since 2019.03.27
 */

/*******************/
/***** IMPORTS *****/
/*******************/

/************************************************************/
/************************************************************/

/***********************/
/***** WORD OBJECT *****/
/***********************/

const WordObject = {
  id: null,
  definition: {
    id: null,
    kind: null,
    gender: null,
    plural: null,
    opposite: null,
    synonym: null,
    antonym: null,
    declension: [{
      id: null,
      kind: null,
      value: null
    }],
    conjugation: [{
      id: null,
      tense: null,
      value: [{
        id: null,
        kind: null,
        value: null
      }]
    }]
  }
}

/************************************************************/
/************************************************************/

/*************************/
/***** CREATE OBJECT *****/
/*************************/

const createObject = (prototype, object) => {
  let newObject = Object.create(prototype)
  for (let prop in object) {
    if (object.hasOwnProperty(prop)) {
        newObject[prop] = object[prop]
    }
  }
  return newObject;
}

/************************************************************/
/************************************************************/

/************************/
/***** WORD FACTORY *****/
/************************/

const wordFactory = {
  createWord: () => createObject(WordObject, { id: null })
}

/************************************************************/
/************************************************************/

/*******************/
/***** EXPORTS *****/
/*******************/

module.exports = wordFactory