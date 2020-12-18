import query from '@/service/TouchORM'

type GetBoards = (
  params: {
    filterBy?: { boardName?: string },
    sort?: { fields: string[], order: string },
    pager?: { limit: number, offset: number },
  },
) => Promise<any>

export const createBoard = async (params: { boardName?: string }): Promise<any> => {
  const fields = {
    name: (params || {}).boardName,
    created_at: new Date().toISOString().
      replace(/T/, ' ').
      replace(/\..+/, ''),
  }

  const list = await query('boards')
    .create(fields)
    .init()

  return list
}

export const getBoards: GetBoards = async ({
  filterBy = {},
  sort = { fields: ['id'], order: 'ASC' },
  pager = {
    offset: 0,
    limit: 100,
  },
}): Promise<any> => {
  const list = await query('boards')
    .select('*')
    .where(filterBy)
    .orderBy(sort.fields, sort.order)
    .limit(pager.limit, pager.offset)
    .init()

  return list
}
