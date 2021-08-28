import m from 'mithril'

import {Client, HTTPTransport, RequestManager} from "@open-rpc/client-js"

const transport = new HTTPTransport("json-rpc.php")
const client = new Client(new RequestManager([transport]))

const pongs = []

export default {
  view: () => [
    m("h1", "Ping"),
    m("button", {
      onclick: (e) => {
        e.preventDefault();
        client.request({
          method: 'ping'
        }).then((result) => {
          pongs.push(result)
          m.redraw()
        })
      }
    }, "Click me"),
    pongs.map((row) => [
      m("div", row)
    ])
  ]
}
