import api from '../api'
import {JsonRpcErrorModel} from "./JsonRpcErrorModel";

export const PingModel = {
  list: [],
  loadList: () => api.ping()
    .then((result) => {
      PingModel.list.push(result)
      JsonRpcErrorModel.resetErrors()
    })
    .catch((error) => {
      JsonRpcErrorModel.setErrors([error])
    })
  ,
  resetList: () => PingModel.list.length = 0
}
