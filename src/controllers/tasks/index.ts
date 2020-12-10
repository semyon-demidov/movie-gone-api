import { Router } from 'express'

import {
  getTasksListController,
  getTaskController,
  getBoardTasksListController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
} from './tasks'

const router = Router()

router.get('/', getTasksListController)

router.get('/:listId', getBoardTasksListController)

router.get('/:id/:listId', getTaskController)

router.post('/:id', createTaskController)

router.put('/:id', updateTaskController)

router.delete('/:id', deleteTaskController)

export default router
