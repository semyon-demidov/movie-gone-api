import { Router } from 'express'

import {
  getBoardsListController,
  getBoardController,
  createBoardController,
  updateBoardController,
  deleteBoardController,
} from '@/controllers/boards'

const router = Router()

router.post('/', createBoardController)

router.get('/', getBoardsListController)

router.get('/:id', getBoardController)

router.put('/:id', updateBoardController)

router.delete('/:id', deleteBoardController)

export default router
