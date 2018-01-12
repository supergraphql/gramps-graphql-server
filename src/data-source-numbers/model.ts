import { GrampsError } from '@gramps/errors';
import { GraphQLModel } from '@gramps/rest-helpers';

export default class NumbersModel extends GraphQLModel {
  constructor({connector}) {
    super({connector});
    this.get = this.get
  }
  
  async get(number, type) {
    console.log(await this.connector.get(`/${number}/${type}`))
    return this.connector.get(`/${number}/${type}`).catch(res =>
      this.throwError(res.error, {
        description: 'Could not get the info',
      }),
    );
  }  

  /**
   * Throws a custom GrAMPS error.
   * @param  {Object}  error            the API error
   * @param  {Object?} customErrorData  additional error data to display
   * @return {void}
   */
  throwError(
    {
      statusCode = 500,
      message = 'Something went wrong.',
      targetEndpoint = null,
    } = {},
    customErrorData = {},
  ) {
    const defaults = {
      statusCode,
      targetEndpoint,
      errorCode: `${this.constructor.name}_Error`,
      description: message,
      graphqlModel: this.constructor.name,
      docsLink: 'https://ibm.biz/gramps-data-source-tutorial',
    };

    throw GrampsError(Object.assign({defaults}, {customErrorData}));
  }
}