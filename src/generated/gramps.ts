import { Binding as BaseBinding, BindingOptions } from 'graphql-binding'
import { GraphQLResolveInfo } from 'graphql'

export interface Numbers_Trivia {
  text: String
  found: Boolean
  number: Int
  type: String
  date: String
}

/*
 * Details about an xkcd comic.

 */
export interface XKCD_Comic {
  num: ID_Output
  title: String
  safe_title: String
  img: String
  alt: String
  transcript?: String
  year?: String
  month?: String
  day?: String
  link?: String
  news?: String
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export interface Schema {
  query: Query
}

export type Query = {
  grampsVersion: (args: {}, context, info?: GraphQLResolveInfo | string) => Promise<String>
  getLatestComic: (args: {}, context, info?: GraphQLResolveInfo | string) => Promise<XKCD_Comic | null>
  getComicById: (args: { id: ID_Output }, context, info?: GraphQLResolveInfo | string) => Promise<XKCD_Comic | null>
  trivia: (args: { number: Int }, context, info?: GraphQLResolveInfo | string) => Promise<Numbers_Trivia>
  date: (args: { date: String }, context, info?: GraphQLResolveInfo | string) => Promise<Numbers_Trivia>
  math: (args: { number: Int }, context, info?: GraphQLResolveInfo | string) => Promise<Numbers_Trivia>
  year: (args: { number: Int }, context, info?: GraphQLResolveInfo | string) => Promise<Numbers_Trivia>
}

export class Binding extends BaseBinding {
  
  constructor({ schema, fragmentReplacements }: BindingOptions) {
    super({ schema, fragmentReplacements });
  }
  
  query: Query = {
    grampsVersion: (args, context, info): Promise<String> => super.delegate('query', 'grampsVersion', args, context, info),
    getLatestComic: (args, context, info): Promise<XKCD_Comic | null> => super.delegate('query', 'getLatestComic', args, context, info),
    getComicById: (args, context, info): Promise<XKCD_Comic | null> => super.delegate('query', 'getComicById', args, context, info),
    trivia: (args, context, info): Promise<Numbers_Trivia> => super.delegate('query', 'trivia', args, context, info),
    date: (args, context, info): Promise<Numbers_Trivia> => super.delegate('query', 'date', args, context, info),
    math: (args, context, info): Promise<Numbers_Trivia> => super.delegate('query', 'math', args, context, info),
    year: (args, context, info): Promise<Numbers_Trivia> => super.delegate('query', 'year', args, context, info)
  }
}