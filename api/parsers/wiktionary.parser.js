/**
 * Magyar Szavak - API
 * wiktionary.parser.js
 * 
 * @author mlbors
 * @version 1.0.0.0
 * @since 2019.03.27
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const request = require('request')

require('dotenv').config()

const wordFactory = require('../factories/word.factory')

/************************************************************/
/************************************************************/

/*********************/
/***** ATTIBUTES *****/
/*********************/

/************************************************************/
/************************************************************/

const wiktionaryParser = module.exports = {

  /******************************/
  /***** PARSE HTML CONTENT *****/
  /******************************/

  /**
   * @param string content content to parse
   * @return Promise
   */

  parseHTMLContent: (content) => {
    return new Promise((resolve, reject) => {
      
      try {

        if (typeof content === 'undefined' || content === null || content === '') {
          resolve(null)
          return
        }

        if (!content.includes('#Hungarian') || !content.includes('id="Hungarian"')) {
          resolve(null)
          return
        }

        console.log(content)

        const word = wordFactory.createWord()

        resolve(word)
        return
      }
      catch(e) {
        reject({
          data: null,
          error: `Error in Wiktionary Paser - parseHTMLContent - ${e}`,
          status: 500,
          response: null
        })
        return
      }
    })
  }
}