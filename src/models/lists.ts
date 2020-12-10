import db from '@/service/mysqlClient'

export const createList = async (body: { name?: string }): Promise<any> => {
  const list = await db.query('SELECT * FROM boards')
  return { list, body }
}
