import {Client, HTTPTransport, RequestManager} from '@open-rpc/client-js'
import m from 'mithril';
import {JsonRpcErrorModel} from './models/JsonRpcErrorModel';

const transport = new HTTPTransport('json-rpc.php')
const client = new Client(new RequestManager([transport]))

export default {
  ping: () => client.request({
    method: 'ping'
  }),
  error: {
    error: () => client.request({
      method: 'error.error'
    }).catch((error) => {
      JsonRpcErrorModel.setErrors([error])
      m.redraw()
      throw error
    }),
    success: () => client.request({
      method: 'error.success'
    }).then((result) => {
      JsonRpcErrorModel.resetErrors()
      m.redraw()
      return result
    })
  }
}
