// import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'

import routers from './routers'
import utils from './utils'

const app = express()

app.use(cors())

app.use(express.json())
// app.use(cookieParser())

app.use(utils.middlewares.credentials)
app.use(utils.middlewares.requestLogger)


app.get('/', (req, res) => {
  res.send(`Welcome to Viral's API!`)
})

// app.use(utils.middlewares.verifyJWT)

app.use('/database-managment', routers.database)

app.use(utils.middlewares.errorHandler)
app.use(utils.middlewares.unknownEndpoint)

export default app