import { Request, Response } from 'express'

import {
  createList,
  getLists,
  getListItem,
  updateListItem,
  deleteListItem,
} from '@/models/lists'
import { getBoard } from '@/models/boards'
import { checkRequireFields } from '@/helpers'

interface BoardBody {
  listName: string
}

export const getListsController = async (req: Request, res: Response): Promise<void> => {
  try {
    const board = await getBoard({ id: req.params.boardId }) // replace to left join

    const lists = await getLists({
      filterBy: req.query,
      pager: { limit: 10, offset: 0 },
    })

    res.send({ board, lists })
  } catch (err) {
    console.error('Error: ', err)

    res.status(500).send({
      message: 'Internal Server Error',
    })
  }
}

export const getListItemController = async (req: Request, res: Response): Promise<void> => {
  try {
    const listItem = await getListItem({ id: req.params.id })

    res.send(listItem)
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

export const updateListController = async (req: Request, res: Response): Promise<void> => {
  try {
    const listItem = await getListItem({ id: req.params.id })

    if (!listItem) {
      res.status(400).send({
        message: 'List isn\'t found',
      })
      return
    }

    await updateListItem(listItem.id, { name: req.body.listName })

    res.send({
      message: 'List has been updated successfully',
    })
  } catch (err) {
    console.error('Error: ', err)

    res.status(500).send({
      message: 'Internal Server Error',
    })
  }
}

export const deleteListController = async (req: Request, res: Response): Promise<void> => {
  try {
    const listItem = await getListItem({ id: req.params.id })

    if (!listItem) {
      res.status(400).send({
        message: 'List isn\'t found',
      })
      return
    }

    await deleteListItem(listItem.id)

    res.send({
      message: 'List has been deleted successfully',
    })
  } catch (err) {
    console.error('Error: ', err)

    res.status(500).send({
      message: 'Internal Server Error',
    })
  }
}
