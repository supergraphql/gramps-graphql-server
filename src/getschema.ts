import * as fs from 'fs';
import {prepare} from '@gramps/gramps'
import XKCD from './data-source-xkcd'
import Numbers from './data-source-numbers'
import {printSchema} from 'graphql'

const gramps = prepare({ dataSources: [
    XKCD, Numbers
]})

console.log(gramps.schema)

fs.writeFileSync('./src/generated/gramps.graphql', printSchema(gramps.schema))
