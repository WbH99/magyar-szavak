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
const htmlParser = require('node-html-parser')

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

        let nodeFound = false
        let parsingDone = false
        const foundElements = []

        if (typeof content === 'undefined' || content === null || content === '') {
          resolve(null)
          return
        }

        if (!content.includes('#Hungarian') || !content.includes('id="Hungarian"')) {
          resolve(null)
          return
        }

        const htmlContent = htmlParser.parse(content)
        const mainContent = htmlContent.querySelector('.mw-parser-output')
        
        mainContent.childNodes.forEach((node, n) => {

          if (node.tagName === 'h2') {

            _checkIfItIsRightSection(node).then(result => {
              if (!result) {
                return
              }

              foundElements.push(node)
            })
          }
          
        })

        console.log(foundElements)
        
        const word = wordFactory.createWord()

        resolve(word)
        return
      }
      catch(e) {
        reject({
          data: null,
          error: `Error in Wiktionary Paser - parseHTMLContent - ${e.message}`,
          status: 500,
          response: null
        })
        console.error(e.message)
        return
      }
    })
  }
}

/************************************************************/
/************************************************************/

/****************************************/
/***** CHECK IF IT IS RIGHT SECTION *****/
/****************************************/

/**
 * @param HTMLNode node node to check
 * @return Promise
 */

const _checkIfItIsRightSection = (node) => {
  return new Promise((resolve, reject) => {
    try {
      let nodeFound = false
      const promises = []
      
      node.childNodes.forEach((childNode, c) => {
        const promise = new Promise ((resolve) => {
          if (typeof childNode.id !== 'undefined' 
              && childNode.id === 'Hungarian' 
              && childNode.tagName === 'span'
              && childNode.parentNode.tagName === 'h2'
              && !nodeFound) {
            nodeFound = true
          }
          resolve(nodeFound)
        })
        promises.push(promise)
      })
 
      Promise.all(promises).then(results => {
        console.log(nodeFound)
        resolve(nodeFound)
      }) 
    }
    catch(e) {
      console.error(e.message)
      reject(false)
      return
    }
  })
}

