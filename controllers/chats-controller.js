import ChatModel from '../models/ChatModelMongoose.js';

const getAllChats = async (req, res) => {
  const result = await ChatModel.find();
  return res.json(result);
};
const addCar = async (req, res) => {
  const result = await ChatModel.create(req.body);
  return res.json(result);
};
const deleteById = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const result = await ChatModel.findByIdAndDelete(contactId);
    if (!result) {
      throw HttpError(404, 'Not found');
    }
    res.json(result);
  } catch (error) {
    console.log('result', error.status);
    next(error);
  }
};
const updateFavoriteById = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const result = await ChatModel.findByIdAndUpdate(contactId, req.body, {
      favorite: req.body,
    });
    if (!result) {
      throw HttpError(404, 'Not found');
    }
    res.json(result);
  } catch (error) {
    console.log('result', error.status);
    next(error);
  }
};

export default { getAllChats, addCar, deleteById, updateFavoriteById };
