import { Request, Response } from 'express'

import {
  getTasksList,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from '@/models/tasks'
import { getListItem } from '@/models/lists'
import { checkRequireFields } from '@/helpers'

interface TaskBody {
  title: string,
  derscription?: string,
}

export const createTaskController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { body }: { body: TaskBody } = req

    const reqFields = ['title']

    const hasRequiredFields = checkRequireFields(reqFields, body)
    if (!hasRequiredFields) {
      res.status(400).send({
        message: 'Specify required fields',
      })
      return
    }

    const { listId } = req.params

    await createTask({ ...body, listId })

    res.send({
      message: `Task '${body.title}' has been created successfully`,
    })
  } catch (err) {
    console.error('Error: ', err)

    res.status(500).send({
      message: 'Internal Server Error',
    })
  }
}

export const getTasksListController = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasksList = await getTasksList({
      filterBy: req.query,
      pager: { limit: 100, offset: 0 },
    })

    res.send(tasksList)
  } catch (err) {
    console.error('Error: ', err)

    res.status(500).send({
      message: 'Internal Server Error',
    })
  }
}

export const getTaskController = async (req: Request, res: Response): Promise<void> => {
  try {
    const task = await getTask({ id: req.params.id })

    res.send(task)
  } catch (err) {
    console.error('Error: ', err)

    res.status(500).send({
      message: 'Internal Server Error',
    })
  }
}

export const getTasksWithListItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const board = await getListItem({ id: req.params.listId }) // replace to left join

    const lists = await getTasksList({
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

export const updateTaskController = async (req: Request, res: Response): Promise<void> => {
  try {
    const task = await getTask({ id: req.params.id })

    if (!task) {
      res.status(400).send({
        message: 'Task isn\'t found',
      })
      return
    }

    await updateTask(task.id, req.body)

    res.send({
      message: 'Task has been updated successfully',
    })
  } catch (err) {
    console.error('Error: ', err)

    res.status(500).send({
      message: 'Internal Server Error',
    })
  }
}

export const deleteTaskController = async (req: Request, res: Response): Promise<void> => {
  try {
    const task = await getTask({ id: req.params.id })

    if (!task) {
      res.status(400).send({
        message: 'List isn\'t found',
      })
      return
    }

    await deleteTask(task.id)

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
