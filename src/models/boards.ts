import query from '@/helpers/db'

export const createBoard = async (params: { boardName?: string }): Promise<any> => {
  const fields = {
    name: params.boardName,
    created_at: new Date().toISOString().
      replace(/T/, ' ').
      replace(/\..+/, ''),
  }

  const list = await query
    .create(fields, 'boards')
    .init()

  return list
}

export const getBoards = async (params: { boardName?: string }, sort): Promise<any> => {
  const list = await query
    .select('*')
    .from('boards')
    .where(params)
    .orderBy(sort.fields, sort.order)
    .init()

  return list
}
