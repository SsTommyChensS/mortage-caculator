import * as React from "react"

import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
    return (
        <div className="footer grid grid-cols-1 lg:grid-cols-2 md:w-full lg:w-full h-full lg:h-screen pt-[2rem] lg:pt-[6rem] bg-[#FBFDFF]">
            <div className="footer__left pl-[2rem] lg:pl-[7rem] pr-[1rem] lg:pr-[5rem] bg-[#383F50] lg:bg-[#FBFDFF]">
                <span className="footer__left__brand flex items-center my-[2rem]">
                    <div className="w-12 h-12 bg-[#FF8049] lg:bg-[#16222D] rounded-full mr-4 flex justify-center items-center">
                        <span className="text-white text-base font-bold italic">K</span>
                    </div>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white lg:text-[#40434A]">Kinka Finance</span>
                </span>
                <h3 className="footer__left__title font-normal text-sm lg:text-xl text-white lg:text-[#585C65] w-3/4 leading-loose my-[1rem] lg:my-[3rem]">
                    2021 Award winning Finance Advisor and Lorem ipsum dolor sit amet
                </h3>
                <div className="footer__left__social w-2/4 md:w-1/4 lg:w-2/4 grid grid-cols-3 mb-[2rem]">
                    <span className="footer__left__brand flex items-center">
                        <div className="w-8 lg:w-12 h-8 lg:h-12 bg-[#FF8049] hover:bg-red-400 rounded-full flex justify-center items-center">
                            <StaticImage src="../../images/facebook_icon.svg" className="w-4 lg:w-6" alt="Facebook_icon"/>
                        </div>
                    </span>
                    <span className="footer__left__brand flex items-center">
                        <div className="w-8 lg:w-12 h-8 lg:h-12 bg-[#FF8049] hover:bg-red-400 rounded-full flex justify-center items-center">
                            <StaticImage src="../../images/twitter_icon.svg" className="w-4 lg:w-6" alt="Twitter_icon"/>
                        </div>
                    </span>
                    <span className="footer__left__brand flex items-center">
                        <div className="w-8 lg:w-12 h-8 lg:h-12 bg-[#FF8049] hover:bg-red-400 rounded-full flex justify-center items-center">
                            <StaticImage src="../../images/instagram_icon.svg" className="w-4 lg:w-6" alt="Instagram_icon"/>
                        </div>
                    </span>
                </div>
            </div>
            <div className="footer__right pl-[1.4rem] grid grid-cols-3 lg:grid-cols-3 h-full lg:h-2/3 bg-gray-100 lg:bg-[#FBFDFF] py-[1rem]">
                <div className="footer__right__location grid grids-col-1">
                    <h1 className="h-2/3 text-[#40434A] font-bold text-lg lg:text-xl">Location</h1>
                    <h3 className="h-2/3 text-[#70737C] font-normal text-base lg:text-lg">America</h3>
                    <h3 className="h-2/3 text-[#70737C] font-normal text-base lg:text-lg">Asia</h3>
                    <h3 className="h-2/3 text-[#70737C] font-normal text-base lg:text-lg">Europe</h3>
                    <h3 className="h-2/3 text-[#70737C] font-normal text-base lg:text-lg">Africa</h3>
                </div>
                <div className="footer__right__contact grid grids-col-1">
                    <h1 className="h-2/3 text-[#40434A] font-bold text-lg lg:text-xl">Contact</h1>
                    <h3 className="h-2/3 text-[#70737C] font-normal text-base lg:text-lg">About Me</h3>
                    <h3 className="h-2/3 text-[#70737C] font-normal text-base lg:text-lg">Teams</h3>
                    <h3 className="h-2/3 text-[#70737C] font-normal text-base lg:text-lg">Profile</h3>
                    <h3 className="h-2/3 text-[#70737C] font-normal text-base lg:text-lg">FAG</h3>
                </div>
                <div className="footer__right__legals grid grids-col-1">
                    <h1 className="h-2/3 text-[#40434A] font-bold text-lg lg:text-xl">Legals</h1>
                    <h3 className="h-2/3 text-[#70737C] font-normal text-base lg:text-lg">Privacy</h3>
                    <h3 className="h-2/3 text-[#70737C] font-normal text-base lg:text-lg">Disclaimer</h3>
                    <h3 className="h-2/3 text-[#70737C] font-normal text-base lg:text-lg">Terms</h3>
                    <h3 className="h-2/3 text-[#70737C] font-normal text-base lg:text-lg">Company</h3>
                </div>
            </div>
        </div>
    )
};

export default Footer;