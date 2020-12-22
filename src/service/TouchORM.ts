import db from './mysqlClient'
import { prepareWhereFields } from './TouchORMUtils'

type QueryConcat = (finalQuery: string, fieldName: string, index: number) => string

class TouchORM {
  query: string
  tableName: string
  constructor(tableName) {
    this.query = ''
    this.tableName = tableName
  }

  select(fields: string[] | string): TouchORM {
    try {
      const preparedFields = typeof fields === 'object'
        ? Object.keys(fields).join(', ')
        : fields

      this.query = `SELECT ${preparedFields}`
      if (this.tableName) {
        this.query = `${this.query} FROM ${this.tableName}`
      }
      return this
    } catch (error) {
      console.error('Error: ', error)
      return this
    }
  }

  where(initailParams: object): TouchORM {
    try {
      const params = prepareWhereFields(initailParams)
      const paramsKeys = Object.keys(params)

      if (!paramsKeys.length) {
        return this
      }

      const concatQuery: QueryConcat = (finalQuery, fieldName, index): string => {
        const fieldValue = params[fieldName]
        const valueQuery = Array.isArray(fieldValue)
          ? fieldValue.join(` AND ${fieldName} `)
          : fieldValue

        return `${finalQuery} ${fieldName} ${valueQuery}${paramsKeys[index + 1] ? ' AND' : ''}`
      }

      this.query = `${this.query} ${paramsKeys.reduce(concatQuery, 'WHERE')}`
      return this
    } catch (error) {
      console.error('Error: ', error)
      return this
    }
  }

  orderBy(fields: string[], order: string): TouchORM {
    try {
      if (!fields.length) {
        return this
      }

      const concatQuery: QueryConcat = (finalQuery, fieldName, index): string => (
        `${finalQuery} ${fieldName}${fields[index + 1] ? ' AND' : ''}${!fields[index + 1] ? ` ${order}` : ''}`
      )

      this.query = `${this.query} ${fields.reduce(concatQuery, 'ORDER BY')}`
      return this
    } catch (error) {
      console.error('Error: ', error)
      return this
    }
  }

  limit(limit: number, offset: number): TouchORM {
    try {
      this.query = `${this.query} LIMIT ${offset}, ${limit}`
      return this
    } catch (error) {
      console.error('Error: ', error)
      return this
    }
  }

  create(fields: object): TouchORM {
    try {
      const fieldsKeys = Object.keys(fields).join(', ')
      const fieldsValues = Object.values(fields)

      const values = fieldsValues.reduce((
        prevItem: string, item: string, index: number,
      ): string => {
        return `${prevItem} '${item}'${fieldsValues[index + 1] ? ', ' : ''} `
      }, '')

      this.query = `INSERT INTO ${this.tableName} (${fieldsKeys}) VALUES (${values})`

      return this
    } catch (error) {
      console.error('Error: ', error)
      return this
    }
  }

  delete(): TouchORM {
    try {
      this.query = `DELETE FROM ${this.tableName}`

      return this
    } catch (error) {
      console.error('Error: ', error)
      return this
    }
  }

  async init(): Promise<any> {
    try {
      console.info(this.query)
      const result = await db.query(this.query)
      return result
    } catch (error) {
      console.error('Error: ', error)
      return null
    }
  }
}

const HOC = (tableName: string): TouchORM => {
  return new TouchORM(tableName)
}

export default HOC
