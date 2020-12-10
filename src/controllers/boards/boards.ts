import { Request, Response } from 'express'

import { createBoard } from '@/models/boards'
import { checkRequireFields } from '@/helpers'

interface BoardBody {
  boardName: string
}

export const getBoardsListController = (_req: Request, res: Response): void => {
  res.send('getBoardsListController')
}

export const getBoardController = (_req: Request, res: Response): void => {
  res.send('getBoardController')
}

export const createBoardController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { body }: { body: BoardBody } = req

    const hasRequiredFields = checkRequireFields(['boardName'], body)

    if (!hasRequiredFields) {
      res.status(400).json({
        message: 'Specify required fields, please',
      })
    }

    await createBoard(body)

    res.json({
      message: `Board '${body.boardName}' has been created successfully`,
    })
  } catch (err) {
    console.error('Error: ', err)

    res.status(500).json({
      message: 'Internal Server Error',
    })
  }
}

export const updateBoardController = (_req: Request, res: Response): void => {
  res.send('updateBoardController')
}

export const deleteBoardController = (_req: Request, res: Response): void => {
  res.send('deleteBoardController')
}
