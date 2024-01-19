import AuthModel from '../models/UserModelMongoose.js';

const getCurrent = async (req, res) => {
  const result = await AuthModel.find({}, 'name avatar');
  // в методі find отримуємо тільки потрібні поля "name avatar"
  return res.json(result);
};
const addUser = async (req, res) => {
  const result = await AuthModel.create(req.body);
  return res.json(result);
};

const getUserById = async (req, res) => {
  const { id } = req.body;
  const result = await AuthModel.findById(id);
  return result;
};

export default { getCurrent, addUser, getUserById };
