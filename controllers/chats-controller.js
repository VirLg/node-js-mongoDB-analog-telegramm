import HttpError from '../middlevars/HttpError.js';
import ChatModel from '../models/ChatModelMongoose.js';

const getAllChats = async (req, res) => {
  const result = await ChatModel.find();
  return res.json(result);
};
const addMessage = async (req, res) => {
  console.log('req.body', req.body);
  const result = await ChatModel.create(req.body);
  return res.json(result);
};
const deleteById = async (req, res, next) => {
  const { messageId } = req.params;
  try {
    const result = await ChatModel.findByIdAndDelete(messageId);
    if (!result) {
      throw HttpError(404, 'Not found');
    }
    res.json(result);
  } catch (error) {
    console.log('result', error.status);
    next(error);
  }
};
const updateMessageById = async (req, res, next) => {
  const { messageId } = req.body;
  const result = await ChatModel.findByIdAndUpdate(messageId, req.body);
  if (!result) {
    throw HttpError(404, `Message whith {id} not found`);
  }
  return res.json(result);
};

export default { getAllChats, addMessage, deleteById, updateMessageById };
