import { Request, Response } from 'express'

export const getTasksList = (_req: Request, res: Response) => {
  res.render('index', { title: 'getTasksList' })
  return res.status
}

export const getTask = (_req: Request, res: Response) => {
  res.render('index', { title: 'getTask' })
  return res.status
}

export const getBoardTasksList = (_req: Request, res: Response) => {
  res.render('index', { title: 'getTask' })
  return res.status
}

export const createTask = (_req: Request, res: Response) => {
  res.render('index', { title: 'createTask' })
  return res.status
}

export const updateTask = (_req: Request, res: Response) => {
  res.render('index', { title: 'updateTask' })
  return res.status
}

export const deleteTask = (_req: Request, res: Response) => {
  res.render('index', { title: 'deleteTask' })
  return res.status
}
