
import { Router } from 'express'

import {
  getListItemController,
  createListController,
  updateListController,
  deleteListController,
} from '@/controllers/lists'

const router = Router()

router.get('/:id', getListItemController)

router.post('/:boardId', createListController)

router.put('/:id', updateListController)

router.delete('/:id', deleteListController)

export default router
