/**
 * Magyar Szavak - API
 * wiktionary.service.spec.js
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

const wiktionaryService = require('../../../services/wiktionary.service')

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

describe('Test Wiktionary Service', function() {

  /***********************/
  /***** BEFORE EACH *****/
  /***********************/

  beforeEach(function() {

  })

  /************************************************************/
  /************************************************************/

  /**********************/
  /***** AFTER EACH *****/
  /**********************/

  afterEach(function() {

  })

  /************************************************************/
  /************************************************************/
    
  /***********************/
  /***** TEST OBJECT *****/
  /***********************/

  it('Wiktionary Serice should not be null', function() {
    expect(wiktionaryService).not.toBe(null)
  })
})
      
  
  