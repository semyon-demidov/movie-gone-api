import { Request, Response } from 'express'

export const getBoardsList = (_req: Request, res: Response) => {
  res.render('index', { title: 'getBoardsList' })
  return res.status
}

export const getBoard = (_req: Request, res: Response) => {
  res.render('index', { title: 'getBoard' })
  return res.status
}

export const createBoard = (_req: Request, res: Response) => {
  res.render('index', { title: 'createBoard' })
  return res.status
}

export const updateBoard = (_req: Request, res: Response) => {
  res.render('index', { title: 'updateBoard' })
  return res.status
}

export const deleteBoard = (_req: Request, res: Response) => {
  res.render('index', { title: 'deleteBoard' })
  return res.status
}
