/**
 * Magyar Szavak - API
 * wiktionary.service.js
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

/**
 * @var string baseUrl API url
 */

const baseUrl = "https://en.wiktionary.org/w/api.php"

/************************************************************/
/************************************************************/

const wiktionaryService = module.exports = {

  /********************/
  /***** GET WORD *****/
  /********************/

  /**
   * @param string word word to query
   * @return Promise
   */

  getData: (word) => {
    return new Promise((resolve, reject) => {
      const url = `${baseUrl}?action=parse&format=json&prop=text|revid|displaytitle&callback=?&page=${word}`

      try {
        request(url, (error, response, body) => {
          const data = JSON.parse(body)
        
          if (error || response.statusCode != 200) {
            reject({
              error: (typeof data.error.errors.message !== 'undefined' && data.error.errors.message !== '' && data.error.errors.message !== null) ? data.error.errors.message : 'Error with Wiktionary',
              status: response.statusCode,
              response: response
            })
            return
          }

          if (typeof data === 'undefined' || data === null) {
            resolve({
              data: null,
              error: 'No data from Wiktionary',
              status: response.statusCode,
              response: response
            })
            return
          }

          resolve({
            data: data.items,
            error: null,
            status: response.statusCode,
            response: response
          })
          return
        })
      }
      catch(error) {
        console.error(error);
        reject({
          error: 'Error with Wiktionary',
          status: 500,
          response: null
        })
        return
      }
    })
  }
}