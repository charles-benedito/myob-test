const pad = n => n.toString().length === 1 ? `0${n}` : n;

export const payPeriod = (payMonth, payYear) => `01/${pad(payMonth)}/${payYear} to 31/${pad(payMonth)}/${payYear}`;

export const grossIncome = annualSalary => Math.round(annualSalary / 12); 

export const incomeTax = annualSalary => {
    if(annualSalary > 0 && annualSalary < 18200.00)
        return 0;

    if(annualSalary > 18201.00 && annualSalary < 37000.00) 
        return Math.round( ((annualSalary - 18200.00) * 0.19) / 12 );

    if(annualSalary > 37001.00 && annualSalary < 87000.00)
        return Math.round( (3572.00 + (annualSalary - 37000.00) * 0.325) / 12 );
    
    if(annualSalary > 87001.00 && annualSalary < 180000.00)
        return Math.round( (19822.00 + (annualSalary - 87000.00) * 0.37) / 12 );   
    
    if(annualSalary > 180001.00)
        return Math.round( (54232.00 + (annualSalary - 180000.00) * 0.45) / 12 ); 
}

export const netIncome = (grossIncome, incomeTax) =>  Math.round(grossIncome - incomeTax);

export const superValue = (grossIncome, superRate) =>  Math.round(grossIncome * (superRate / 100));