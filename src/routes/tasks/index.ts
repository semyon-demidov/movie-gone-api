import { Router } from 'express'

import {
  getTasksList,
  getTask,
  getBoardTasksList,
  createTask,
  updateTask,
  deleteTask,
} from './tasks'

const router = Router()

router.get('/', getTasksList)

router.get('/:listId', getBoardTasksList)

router.get('/:id/:listId', getTask)

router.post('/:id', createTask)

router.put('/:id', updateTask)

router.delete('/:id', deleteTask)

export default router
