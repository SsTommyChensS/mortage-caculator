import * as React from "react"
import { useState } from "react";

import { formatNumber } from "../../utils/helper";

const MortageCaculator = () => {
    const [purchasePrice, setPurchasePrice] = useState(550000);
    const [downPayment, setDownPayment] = useState(200000);
    const [repaymentTime, setRepaymentTime] = useState(25);
    const [interestRate, setInterestRate] = useState(3.3);

    //loan amount
    const loan_amount = purchasePrice - downPayment;

    const r = (interestRate / 100) / 12;
    const p = loan_amount;
    const n = repaymentTime * 12;
    const estimate_payment = Math.round(p * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)));

    const handleChangePC = event => {
        setPurchasePrice(event.target.value);
    };

    const handleChangeDP = event => {
        setDownPayment(event.target.value);
    };

    const handleChangeRT = event => {
        setRepaymentTime(event.target.value);
    };

    const handleChangeIR = event => {
        setInterestRate(event.target.value);
    };

    return (
        <div className="mortage-section__caculator pl-[2rem] lg:pl-[8rem] pr-[2rem] py-[2rem] lg:py-[4rem] bg-[#383F50]">
            <h1 className="caculator__title text-white font-bold text-3xl lg:text-6xl">Mortgage Caculator</h1>
            <h3 className="caculator__description text-white text-sm lg:text-xl my-[1rem] lg:my-[3rem] leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </h3>
            <div className="caculator__main grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
                <div className="caculator__main__pc">
                    <h2 className="pc__title text-white font-bold text-lg lg:text-xl">Purchase Price: ${formatNumber(purchasePrice)}</h2>
                    <input onChange={handleChangePC} type="range" id="vol1" name="vol1" min="100000" max="1000000" step="5000" className="accent-[#FF8049B0] mt-3 w-3/4 lg:w-2/3" defaultValue={purchasePrice}/>
                </div>
                <div className="caculator__main__dp">
                    <h2 className="dp__title text-white font-bold text-lg lg:text-xl">Down Payment: ${formatNumber(downPayment)}</h2>
                    <input onChange={handleChangeDP} type="range" id="vol2" name="vol2" min="10000" max="1000000" step="5000" className="accent-[#FF8049B0] mt-3 w-3/4 lg:w-2/3" defaultValue={downPayment}/>
                </div>
                <div className="caculator__main__rt">
                    <h2 className="rt__title text-white font-bold text-lg lg:text-xl">Repayment time: {repaymentTime} years</h2>
                    <input onChange={handleChangeRT} type="range" id="vol3" name="vo3" min="1" max="50" step="1" className="accent-[#FF8049B0] mt-3 w-3/4 lg:w-2/3" defaultValue={repaymentTime}/>
                </div>
                <div className="caculator__main__pc">
                    <h2 className="pc__title text-white font-bold text-lg lg:text-xl">Interest Rate: {interestRate}%</h2>
                    <input onChange={handleChangeIR} type="range" id="vol4" name="vol4" min="1" max="10" step="0.1" className="accent-[#FF8049B0] mt-3 w-3/4 lg:w-2/3" defaultValue={interestRate}/>
                </div>
            </div>
            <div className="caculator__result mt-[2rem] lg:mt-[4rem]">
                <h2 className="caculator__result__lm text-white font-bold text-lg lg:text-2xl">
                    Loan amount: <span className="text-xl lg:text-3xl text-[#FF8049]">${formatNumber(loan_amount)}</span>
                </h2>
                <h2 className="caculator__result__erpm text-white font-bold text-lg lg:text-2xl mt-[1rem] lg:mt-[2rem]">
                    Estimated repayment per month: <span className="text-xl lg:text-3xl text-[#FF8049]">${formatNumber(estimate_payment)}</span>
                </h2>
            </div>
        </div>
    )
};

export default MortageCaculator;