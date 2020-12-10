import db from '@/service/mysqlClient'

export const createBoard = async (params: { boardName?: string }): Promise<any> => {
  const values = [params.boardName, new Date()]
  const list = await db.query('INSERT INTO boards (name, created_at) VALUES (?, ?)', values)
  return list
}
