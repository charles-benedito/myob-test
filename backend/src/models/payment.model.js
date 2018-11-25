/* eslint-disable import/no-mutable-exports */

import mongoose, { Schema } from 'mongoose';
import Employee from '../models/employee.model';
import * as payslip from '../services/payslip';

const ModelSchema = new Schema(
  {
    employee: { type: Schema.Types.ObjectId, ref: 'Employee' },
    annualSalary: { type: Number },  
    superRate: { type: Number }, 
    payPeriod: { type: String }, 
    payMonth: { type: Number }, 
    payYear: { type: Number }, 
    grossIncome: { type: Number }, 
    incomeTax: { type: Number }, 
    netIncome: { type: Number }, 
    super: { type: Number }
  },
  { timestamps: true },
);

ModelSchema.pre('save', async function(next) {
  const employee = await Employee.findOne({ _id: this.employee });

  this.payPeriod = payslip.payPeriod(this.payMonth, this.payYear);
  this.grossIncome = payslip.grossIncome(employee.annualSalary);
  this.incomeTax = payslip.incomeTax(employee.annualSalary);
  this.netIncome = payslip.netIncome(this.grossIncome, this.incomeTax);
  this.super = payslip.superValue(this.grossIncome, employee.superRate);

  next();
});

const Model = mongoose.model('Payment', ModelSchema);

export default Model;