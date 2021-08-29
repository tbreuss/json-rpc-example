import m from 'mithril'
import {PingModel} from '../models/PingModel'

export default {
  view: () => [
    m('h1', 'Ping'),
    m('button', {
      onclick: () => {
        PingModel.loadList().then(() => { m.redraw()})
      }
    }, 'Ping API'),
    m('button', {
      onclick: () => {
        PingModel.resetList()
        m.redraw()
      }
    }, 'Reset'),
    PingModel.list.map((row) => m('div', row))
  ]
}
