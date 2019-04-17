/**
 * Magyar Szavak - API
 * fragments.js
 * 
 * @author mlbors
 * @version 1.0.0.0
 * @since 2019.03.27
 */

/****************/
/***** WORD *****/
/****************/

const WordFragment = `fragement CompleteWord on Word {
                        definitions { 
                          id 
                        } 
                      }`

/************************************************************/
/************************************************************/

/*******************/
/***** EXPORTS *****/
/*******************/

module.exports = {
  WordFragment: WordFragment
}
