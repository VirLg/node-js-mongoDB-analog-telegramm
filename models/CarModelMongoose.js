import { Schema, model } from 'mongoose';
import Joi from 'joi';

export const addCarJoiSchema = Joi.object({
  year: Joi.number().required(),
  make: Joi.string().required(),
  type: Joi.string().required(),
  model: Joi.string().required(),
  img: Joi.string().required(),
  description: Joi.string().required(),
  fuelConsumption: Joi.string().required(),
  engineSize: Joi.string().required(),
  accessories: Joi.array().required(),
  functionalities: Joi.array().required(),
  rentalPrice: Joi.string().required(),
  rentalCompany: Joi.string().required(),
  address: Joi.string().required(),
  rentalConditions: Joi.string().required(),
  minimumAge: Joi.string().required(),
  mileage: Joi.number().required(),
  
});

const carSchema = new Schema(
  {
    year: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    type: { type: String, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true },
    fuelConsumption: { type: String, required: true },
    engineSize: { type: String, required: true },
    accessories: { type: String, required: true },
    functionalities: { type: String, required: true },
    rentalPrice: { type: String, required: true },
    rentalCompany: { type: String, required: true },
    address: { type: String, required: true },
    rentalConditions: { type: String, required: true },
    minimumAge: { type: String, required: true },
    mileage: { type: String, required: true },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);
// post save hook
carSchema.post('save', (error, data, next) => {
  error.status = 400;
  next();
});
const CarModel = model('car', carSchema);
// car - назва кластеру в однині!

export default CarModel;
