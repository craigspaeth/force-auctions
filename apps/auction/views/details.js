import veact from 'veact'
import { type, smallMargin, mediumMargin, grayRegular } from 'styles'
import moment from 'moment'
import { assign } from 'lodash'
import marked from 'marked'
import { state } from '../controllers'
import AddToCalendar from './add-to-calendar'

const view = veact()

const { h1, h2, div, addtocalendar } = view.els({
  addtocalendar: AddToCalendar
})

view.styles({
  name: type('garamond', 'largeHeadline'),
  subheader: assign({
    borderTop: `1px solid ${grayRegular}`,
    borderBottom: `1px solid ${grayRegular}`,
    padding: `${smallMargin}px 0`,
    margin: `${mediumMargin}px 0`
  }, type('garamond', 'largeBody')),
  description: type('garamond', 'largeBody')
})

view.render(() => {
  const time = moment(state.get('auction').end_at).format('MM DD h:mm:ss')
  return div(
    h1('.name', state.get('auction').name),
    h2('.subheader', `Bidding closes ${time} EST`, addtocalendar()),
    h2('.description', {
      dangerouslySetInnerHTML: {
        __html: marked(state.get('auction').description)
      }
    }))
})

export default view()
