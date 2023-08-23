import * as React from "react"

import useHerotData from "../../services/useHeroData";

import Vector_1 from "../../images/vector_1_icon.svg";
import Vector_2 from "../../images/vector_2_icon.svg";

//Hero component
const Hero = () => {
  //Get hero content data
  const hero_info = useHerotData();

    return (
        <div className="hero-section h-full md:h-fit lg:h-full md:w-full bg-[#383F50] px-8 py-4 relative">
            <div className="hero__main py-2 w-full md:w-2/5 relative left-4 md:left-24">
                <h1 className="hero__main__title font-black text-3xl md:text-3xl lg:text-6xl text-white leading-normal md:leading-normal lg:leading-loose">
                    { hero_info.contentfulHero.title }
                </h1>
                <h3 className="hero__main__description text-white font-normal my-8 w-full md:w-full lg:w-3/4 text-medium md:text-medium lg:text-lg">
                    { hero_info.contentfulHero.description.description }
                </h3>
                <button className="px-5 py-2 md:px-10 md:py-4 text-white bg-[#FF8049] font-black">
                  { hero_info.contentfulHero.button }
                </button>
            </div>
            <div className="hero__main__vector hidden md:block lg:block">
                <img src={Vector_1} className="md:w-[20rem] lg:w-[30rem] xl:w-[40rem] absolute md:right-0 lg:right-0 md:top-[1rem] lg:top-[4rem] xl:top-0" alt="vector_1_icon"/>
                <img src={Vector_2} className="md:w-[18rem] lg:w-[24rem] xl:w-[30rem] absolute md:right-0 lg:right-0 md:bottom-[2rem] lg:bottom-[12rem] xl:bottom-0" alt="vector_2_icon"/>
            </div>
        </div>
    )
};


export default Hero;