import router from './router'
import { state } from './controllers'
import moment from 'moment'

router.routes()

setInterval(() => state.set('now', moment().unix()), 1000)
