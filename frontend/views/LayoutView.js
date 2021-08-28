import m from 'mithril'

export default {
  view: ({children}) => m('.app',
    m('header.site-header',
      m('h1.site-title',
        m(m.route.Link, {href: '/'}, m('span.title-text', 'JSON-RPC Example'))
      ),
      m('nav.site-navigation',
        m('ul',
          m('li.site-navigation__calculator',
            m(m.route.Link, {href: '/calculator'}, 'Calculator')
          ),
          m('li.site-navigation__ping',
            m(m.route.Link, {href: '/ping'}, 'Ping')
          )
        )
      )
    ),
    m('.main', children),
    m('.site-footer',
      m('p.hug', '© 2020 Thomas Breuss')
    )
  )
}
