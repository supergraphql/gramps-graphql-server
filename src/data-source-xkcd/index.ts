import * as fs from 'fs';
import Connector from './connector';
import Model from './model';
import resolvers from './resolvers';

const model = new Model({ connector: new Connector() })

/*
 * For more information on the GrAMPS data sources, see
 * https://ibm.biz/gramps-data-source-tutorial
 */
export default {
  namespace: 'XKCD',
  context: model,
  typeDefs: fs.readFileSync('./src/data-source-xkcd/schema.graphql', 'utf-8'),
  resolvers
};