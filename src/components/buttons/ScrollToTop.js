import * as React from "react";
import UpArrowIcon from "../../images/up_arrow_icon.svg";

import { useState } from "react";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        scrolled > 1000 ? setVisible(true) : setVisible(false);
    };

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
    };

    if(typeof window !== 'undefined') {
        window.addEventListener('scroll', toggleVisible);
    }

    return (
        <button onClick={scrollToTop} className={`${visible ? 'inline' : 'hidden'} p-2 lg:p-4 inline bg-[#FF8049] rounded-full fixed bottom-[2rem] lg:bottom-[4rem] right-[1rem] lg:right-[2rem] w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem]`}>
            <img src={UpArrowIcon} width={40} height={40} alt="Up arrow icon"/>
        </button>
    )
};

export default ScrollToTop;