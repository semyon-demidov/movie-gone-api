import mysql from 'mysql'
import util from 'util'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DB,
  connectionLimit: 10,
  connectTimeout: 30000,
})

pool.getConnection((err, connection): void => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      // tslint:disable-next-line:no-console
      console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      // tslint:disable-next-line:no-console
      console.error('Database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED') {
      // tslint:disable-next-line:no-console
      console.error('Database connection was refused.')
    }
  }

  if (connection) {
    connection.release()
  }

  return
})

pool.query = util.promisify(pool.query)

export default pool
