import veact from 'veact'
import { state } from '../controllers'
import Clock from './clock'

const view = veact()

const { div, clock } = view.els({
  clock: Clock
})

view.styles({
  container: {
    height: 300,
    position: 'relative'
  },
  background: {
    height: 300,
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  clockContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
})

view.render(() => {
  const url = state.get('auction').cover_image.cropped.url
  return div('.container',
    div('.background', { style: { backgroundImage: `url(${url})` } }),
    div('.clockContainer', clock({ mode: 'whiteBig' })))
})

export default view()
