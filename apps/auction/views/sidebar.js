import veact from 'veact'
import { assign } from 'lodash'
import { smallMargin, mediumMargin, type } from 'styles'
import Register from './register'

const view = veact()
const howToBidLink = 'https://www.artsy.net/how-auctions-work'
const howToBidImg = 'https://www.artsy.net/images/kiosk-cta.png'

const { a, div, register, img, p, strong } = view.els({
  register: Register
})

view.styles({
  img: {
    height: 50,
    marginRight: smallMargin,
    marginLeft: smallMargin,
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  howToBid: {
    marginTop: mediumMargin,
    display: 'block',
    textDecoration: 'none'
  },
  questions: assign(type('garamond', 'body'), {
    margin: `${mediumMargin}px ${smallMargin}px`
  })
})

view.render(() =>
  div(
    register(),
    a('.howToBid', { href: howToBidLink },
      img('.img', { src: howToBidImg }),
      'How to Bid on Artsy'),
    div('.questions',
      p(strong('Questions? Contact us')),
      a({ href: 'mailto: inquiries@artsy.net' }, 'inquiries@artsy.net'),
      p('+1.646.712.8154')))
)

export default view()
