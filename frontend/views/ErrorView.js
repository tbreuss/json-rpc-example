import m from 'mithril'
import api from '../api';
import {ErrorModel} from '../models/ErrorModel';

export default {
  view: () => [
    m('h1', 'Error'),
    m('button', {
      hidden: ErrorModel.list.length > 0,
      onclick: () => {
        api.error.error()
      }
    }, 'Provoke error'),
    m('button', {
      hidden: ErrorModel.list.length === 0,
      onclick: () => {
        api.error.success()
      }
    }, 'Reset error')
  ]
}
