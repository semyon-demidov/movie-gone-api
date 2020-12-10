import { Request, Response } from 'express'
import { createBoard } from '@/models/boards'

interface BoardBody {
  name?: string
}

export const getBoardsListController = (_req: Request, res: Response) => {
  res.render('index', { title: 'getBoardsList' })
  return res.status
}

export const getBoardController = (_req: Request, res: Response) => {
  res.render('index', { title: 'getBoard' })
  return res.status
}

export const createBoardController = async (req: Request, res: Response) => {
  const { body }: { body: BoardBody } = req

  const list = await createBoard(body)

  return res.json({ data: list })
}

export const updateBoardController = (_req: Request, res: Response) => {
  res.render('index', { title: 'updateBoard' })
  return res.status
}

export const deleteBoardController = (_req: Request, res: Response) => {
  res.render('index', { title: 'deleteBoard' })
  return res.status
}
