import m from "mithril";
import api from '../api'
import {JsonRpcErrorModel} from "./JsonRpcErrorModel";

export const PingModel = {
  list: [],
  loadList: () => api.ping()
    .then((result) => {
      PingModel.list.push(result)
      JsonRpcErrorModel.resetErrors()
      m.redraw()
      return result
    })
    .catch((error) => {
      JsonRpcErrorModel.setErrors([error])
      m.redraw()
      throw error
    })
  ,
  resetList: () => {
    PingModel.list.length = 0
    JsonRpcErrorModel.resetErrors()
    m.redraw()
  }
}
