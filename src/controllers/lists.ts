import { Request, Response } from 'express'

export const getListsController = (_req: Request, res: Response): void => {
  res.send('getListsController')
}

export const getListItemController = (_req: Request, res: Response): void => {
  res.send('getListItemController')
}

export const getBoardListsController = (_req: Request, res: Response): void => {
  res.send('getBoardListsController')
}

export const createListController = (_req: Request, res: Response): void => {
  res.send('createListController')
}

export const updateListController = (_req: Request, res: Response): void => {
  res.send('updateListController')
}

export const deleteListController = (_req: Request, res: Response): void => {
  res.send('deleteListController')
}
