export const convertQueryParams = (params: object): object => { // get normal data
  return Object.keys(params).reduce((prevData: object, key: string): object => {
    const fieldName = key.split('_')[0]

    return {
      ...prevData,
      [fieldName]: params[key],
    }
  },                                {})
}

export const checkRequireFields = (schema: string[], fields: object): boolean => {
  return schema.every((schemaKey): boolean => (
    Object.keys(fields).some((fieldKey): boolean => (
      fieldKey === schemaKey
    ))
  ))
}
