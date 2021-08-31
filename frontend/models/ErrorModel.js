export const ErrorModel = {
  list: [],
  addError: (error) => ErrorModel.list.push(error),
  setErrors: (errors) => ErrorModel.list = errors,
  resetErrors: () => ErrorModel.list = []
}
