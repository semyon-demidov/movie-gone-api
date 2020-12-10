import db from '@/service/mysqlClient'

export const createBoard = async (body: { name?: string }) => {
  const list = await db.query('SELECT * FROM boards')
  return { list, body }
}
