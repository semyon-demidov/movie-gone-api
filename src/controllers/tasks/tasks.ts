import { Request, Response } from 'express'

export const getTasksListController = (_req: Request, res: Response) => {
  res.render('index', { title: 'getTasksList' })
  return res.status
}

export const getTaskController = (_req: Request, res: Response) => {
  res.render('index', { title: 'getTask' })
  return res.status
}

export const getBoardTasksListController = (_req: Request, res: Response) => {
  res.render('index', { title: 'getTask' })
  return res.status
}

export const createTaskController = (_req: Request, res: Response) => {
  res.render('index', { title: 'createTask' })
  return res.status
}

export const updateTaskController = (_req: Request, res: Response) => {
  res.render('index', { title: 'updateTask' })
  return res.status
}

export const deleteTaskController = (_req: Request, res: Response) => {
  res.render('index', { title: 'deleteTask' })
  return res.status
}
