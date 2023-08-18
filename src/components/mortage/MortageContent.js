import * as React from "react"

const MortageContent = () => {
    return (
        <div className="mortage-section__content px-6 py-8">
            <h1 className="mortage-section__content__title font-bold text-4xl md:text-6xl lg:text-8xl leading-normal tracking-wide my-6 lg:break-words lg:leading-tight">Try our awesome Calculator</h1>
            <h4 className="mortage-section__content__description font-normal text-[#585C65] text-2xl lg:text-4xl lg:leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</h4>
            <button className="mortage-section__content__register px-4 py-3 lg:px-8 lg:py-6 w-2/5 lg:w-2/5 text-white font-bold text-xl bg-[#FF8049] hover:bg-red-400 text-center mt-4 rounded-lg">Register</button>
        </div>
    )
}

export default MortageContent;