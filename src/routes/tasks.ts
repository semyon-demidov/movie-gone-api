import { Router } from 'express'

import {
  getTasksListController,
  getTaskController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
} from '@/controllers/tasks'

const router = Router()

router.get('/', getTasksListController)

router.get('/:id', getTaskController)

router.post('/:listId', createTaskController)

router.put('/:id', updateTaskController)

router.delete('/:id', deleteTaskController)

export default router
