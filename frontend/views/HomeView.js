import m from 'mithril'

const links = [
  {label: "Laminas JSON-RPC Server", href: "https://docs.laminas.dev/laminas-json-server"},
  {label: "OpenRPC Client JS", href: "https://github.com/open-rpc/client-js"},
  {label: "Mithril", href: "https://mithril.js.org"},
]

export default {
  view: () => [
    m("h1", "Hi there!"),
    m("p", "This is a super simple JSON-RPC example built as Single Page Application (SPA) based on Laminas JSON-RPC Server,\n" +
      "OpenRPC Client JS, and Mithril.\n"),
    m("p", links.map(link => m("li", m("a[target=_blank]", {href: link.href}, link.label))))
  ]
}
