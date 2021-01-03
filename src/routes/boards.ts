import { Router } from 'express'

import {
  getBoardsListController,
  getBoardController,
  createBoardController,
  updateBoardController,
  deleteBoardController,
} from '@/controllers/boards'
import { getListsController } from '@/controllers/lists'

const router = Router()

router.post('/', createBoardController)

router.get('/', getBoardsListController)

router.get('/:id', getBoardController)

router.get('/:id/lists', getListsController)

router.put('/:id', updateBoardController)

router.delete('/:id', deleteBoardController)

export default router
