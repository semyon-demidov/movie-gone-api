import { Request, Response } from 'express'

export const getLists = (_req: Request, res: Response) => {
  res.render('index', { title: 'getListsList' })
  return res.status
}

export const getListItem = (_req: Request, res: Response) => {
  res.render('index', { title: 'getList' })
  return res.status
}

export const getBoardLists = (_req: Request, res: Response) => {
  res.render('index', { title: 'getList' })
  return res.status
}

export const createList = (_req: Request, res: Response) => {
  res.render('index', { title: 'createList' })
  return res.status
}

export const updateList = (_req: Request, res: Response) => {
  res.render('index', { title: 'updateList' })
  return res.status
}

export const deleteList = (_req: Request, res: Response) => {
  res.render('index', { title: 'deleteList' })
  return res.status
}
