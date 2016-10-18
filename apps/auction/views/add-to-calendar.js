import veact from 'veact'
import { state, toggleCalendar } from '../controllers'
import { graySemibold } from 'styles'

const view = veact()

const { div, span } = view.els()

view.styles({
  link: {
    color: graySemibold,
    marginLeft: 20
  }
})

view.render(() =>
  div(
    span('.link', { onClick: toggleCalendar }, '+ Add to calendar'),
    state.get('calendarOpen') ? 'Open' : '')
)

export default view()
