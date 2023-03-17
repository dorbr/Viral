import express from 'express'
import controllers from '../controllers'

const router = express.Router()

router.get('/read', controllers.database.read)

export default router