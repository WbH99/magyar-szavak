/**
 * Magyar Szavak - API
 * app.js
 * 
 * @author mlbors
 * @version 1.0.0.0
 * @since 2019.03.27
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const createError = require('http-errors')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const searchRouter = require('./routes/search')

const schema = require('./schema/schema')

/************************************************************/
/************************************************************/

/******************/
/***** SET UP *****/
/******************/

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

/************************************************************/
/************************************************************/

/******************/
/***** ROUTES *****/
/******************/

app.use('/', indexRouter)
app.use('/search', searchRouter)

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

/************************************************************/
/************************************************************/

/******************/
/***** ERRORS *****/
/******************/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

/************************************************************/
/************************************************************/

/*******************/
/***** EXPORTS *****/
/*******************/

module.exports = app
