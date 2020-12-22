import { Request, Response } from 'express'

import { createBoard, getBoards } from '@/models/boards'
import {
  checkRequireFields,
  //  convertQueryParams
} from '@/helpers'

interface BoardBody {
  boardName: string
}

export const getBoardsListController = async (req: Request, res: Response): Promise<void> => {
  // const params = convertQueryParams(req.query)
  const list = await getBoards({
    filterBy: req.query,
    pager: { limit: 10, offset: 0 },
  })

  res.send(list)
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
