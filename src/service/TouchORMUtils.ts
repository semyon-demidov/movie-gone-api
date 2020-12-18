interface PostFixesInterface {
  contains(item: string | number): string
  in(items: (string | number)[]): string
  default(items: (string | number)[]): string[]
}

const postFixes: PostFixesInterface = {
  contains: (item): string => (
    `LIKE %${item}%`
  ),
  in: (items): string => {
    const values = items.join(', ')
    return `IN (${values})`
  },
  default: (items): string[] => {
    const prepareField = (item: string | number): string => (
      `= '${item}'`
    )

    if (Array.isArray(items)) {
      return items.map(prepareField)
    }

    return [items].map(prepareField)
  },
}

export const prepareWhereFields = (params: object, excludedFields?: string[]): object => {
  return Object.keys(params).reduce((prevData: object, key: string): object => {
    const seapratedKey = key.split('_')
    const fieldName = seapratedKey[0]
    const postFix = seapratedKey.length > 1
      ? seapratedKey[seapratedKey.length - 1]
      : 'default'

    const prepareField = postFixes[postFix]
    const prepareditem = prepareField(params[key])

    return (
      excludedFields && excludedFields.includes(key)
        ? prevData : {
          ...prevData,
          [fieldName]: prepareditem,
        }
    )
  },                                {})
}
