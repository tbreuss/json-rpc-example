import api from "../api";
import {JsonRpcErrorModel} from "./JsonRpcErrorModel";
import m from "mithril";

export const PersonModel = {
  list: [],
  loadList: () => api.person.getAll()
    .then((result) => {
      PersonModel.list = result
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
}
