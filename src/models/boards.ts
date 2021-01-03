import query from '@/service/TouchORM'

type BoardParams = (
  params: {
    filterBy?: { id?: string | number, boardName?: string },
    sort?: { fields: string[], order: string },
    pager?: { limit: number, offset: number },
  },
) => Promise<any>

export const createBoard = async (boardName?: string): Promise<any> => {
  const fields = {
    name: boardName,
    created_at: new Date().toISOString().
      replace(/T/, ' ').
      replace(/\..+/, ''),
  }

  const list = await query('boards')
    .create(fields)
    .init()

  return list
}

export const getBoardsList: BoardParams = async ({
  filterBy = {},
  sort = { fields: ['id'], order: 'ASC' },
  pager = {
    offset: 0,
    limit: 100,
  },
}): Promise<any> => {
  const board = await query('boards')
    .select('*')
    .where(filterBy)
    .orderBy(sort.fields, sort.order)
    .limit(pager.limit, pager.offset)
    .init()

  return board
}

export const getBoard = async (
  params: { id?: string | number, boardName?: string },
): Promise<any> => {
  const [board] = await query('boards')
    .select('*')
    .where(params)
    .init()

  return board
}

export const deleteBoard = async (id?: string | number): Promise<void> => {
  await query('boards')
    .delete()
    .where({ id })
    .init()
}

export const updateBoard = async (
  id: string | number, fields: { name?: string },
): Promise<void> => {
  await query('boards')
    .update(fields)
    .where({ id })
    .init()
}
