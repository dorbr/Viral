import app from './app'

import { config, logger } from './utils'

import database from './controllers/database'

const initializeServer = async () => {
  try {

    await database.initalizeConnection()

    app.listen({ port: config.PORT }, () =>
      logger.info.all(`🚀 Server ready at http://localhost:${config.PORT}`)
    )

  }

  catch(error) {
    logger.error.all(error)
  }

}

initializeServer()

