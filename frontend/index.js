import m from 'mithril'
import CalculatorView from './views/CalculatorView'
import HomeView from './views/HomeView'
import LayoutView from './views/LayoutView'
import NotFoundView from './views/NotFoundView'
import PingView from "./views/PingView";

m.route(document.getElementById('app'), '/', {
  '/': {
    render: () => m(LayoutView, m(HomeView))
  },
  '/calculator': {
    render: () => m(LayoutView, m(CalculatorView))
  },
  '/ping': {
    render: () => m(LayoutView, m(PingView))
  },
  '/:404...': {
    render: () => m(LayoutView, m(NotFoundView))
  }
})
