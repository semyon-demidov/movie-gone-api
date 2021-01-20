import query from '@/service/TouchORM'

type TasksParams = (
  params: {
    filterBy?: { id?: string | number, boardName?: string },
    sort?: { fields: string[], order: string },
    pager?: { limit: number, offset: number },
  },
) => Promise<any>

type CreateTaskParams = (
  fields: {
    title: string,
    description?: string,
    listId: string,
  },
) => Promise<any>

export const createTask: CreateTaskParams = async ({
  title,
  description,
  listId,
}): Promise<any> => {
  const fields = {
    title,
    description,
    is_completed: false,
    created_at: new Date().toISOString(). // CURRENT_TIMESTAMP
      replace(/T/, ' ').
      replace(/\..+/, ''),
    lists_id: listId,
  }

  await query('tasks')
    .create(fields)
    .init()
}

export const getTasksList: TasksParams = async ({
  filterBy = {},
  sort = { fields: ['id'], order: 'ASC' },
  pager = {
    offset: 0,
    limit: 100,
  },
}): Promise<any> => {
  const board = await query('tasks')
    .select('*')
    .where(filterBy)
    .orderBy(sort.fields, sort.order)
    .limit(pager.limit, pager.offset)
    .init()

  return board
}

export const getTask = async (
  params: { id?: string | number, name?: string },
): Promise<any> => {
  const [task] = await query('tasks')
    .select('*')
    .where(params)
    .init()

  return task
}

export const updateTask = async (
  id: string | number, fields: { title?: string, description?: string, isCompleted?: boolean },
): Promise<void> => {
  const {
    title,
    description,
    isCompleted,
  } = fields

  await query('tasks')
    .update({
      title,
      description,
      is_completed: isCompleted,
    })
    .where({ id })
    .init()
}

export const deleteTask = async (id?: string | number): Promise<void> => {
  await query('tasks')
    .delete()
    .where({ id })
    .init()
}
