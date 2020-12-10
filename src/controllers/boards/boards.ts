import { Request, Response } from 'express'

import { createBoard } from '@/models/boards'

interface BoardBody {
  name?: string
}

export const getBoardsListController = (_req: Request, res: Response): void => {
  res.send('getBoardsListController')
}

export const getBoardController = (_req: Request, res: Response): void => {
  res.send('getBoardController')
}

export const createBoardController = async (req: Request, res: Response): Promise<void> => {
  const { body }: { body: BoardBody } = req

  const list = await createBoard(body)

  res.json({ data: list })
}

export const updateBoardController = (_req: Request, res: Response): void => {
  res.send('updateBoardController')
}

export const deleteBoardController = (_req: Request, res: Response): void => {
  res.send('deleteBoardController')
}
