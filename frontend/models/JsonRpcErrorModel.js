export const JsonRpcErrorModel = {
  list: [],
  addError: (error) => JsonRpcErrorModel.list.push(error),
  setErrors: (errors) => JsonRpcErrorModel.list = errors,
  resetErrors: () => JsonRpcErrorModel.list = []
}
