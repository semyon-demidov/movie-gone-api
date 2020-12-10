import { Request, Response } from 'express'

export const getTasksListController = (_req: Request, res: Response): void => {
  res.send('getTasksListController')
}

export const getTaskController = (_req: Request, res: Response): void => {
  res.send('getTaskController')
}

export const getBoardTasksListController = (_req: Request, res: Response): void => {
  res.send('getBoardTasksListController')
}

export const createTaskController = (_req: Request, res: Response): void => {
  res.send('createTaskController')
}

export const updateTaskController = (_req: Request, res: Response): void => {
  res.send('updateTaskController')
}

export const deleteTaskController = (_req: Request, res: Response): void => {
  res.send('deleteTaskController')
}
