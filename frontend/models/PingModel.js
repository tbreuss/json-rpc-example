import m from 'mithril';
import api from '../api'
import {ErrorModel} from './ErrorModel';

export const PingModel = {
  list: [],
  loadList: () => api.ping()
    .then((result) => {
      PingModel.list.push(result)
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
  resetList: () => {
    PingModel.list.length = 0
    ErrorModel.resetErrors()
    m.redraw()
  }
}
