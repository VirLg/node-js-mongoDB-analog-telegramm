import { Schema, model } from 'mongoose';
import Joi from 'joi';
import { handleSaveError, runVAlidatorsAtUpdate } from './hooks/hooks.js';

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
chatSchema.post('save', handleSaveError);
// pre hook
chatSchema.pre('findOneAndUpdate', runVAlidatorsAtUpdate);
chatSchema.post('findOneAndUpdate', handleSaveError);
const ChatModel = model('chat', chatSchema);
// chat - назва кластеру в однині!

export default ChatModel;
