import veact from 'veact'
import { assign } from 'lodash'
import { flatButton, grayRegular, graySemibold, smallMargin } from 'styles'

const view = veact()

const { div, p, button } = view.els()

view.styles({
  btn: assign(
    flatButton('dark'),
    {
      width: '100%',
      marginBottom: smallMargin
    }
  ),
  container: {
    width: '100%',
    border: `1px solid ${grayRegular}`,
    textAlign: 'center',
    padding: smallMargin
  },
  required: {
    color: graySemibold
  }
})

view.render(() =>
  div('.container',
    button('.btn', 'Register to bid'),
    p('.required', 'Registration required to bid'))
)

export default view()
