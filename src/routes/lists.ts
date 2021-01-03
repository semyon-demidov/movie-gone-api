
import { Router } from 'express'

import {
  getListsController,
  getListItemController,
  createListController,
  updateListController,
  deleteListController,
} from '@/controllers/lists'

const router = Router()

router.get('/:boardId', getListsController)

router.get('/:id/:boardId', getListItemController)

router.post('/:boardId', createListController)

router.put('/:id', updateListController)

router.delete('/:id', deleteListController)

export default router
