import express, { Application, Request, Response } from 'express'
import createError from 'http-errors'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import 'module-alias/register'

import indexRouter from './controllers'

interface Error {
  status?: number
  message?: string
}

const app: Application = express()
const port = 3001

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))

// view engine setup
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'pug')

app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use((_req: Request, _res: Response, next): void => {
  next(createError(404))
})

// error handler
app.use((err: Error, req: Request, res: Response): void => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.listen(port, (): void => {
  // tslint:disable-next-line:no-console
  console.log(`Server is starting at http://localhost:${port}`)
})
