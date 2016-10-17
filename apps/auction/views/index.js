import veact from 'veact'
import { largeMargin, mediumMargin } from 'styles'
import Header from './header'
import Sidebar from './sidebar'
import Details from './details'

const view = veact()

const { div, header, details, sidebar } = view.els({
  header: Header,
  details: Details,
  sidebar: Sidebar
})

view.styles({
  body: {
    maxWidth: 1200,
    margin: largeMargin
  },
  details: {
    width: '70%',
    display: 'inline-block',
    verticalAlign: 'top',
    paddingRight: mediumMargin
  },
  sidebar: {
    width: '30%',
    display: 'inline-block',
    verticalAlign: 'top'
  }
})

view.render(() =>
  div(
    header(),
    div('.body',
      div('.details', details()),
      div('.sidebar', sidebar())))
)

export default view()
