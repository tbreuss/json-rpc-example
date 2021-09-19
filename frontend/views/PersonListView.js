import m from 'mithril'
import {PersonModel} from "../models/PersonModel";

const table = (persons) => m('table.persons',
  tableHead(),
  tableBody(persons)
)

const tableHead = () => m('tr',
  m('th', 'ID'),
  m('th', 'Name'),
  m('th', 'E-Mail'),
  m('th', 'Gender'),
  m('th', 'IP-Address')
)

const tableBody = (persons) => persons.map((person) => m('tr',
  m('td.text-right', person.id),
  m('td', person.first_name + ' ' + person.last_name),
  m('td', person.email),
  m('td', person.gender),
  m('td', person.ip_address)
))

export default {
  oninit: PersonModel.loadList,
  view: () => [
    m('h1', 'Persons'),
    table(PersonModel.list)
  ]
}
