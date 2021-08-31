import api from "../api";
import {ErrorModel} from "./ErrorModel";
import m from "mithril";

export const PersonModel = {
  list: [],
  loadList: () => api.person.getAll()
    .then((result) => {
      PersonModel.list = result
      ErrorModel.resetErrors()
      m.redraw()
      return result
    })
    .catch((error) => {
      ErrorModel.setErrors([error])
      m.redraw()
      throw error
    })
  ,
}
