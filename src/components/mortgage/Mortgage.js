import * as React from "react"

import MortgageCaculator from "./MortgageCaculator";
import MortgageContent from "./MortgageContent";


//Mortage component
const Mortage = () => {
    return (
        <div id="caculator-section" className="mortage-section h-full w-full md:w-full lg:w-full grid grid-cols-1 lg:grid-cols-2 relative bg-[#FBFDFF]">
            <MortgageCaculator/>
            <MortgageContent/>
        </div>
    )
};


export default Mortage;