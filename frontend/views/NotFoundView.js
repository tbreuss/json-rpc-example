import m from 'mithril'

export default {
  view: () => [
    m('p.lead', 'Uups?!'),
    m('p', 'Die aufgerufene Seite gibt es nicht mehr oder hat es nie gegeben.'),
    m('p', 'Was kannst du tun?'),
    m('ul[style=margin-top:0]',
      m('li', 'Nutze die Zurück-Taste des Browsers'),
      m('li',
        'Navigiere zurück zur ',
        m(m.route.Link, {href: '/'}, 'Startseite')
      )
    )
  ]
}
