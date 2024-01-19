import AuthModel from '../models/UserModelMongoose.js';

const getCurrent = async (req, res) => {
  const result = await AuthModel.find();
  return res.json(result);
};
const addUser = async (req, res) => {
  const result = await AuthModel.find();
  return res.json(result);
};

export default { getCurrent, addUser };
