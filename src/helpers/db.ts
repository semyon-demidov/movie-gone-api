import db from '@/service/mysqlClient'

type QueryConcat = (finalQuery: string, fieldName: string, index: number) => string

class Query {
  query: string
  constructor() {
    this.query = ''
  }

  select(fields: string[] | string): Query {
    const preparedFields = typeof fields === 'object'
      ? Object.keys(fields).join(', ')
      : fields

    this.query = `SELECT ${preparedFields}`
    return this
  }

  from(entity: string): Query {
    this.query = `${this.query} FROM ${entity}`
    return this
  }

  where(params: object): Query {
    const paramsKeys = Object.keys(params)

    if (!paramsKeys.length) {
      return this
    }

    const concatQuery: QueryConcat = (finalQuery, fieldName, index): string => (
      `${finalQuery} ${fieldName} = '${params[fieldName]}'${paramsKeys[index + 1] ? ' and' : ''}`
    )

    this.query = `${this.query} ${paramsKeys.reduce(concatQuery, 'WHERE')}`
    return this
  }

  orderBy(fields: string[], order: string): Query {
    if (!fields.length) {
      return this
    }

    const concatQuery: QueryConcat = (finalQuery, fieldName, index): string => (
      `${finalQuery} ${fieldName} = ${fieldName}${fields[index + 1] ? ' and' : ''}${!fields[index + 1] ? ` ${order}` : ''}`
    )

    this.query = `${this.query} ${fields.reduce(concatQuery, 'ORDER BY')}`
    return this
  }

  create(fields: object, entity: string): Query {
    const fieldsKeys = Object.keys(fields).join(', ')
    const fieldsValues = Object.values(fields)

    const values = fieldsValues.reduce((prevItem: string, item: string, index: number): string => {
      return `${prevItem} '${item}'${fieldsValues[index + 1] ? ', ' : ''} `
    },                                 '')

    this.query = `INSERT INTO ${entity} (${fieldsKeys}) VALUES (${values})`

    return this
  }

  async init(): Promise<any> {
    const result = await db.query(this.query)
    return result
  }
}

export default new Query()
