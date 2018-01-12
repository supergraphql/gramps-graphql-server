export default {
    Query: {
      // TODO: Update query resolver name and args to match the schema
      // TODO: Update the context method to load the correct data
      trivia: (_, { number }, context) => context.get(number, 'trivia'),
      date: (_, { date }, context) => context.get(date, 'date'),
      math: (_, { number }, context) => context.get(number, 'math'),
      year: (_, { number }, context) => context.get(number, 'year'),
    }
  };