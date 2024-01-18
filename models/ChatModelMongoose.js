import { Schema, model } from 'mongoose';
import Joi from 'joi';

export const addMessageJoiSchema = Joi.object({
  message: Joi.string().required(),
});

const chatSchema = new Schema(
  {
    message: { type: String, required: true },
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'user',
    //   required: true,
    // },
  },
  { versionKey: false, timestamps: true }
);
// post save hook
chatSchema.post('save', (error, data, next) => {
  error.status = 400;
  next();
});
const ChatModel = model('chat', chatSchema);
// chat - назва кластеру в однині!

export default ChatModel;
