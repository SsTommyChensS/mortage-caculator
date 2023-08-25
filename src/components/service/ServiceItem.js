import * as React from "react"

const ServiceItem = ({ icon, title, description }) => {
    return (
        <div className="servcies-list__item w-full md:w-3/4 lg:w-2/3 flex flex-col items-center py-8 bg-white m-auto">
            <div className="w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] bg-[#FF8049] rounded-full flex justify-center items-center">
                <img src={icon} className="w-[1.6rem] h-[1.6rem] lg:w-[2rem] lg:h-[2rem]" alt="service icon"/>
            </div>
            <h1 className="services-list__item_title font-bold my-4 text-xl md:text-2xl lg:text-3xl">{title}</h1>
            <span className="services-list__item_description text-[#5F626B] font-bold w-2/3 mt-2 text-sm md:text-base lg:text-lg text-center">{description}</span>
        </div>
    )
};

export default ServiceItem;