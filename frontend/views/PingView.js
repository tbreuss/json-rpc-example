import m from 'mithril'
import {PingModel} from '../models/PingModel'

export default {
  view: () => [
    m('h1', 'Ping'),
    m('button', {
      onclick: () => {
        PingModel.loadList()
      }
    }, 'Ping API'),
    m('button', {
      hidden: PingModel.list.length === 0,
      onclick: () => {
        PingModel.resetList()
      }
    }, 'Reset'),
    PingModel.list.map((row) => m('div', row))
  ]
}
