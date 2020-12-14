import { Router } from 'express'

import {
  getListsController,
  getListItemController,
  getBoardListsController,
  createListController,
  updateListController,
  deleteListController,
} from './lists'

const router = Router()

router.get('/', getListsController)

router.get('/:boardId', getBoardListsController)

router.get('/:id/:boardId', getListItemController)

router.post('/', createListController)

router.put('/:id', updateListController)

router.delete('/:id', deleteListController)

export default router
