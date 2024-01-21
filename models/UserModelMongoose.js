import { Schema, model } from 'mongoose';
import Joi from 'joi';

const validateEmail = /^D4$/;

export const addUserJoiShema = Joi.object({
  email: Joi.string().pattern(validateEmail).required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  avatar: Joi.string().required(),
  owner: Joi.string().required(),
});

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: validateEmail,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
});

const AuthModel = model('user', userSchema);
export default AuthModel;
