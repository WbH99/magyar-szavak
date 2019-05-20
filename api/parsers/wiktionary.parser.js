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

  getData: (content) => {
    return new Promise((resolve, reject) => {
      
      try {
        resolve()
        return
      }
      catch(e) {
        reject({
          data: null,
          error: `Error in Wiktionary Paser - getData - ${e}`,
          status: 500,
          response: null
        })
        return
      }
    })
  }
}