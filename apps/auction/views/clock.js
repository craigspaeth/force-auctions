import veact from 'veact'
import { map, assign } from 'lodash'
import { type, smallMargin } from 'styles'
import { state } from '../controllers'
import moment from 'moment'

const view = veact()

const { div, span } = view.els()
const container = {
  width: 280,
  textAlign: 'center'
}

view.styles({
  num: assign(
    type('avantgarde', 'extraLargeHeadline')
  ),
  label: assign(
    type('avantgarde', 'smallHeadline')
  ),
  item: {
    display: 'inline-block',
    margin: `0 ${smallMargin}`
  },
  header: assign(
    type('avantgarde', 'smallHeadline'),
    { marginBottom: 10 }
  ),
  whiteBig: assign({}, container, {
    color: 'white'
  })
})

view.render(({ mode }) => {
  const interval = (fmt) => {
    const diff = moment(state.get('auction').end_at).diff(moment(state.get('now')))
    const duration = moment.duration(diff, 'milliseconds')
    return String(duration[fmt]())
  }
  const data = {
    days: interval('days'),
    hrs: interval('hours'),
    min: interval('minutes'),
    sec: interval('seconds')
  }
  return div('.' + mode,
    div('.header', 'Auction Closes in'),
    map(data, (num, label) =>
      div('.item',
        div('.num', num),
        span('.label', label),
      )))
})

export default view()
