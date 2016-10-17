import Lokka from 'lokka'
import Transport from 'lokka-transport-http'
import tree from 'universal-tree'
import Index from '../views'

const api = new Lokka({
  transport: new Transport(process.env.METAPHYSICS_URL)
})

export const state = tree({
  auction: {}
})

export const index = async (ctx) => {
  const { sale: auction } = await ctx.bootstrap(() =>
    api.query(`{ sale(id: "${ctx.params.id}") {
      name
      start_at
      end_at
      status
      start_at
      description
      cover_image {
        cropped(width: 1400 height: 300 version: "wide") {
          url
        }
      }
    } }`)
  )
  state.set('auction', auction)
  ctx.render({ body: Index })
}
