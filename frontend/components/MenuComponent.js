import m from 'mithril'

export default {
  view: () => m('nav.site-navigation',
    m('ul',
      m('li.site-navigation__calculator',
        m(m.route.Link, {href: '/calculator'}, 'Calculator')
      ),
      m('li.site-navigation__error',
        m(m.route.Link, {href: '/error'}, 'Error')
      ),
      m('li.site-navigation__ping',
        m(m.route.Link, {href: '/ping'}, 'Ping')
      )
    )
  )
}
