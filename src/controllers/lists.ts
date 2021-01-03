import { Request, Response } from 'express'

import {
  createList,
  getLists,
  getListItem,
} from '@/models/lists'
import { getBoard } from '@/models/boards'
import { checkRequireFields } from '@/helpers'

interface BoardBody {
  listName: string
}

export const getListsController = async (req: Request, res: Response): Promise<void> => {
  try {
    const lists = await getLists({
      filterBy: req.query,
      pager: { limit: 10, offset: 0 },
    })

    const board = await getBoard({ id: req.params.boardId })

    res.send({ lists, board })
  } catch (err) {
    console.error('Error: ', err)

    res.status(500).send({
      message: 'Internal Server Error',
    })
  }
}

export const getListItemController = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.params.id) {
      res.status(400).send({
        message: 'Specify id of a list',
      })
      return
    }

    const list = await getListItem({ id: req.params.id })

    res.send(list)
  } catch (err) {
    console.error('Error: ', err)

    res.status(500).send({
      message: 'Internal Server Error',
    })
  }
}

export const createListController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { body }: { body: BoardBody } = req

    const hasRequiredFields = checkRequireFields(['listName'], body)
    if (!hasRequiredFields) {
      res.status(400).send({
        message: 'Specify required fields',
      })
      return
    }

    await createList(body.listName, req.params.boardId)

    res.send({
      message: `List '${body.listName}' has been created successfully`,
    })
  } catch (err) {
    console.error('Error: ', err)

    res.status(500).send({
      message: 'Internal Server Error',
    })
  }
}

export const updateListController = (_req: Request, res: Response): void => {
  res.send('updateListController')
}

export const deleteListController = (_req: Request, res: Response): void => {
  res.send('deleteListController')
}
