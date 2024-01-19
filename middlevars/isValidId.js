import { isValidObjectId } from 'mongoose';
import HttpError from './HttpError';

const isValidId = (req, res, next) => {
  const { id } = req.res;
  if (isValidObjectId(id)) {
    return next(HttpError(404, `{id} not valid format`));
  }
  next();
};
export default isValidId;
