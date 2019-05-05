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
      const url = `${baseUrl}?action=parse&format=json&page=${word}`

      console.log(url)

      try {
        request(url, (error, response, body) => {
          const data = JSON.parse(body)

          if (error || response.statusCode !== 200 || (typeof data.error !== 'undefined' && data.error !== null)) {
            reject({
              data: null,
              error: (typeof data.error.info !== 'undefined' && data.error.info !== '' && data.error.info !== null) ? data.error.info : 'Error with Wiktionary',
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

          console.log('::: Wiktionary Service :::')
          console.log(data.parse.title)

          resolve({
            data: { 
              id: data.parse.title,
              definition: 'foo definition'
            },
            error: null,
            status: response.statusCode,
            response: response
          })
          return
        })
      }
      catch(e) {
        reject({
          data: null,
          error: `Error with Wiktionary - ${e}`,
          status: 500,
          response: null
        })
        return
      }
    })
  }
}