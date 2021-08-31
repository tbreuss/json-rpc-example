import m from 'mithril'
import {ErrorModel} from '../models/ErrorModel'
import MenuComponent from '../components/MenuComponent';

export default {
  view: ({children}) => m('.app',
    m('header.site-header',
      m('h1.site-title',
        m(m.route.Link, {href: '/'}, m('span.title-text', 'JSON-RPC Example'))
      ),
      m(MenuComponent),
    ),
    ErrorModel.list.map(error => m('div.error', error.message)),
    m('.main', children),
    m('.site-footer',
      m('p.hug', '© 2020 Thomas Breuss')
    )
  )
}
