import m from 'mithril'
import api from '../api';
import {JsonRpcErrorModel} from '../models/JsonRpcErrorModel';

export default {
  view: () => [
    m('h1', 'Error'),
    m('button', {
      hidden: JsonRpcErrorModel.list.length > 0,
      onclick: () => {
        api.error.error()
      }
    }, 'Provoke error'),
    m('button', {
      hidden: JsonRpcErrorModel.list.length === 0,
      onclick: () => {
        api.error.success()
      }
    }, 'Reset error')
  ]
}
