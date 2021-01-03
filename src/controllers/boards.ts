import { Request, Response } from 'express'

import {
  createBoard,
  getBoardsList,
  getBoard,
  deleteBoard,
  updateBoard,
} from '@/models/boards'
import {
  checkRequireFields,
  // convertQueryParams,
} from '@/helpers'

interface BoardBody {
  boardName: string
}

export const createBoardController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { body }: { body: BoardBody } = req

    const hasRequiredFields = checkRequireFields(['boardName'], body)
    if (!hasRequiredFields) {
      res.status(400).send({
        message: 'Specify required fields',
      })
      return
    }

    await createBoard(body.boardName)

    res.send({
      message: `Board '${body.boardName}' has been created successfully`,
    })
  } catch (err) {
    console.error('Error: ', err)

    res.status(500).send({
      message: 'Internal Server Error',
    })
  }
}

export const getBoardsListController = async (req: Request, res: Response): Promise<void> => {
  try {
    const boardsList = await getBoardsList({
      filterBy: req.query,
      pager: { limit: 10, offset: 0 },
    })

    res.send(boardsList)
  } catch (err) {
    console.error('Error: ', err)

    res.status(500).send({
      message: 'Internal Server Error',
    })
  }
}

export const getBoardController = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.params.id) {
      res.status(400).send({
        message: 'Specify id of a board',
      })
      return
    }

    const board = await getBoard({ id: req.params.id })

    res.send(board)
  } catch (err) {
    console.error('Error: ', err)

    res.status(500).send({
      message: 'Internal Server Error',
    })
  }
}

export const updateBoardController = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.params.id) {
      res.status(400).send({
        message: 'Specify id of a board',
      })
    }

    const board = await getBoard({ id: req.params.id })
    if (!board) {
      res.status(400).send({
        message: 'Board isn\'t found',
      })
      return
    }

    await updateBoard(board.id, { name: req.body.boardName })

    res.send({
      message: 'Board has been updated successfully',
    })
  } catch (err) {
    console.error('Error: ', err)

    res.status(500).send({
      message: 'Internal Server Error',
    })
  }
}

export const deleteBoardController = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.params.id) {
      res.status(400).send({
        message: 'Specify id of a board',
      })
    }

    const board = await getBoard({ id: req.params.id })
    if (!board) {
      res.status(400).send({
        message: 'Board isn\'t found',
      })
      return
    }

    await deleteBoard(board.id)

    res.send({
      message: 'Board has been deleted successfully',
    })
  } catch (err) {
    console.error('Error: ', err)

    res.status(500).send({
      message: 'Internal Server Error',
    })
  }
}
