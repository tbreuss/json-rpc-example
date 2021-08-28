import m from 'mithril'
import {Client, HTTPTransport, RequestManager} from "@open-rpc/client-js"

const transport = new HTTPTransport("json-rpc.php")
const client = new Client(new RequestManager([transport]))

export default () => {

  const form = {
    operandOne: 0,
    operandTwo: 0,
    operator: 'add',
    result: 0,
    errors: []
  }

  const submit = (e) => {
    const method = "calculator." + form.operator
    return client.request({
      method: method,
      params: [form.operandOne, form.operandTwo]
    })
  }

  return {
    view: () => [
      m("h1", "Calculator"), [
        m('form', {
          onsubmit: (e) => {
            e.preventDefault()
            submit().
            then(result => {
              if (result.errors.length > 0) {
                form.errors = result.errors
              } else {
                form.result = result.result
                form.errors = []
              }
              m.redraw()
            })
              .catch((e) => {
                m.redraw()
              })
          }
        }, [
          m("input[type=text]", {
            placeholder: "Number",
            value: form.operandOne,
            onchange: (e) => form.operandOne = e.target.value,
          }),
          m("select", {
            selected: form.operator,
            onchange: (e) => form.operator = e.target.value,
            oncreate: ({dom}) => dom.querySelector('[value="' + form.operator + '"]').selected = true,
          },[
            m("option[value=add]", "plus"),
            m("option[value=subtract]", "minus"),
            m("option[value=multiply]", "times"),
            m("option[value=divide]", "divided by"),
          ]),
          m("input[type=text]", {
            placeholder: "Number",
            value: form.operandTwo,
            onchange: (e) => form.operandTwo = e.target.value,
          }),
          m("button", {}, "equals"),
          m("input[readonly]", {
            value: form.result
          }),
          m("div[style=color:red]", form.errors.map((error) => {
            return m('div', error)
          }))
        ])
      ]
    ]
  }
}
