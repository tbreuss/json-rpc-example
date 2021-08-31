import {Client, HTTPTransport, RequestManager} from '@open-rpc/client-js'
import m from 'mithril';
import {ErrorModel} from './models/ErrorModel';

const transport = new HTTPTransport('json-rpc.php')
const client = new Client(new RequestManager([transport]))

export default {
  error: {
    error: () => client.request({
      method: 'error.error'
    }).catch((error) => {
      ErrorModel.setErrors([error])
      m.redraw()
      throw error
    }),
    success: () => client.request({
      method: 'error.success'
    }).then((result) => {
      ErrorModel.resetErrors()
      m.redraw()
      return result
    })
  },
  person: {
    getAll: () => client.request({
      method: 'person.getAll'
    }).catch((error) => {
      ErrorModel.setErrors([error])
      m.redraw()
      throw error
    }),
    getOne: () => client.request({
      method: 'person.getOne'
    }).catch((error) => {
      ErrorModel.setErrors([error])
      m.redraw()
      throw error
    }),
  },
  ping: () => client.request({
    method: 'ping'
  }),
}
