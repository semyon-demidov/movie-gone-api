import { Router } from 'express'

import {
  getTasksListController,
  getTaskController,
  getBoardTasksListController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
} from '@/controllers/tasks'

const router = Router()

router.get('/', getTasksListController)

router.get('/:listId', getBoardTasksListController)

router.get('/:id/:listId', getTaskController)

router.post('/', createTaskController)

router.put('/:id', updateTaskController)

router.delete('/:id', deleteTaskController)

export default router
