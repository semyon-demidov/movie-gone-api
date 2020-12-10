export const checkRequireFields = (schema: string[], fields: object): boolean => {
  return schema.every((schemaKey): boolean => (
    Object.keys(fields).some((fieldKey): boolean => (
      fieldKey === schemaKey
    ))
  ))
}
