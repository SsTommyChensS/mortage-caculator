import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import { graphql, useStaticQuery } from "gatsby";

//Hero component
const Hero = () => {
  //Get hero content data
  const hero_info = useStaticQuery(graphql`
    query HeroContentQuery {
      contentfulHero(title: {eq: "Financial Advisor For Next Level Happy Life!"}) {
        id
        title
        description {
          description
        }
        image {
          file {
            url
          }
        }
        button
      }
    }
  `)
    return (
        <div className="hero-section h-full md:h-fit lg:h-full md:w-screen bg-[#383F50] px-8 py-4 relative">
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
            <div className="hero__main__vector hidden md:hidden lg:block">
                <StaticImage src="../../images/vector_1_icon.svg" height={500} className="absolute lg:right-0 lg:top-[8rem] xl:top-[2rem]"alt="vector_1_icon"/>
                <StaticImage src="../../images/vector_2_icon.svg" height={400} className="absolute lg:right-0 lg:bottom-[2rem] xl:bottom-0"alt="vector_2_icon"/>
            </div>
        </div>
    )
};


export default Hero;