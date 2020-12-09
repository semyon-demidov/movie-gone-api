import { Router } from 'express'

import {
  getBoardsList,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
} from './boards'

const router = Router()

router.get('/', getBoardsList)

router.get('/:id', getBoard)

router.post('/:id', createBoard)

router.put('/:id', updateBoard)

router.delete('/:id', deleteBoard)

export default router
