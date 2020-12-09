import { Router } from 'express'

import {
  getTasksList,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from './tasks'

const router = Router()

router.get('/', getTasksList)

router.post('/:id', getTask)

router.post('/:id', createTask)

router.put('/:id', updateTask)

router.delete('/:id', deleteTask)

export default router
