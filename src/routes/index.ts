import express from 'express'

import boards from './boards'
import tasks from './tasks'

const router = express.Router()

router.use('/boards', boards)
router.use('/tasks', tasks)

export default router
