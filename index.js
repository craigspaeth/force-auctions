import Koa from 'koa'
import auction from './apps/auction'

const { PORT } = process.env
const app = new Koa()

// Mount apps
app.use(...auction.middleware)

// Connect to Mongo and start server
app.listen(PORT)
console.log('Listening on ' + PORT)
