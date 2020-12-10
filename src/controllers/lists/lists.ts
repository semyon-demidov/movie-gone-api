import { Request, Response } from 'express'

export const getListsController = (_req: Request, res: Response) => {
  res.render('index', { title: 'getListsList' })
  return res.status
}

export const getListItemController = (_req: Request, res: Response) => {
  res.render('index', { title: 'getList' })
  return res.status
}

export const getBoardListsController = (_req: Request, res: Response) => {
  res.render('index', { title: 'getList' })
  return res.status
}

export const createListController = (_req: Request, res: Response) => {
  res.render('index', { title: 'createList' })
  return res.status
}

export const updateListController = (_req: Request, res: Response) => {
  res.render('index', { title: 'updateList' })
  return res.status
}

export const deleteListController = (_req: Request, res: Response) => {
  res.render('index', { title: 'deleteList' })
  return res.status
}
