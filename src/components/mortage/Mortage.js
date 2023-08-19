import * as React from "react"

import MortageCaculator from "./MortageCaculator";
import MortageContent from "./MortageContent";


//Mortage component
const Mortage = () => {
    return (
        <div className="mortage-section h-full w-full md:w-full lg:w-full grid grid-cols-1 lg:grid-cols-2 relative bg-[#FBFDFF]">
            <MortageCaculator/>
            <MortageContent/>
        </div>
    )
};


export default Mortage;