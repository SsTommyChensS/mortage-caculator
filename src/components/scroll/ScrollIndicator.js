import * as React from "react";
import { useRef } from "react";

const ScrollIndicator = () => {
    const Scroll = useRef(null);
    
    const changeProgress = () => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        Scroll.current.style.width = scrolled + "%";
    };


    if(typeof window !== 'undefined') {
        window.addEventListener('scroll', changeProgress);
    }

    return (
        <div ref={Scroll} className="progress-indicator-section fixed top-0 w-0 h-[6px] lg:h-[10px] bg-[#FF8049]">
        </div>
    )
};

export default ScrollIndicator;