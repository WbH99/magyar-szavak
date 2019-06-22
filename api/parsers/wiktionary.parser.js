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
        let foundElements = []

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
        
        _getSection(mainContent.childNodes).then(result => {
          foundElements = result
          console.log(foundElements)
          const word = wordFactory.createWord()
          resolve(word)
          return
        })
        .catch(e => {
          console.error(e.message)
          reject({
            data: null,
            error: `Error in Wiktionary Paser - parseHTMLContent - ${e.message}`,
            status: 500,
            response: null
          })
          return
        })
      }
      catch(e) {
        console.error(e.message)
        reject({
          data: null,
          error: `Error in Wiktionary Paser - parseHTMLContent - ${e.message}`,
          status: 500,
          response: null
        })
        return
      }
    })
  }
}

/************************************************************/
/************************************************************/

/***********************/
/***** GET SECTION *****/
/***********************/

/**
 * @param HTMLNode nodes nodes to parse
 * @return Promise
 */

const _getSection = (nodes) => {
  return new Promise((resolve, reject) => {
    try {
      const promises = []

      nodes.forEach((node, n) => {
        const promise = _checkNode(node)
        promises.push(promise)
      })

      Promise.all(promises).then(results => {
        _parseReturnedElements(results).then(elements => {
          resolve(elements)
          return
        })
        .catch(e => {
          console.error(e.message)
          reject([])
          return
        }) 
      }) 

    }
    catch(e) {
      console.error(e.message)
      reject([])
      return
    }
  })
}

/************************************************************/
/************************************************************/

/**********************/
/***** CHECK NODE *****/
/**********************/

/**
 * @param HTMLNode node node to check
 * @return Promise
 */

const _checkNode = (node) => {
  return new Promise((resolve, reject) => {
    if (node.tagName !== 'h2') {
      resolve({ value: false, node: node })
    }
    _checkIfItIsRightSection(node).then(result => {
      if (!result) {
        resolve({ value: false, node: node })
      }
      resolve({ value: true, node: node })
    })
    .catch(e => {
      reject({ value: false, node: null })
    })
  })
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
      const promises = []
      
      node.childNodes.forEach((childNode, c) => {
        const promise = _checkIfItIsRightNode(childNode)
        promises.push(promise)
      })
 
      Promise.all(promises).then(results => {
        resolve(results.includes(true))
        return
      }) 
    }
    catch(e) {
      console.error(e.message)
      reject(false)
      return
    }
  })
}

/************************************************************/
/************************************************************/

/*************************************/
/***** CHECK IF IT IS RIGHT NODE *****/
/*************************************/

/**
 * @param HTMLNode node node to check
 * @return Promise
 */

const _checkIfItIsRightNode = (node) => {
  return new Promise ((resolve, reject) => {
    try {
      if (typeof node.id !== 'undefined' 
          && node.id === 'Hungarian' 
          && node.tagName === 'span'
          && node.parentNode.tagName === 'h2') {
        resolve(true)
        return
      }
      resolve(false)
      return
    }
    catch(e) {
      console.error(e)
      reject(false)
      return
    }
  })
}

/************************************************************/
/************************************************************/

/***********************************/
/***** PARSE RETURNED ELEMENTS *****/
/***********************************/

/**
 * @param Array elements returned elements
 * @return Promise
 */

const _parseReturnedElements = (elements) => {
  return new Promise ((resolve, reject) => {
    const results = []
    let sectionOpen = false
    
    try {
      elements.forEach((element, e) => {
        if (element.node == null) {
          return
        }

        if (element.value) {
          sectionOpen = true
          results.push(element.node)
        }

        if (!element.value 
          && sectionOpen 
          && element.node.tagName !== 'h2') {
            results.push(element.node)
            return
        }

        if (!element.value 
          && sectionOpen 
          && element.node.tagName === 'h2') {
            sectionOpen = false
            return
        }
      })

      resolve(results)  
    }
    catch(e) {
      console.error(e.message)
      reject([])
      return
    }
  })
}