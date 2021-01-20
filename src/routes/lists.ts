
import { Router } from 'express'

import {
  getListItemController,
  createListController,
  updateListController,
  deleteListController,
} from '@/controllers/lists'
import { getTasksWithListItem } from '@/controllers/tasks'

const router = Router()

router.get('/:id', getListItemController)

router.get('/:id/tasks', getTasksWithListItem)

router.post('/:boardId', createListController)

router.put('/:id', updateListController)

router.delete('/:id', deleteListController)

export default router
