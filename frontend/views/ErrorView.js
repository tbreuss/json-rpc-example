import m from 'mithril'
import api from "../api";

export default {
  view: () => [
    m('h1', 'Error'),
    m('button', {
      onclick: () => {
        api.error.error()
      }
    }, 'Provoke error'),
    m('button', {
      onclick: () => {
        api.error.success()
      }
    }, 'Reset error')
  ]
}
