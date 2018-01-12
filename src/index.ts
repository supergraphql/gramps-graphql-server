import { GraphQLServer } from 'graphql-yoga'
import { prepare } from '@gramps/gramps'
import XKCD from './data-source-xkcd'
import Numbers from './data-source-numbers'
import { Binding } from './generated/gramps'
import { Context } from './utils'

const resolvers = {
  Query: {
    async getComicAndTrivia(parent, args, ctx: Context, info) {
      const comic = await ctx.binding.query.getLatestComic({}, ctx)
      const { day, month } = comic
      const trivia = await ctx.binding.query.date({ date: `${month}/${day}`}, ctx)
      return { comic, trivia }
    },
  }
}

const gramps = prepare({ dataSources: [XKCD, Numbers] })

const server = new GraphQLServer({
  typeDefs: './src/generated/app.graphql',
  resolvers,
  context: req => ({
    ...req,
    ...gramps.context(req),
    binding: new Binding({ schema: gramps.schema }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))
