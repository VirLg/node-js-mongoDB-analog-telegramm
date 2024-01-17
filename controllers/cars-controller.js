import CarModel from '../models/CarModelMongoose.js';

const getAllCars = async (req, res) => {
  const result = await CarModel.find();
  return res.json(result);
};
const addCar = async (req, res) => {
  const result = await CarModel.create(req.body);
  return res.json(result);
};
const deleteById = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const result = await CarModel.findByIdAndDelete(contactId);
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
    const result = await CarModel.findByIdAndUpdate(contactId, req.body, {
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

export default { getAllCars, addCar, deleteById, updateFavoriteById };
