import { ApplicationError } from '../error';
import { Messages } from '../../../error/messages';

export function formatError(error, overrides = {}) {
  const stackTrace = JSON.stringify(error, ['stack'], 4) || {};
  const newError = JSON.parse(JSON.stringify(error));

  newError.statusCode = undefined;
  delete newError.meta;

  if (!newError.code) {
    newError.code = 500;
    newError.message = Messages.ServerError;
  }

  return {
    error: {
      ...newError,
    },
    success: false,
    ...overrides,
  };
}

export function formatResponse(result, override = {}) {
  return {
    data: result,
    success: true,
    ...override,
  };
}

export function sendResponse(res, payload, statusCode = 200, context = {}) {
  if (payload instanceof ApplicationError) {
    const code = payload.statusCode || 500;
    return res.status(code).json(formatError(payload));
  }

  if (payload instanceof Error) {
    return res.status(statusCode).json(formatError(payload));
  }

  return res.status(statusCode).json(formatResponse(payload));
}
