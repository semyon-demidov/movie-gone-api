import express from 'express'

import boards from './boards'
import lists from './lists'
import tasks from './tasks'

const router = express.Router()

router.use('/boards', boards)
router.use('/lists', lists)
router.use('/tasks', tasks)

export default router
