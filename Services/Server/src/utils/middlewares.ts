import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

import config from './config'
import exceptions from './exceptions'
import logger from './logger'

const requestLogger = (request, response, next) => {
  logger.info.limited('Method:', request.method)
  logger.info.limited('Path:  ', request.path)
  logger.info.limited('Body:  ', request.body)
  logger.info.limited('---')
  next()
}

const unknownEndpoint = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  logger.error.limited(error.message)

  response.header('Content-Type', 'application/json')

  const status = error.statusCode || 400
  response.status(status).send(error.message)
}

const verifyJWT = (req, res, next) => {
  try {
    const authHeader =
      (req.headers.authorization as string) ||
      (req.headers.Authorization as string)

    if (!authHeader.startsWith('Bearer ')) {
      next(new exceptions.UnauthorizedError())
    }

    const token = authHeader?.split(' ')[1]

    const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET)

    req.session = (decoded as JwtPayload).data

    next()
  } catch (err) {
    next(new exceptions.ForbiddenError())
  }
}

const credentials = (req, res, next) => {
  const origin = req.headers.origin
  if (config.ALLOWED_ORIGINS.includes(origin)) {
    res.header('Access-Control-Allow-Credentials', true)
  }
  next()
}

export default {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  verifyJWT,
  credentials,
}