/* eslint-disable import/no-mutable-exports */

import mongoose, { Schema } from 'mongoose';

const ModelSchema = new Schema(
  {
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    annualSalary: { type: Number, required: [true, 'Annual salary is required']},
    superRate: { type: Number, default: 0 },
    paymentStartDate: { type: String, trim: true, required: [true, 'Payment start date is required']}
  },
  { timestamps: true },
);

const Model = mongoose.model('Employee', ModelSchema);

export default Model;