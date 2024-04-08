export class ApplicationError extends Error {
  static type = {
    INTERNAL: 'INTERNAL',
    NETWORK: 'NETWORK',
    UNKNOWN: 'UNKNOWN',
  };

  constructor(options, overrides) {
    super();
    Object.assign(options, overrides);

    if (!ApplicationError.type.hasOwnProperty(options.type)) {
      throw new Error(
        `Application Error: ${options.type} is not a valid type.`,
      );
    }

    if (!options.message) {
      throw new Error('Application Error: error message required.');
    }

    if (!options.code) {
      throw new Error('Application Error: error code required.');
    }

    this.name = 'Application Error';
    this.type = options.type;
    this.code = options.code;
    this.message = options.message;
    this.errors = options.errors;
    this.meta = options.meta;
    this.statusCode = options.statusCode;
  }
}
