/**
 * Magyar Szavak - API
 * wiktionary.parser.spec.js
 * 
 * @author mlbors
 * @version 1.0.0.0
 * @since 2019.03.27
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const fs = require('fs')

require('dotenv').config()

const wiktionaryParser = require('../../../parsers/wiktionary.parser')

/************************************************************/
/************************************************************/

/*********************/
/***** ATTIBUTES *****/
/*********************/

/**
 * @var json rawData json raw data coming from wiktionary
 * @var object mockData parsed json data coming from wiktionary
 */

const rawData = fs.readFileSync(`${__dirname}/../../data/wiktionary/fa.json`)
const mockData = JSON.parse(rawData) 

/************************************************************/
/************************************************************/

/**********************/
/***** TEST SUITE *****/
/**********************/

describe('Test Wiktionary Parser', () => {

  /***********************/
  /***** BEFORE EACH *****/
  /***********************/

  beforeEach(() => {

  })

  /************************************************************/
  /************************************************************/

  /**********************/
  /***** AFTER EACH *****/
  /**********************/

  afterEach(() => {

  })

  /************************************************************/
  /************************************************************/
    
  /***********************/
  /***** TEST OBJECT *****/
  /***********************/

  it('Wiktionary Parser should not be null', () => {
    expect(wiktionaryParser).not.toBe(null)
  })
  
})
      
  
  