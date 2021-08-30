import m from 'mithril'
import {PersonModel} from "../models/PersonModel";

const tableHeader = () => m('tr',
  m('th', 'ID'),
  m('th', 'Name'),
  m('th', 'E-Mail'),
  m('th', 'Gender'),
  m('th', 'IP-Address')
)

const tableData = (persons) => persons.map((person) => m('tr',
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
    m('table.persons',
      tableHeader(),
      tableData(PersonModel.list)
    )
  ]
}
