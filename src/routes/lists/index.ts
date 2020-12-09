import { Router } from 'express'

import {
  getLists,
  getListItem,
  getBoardLists,
  createList,
  updateList,
  deleteList,
} from './lists'

const router = Router()

router.get('/', getLists)

router.get('/:boardId', getBoardLists)

router.get('/:id/:boardId', getListItem)

router.post('/:id', createList)

router.put('/:id', updateList)

router.delete('/:id', deleteList)

export default router
