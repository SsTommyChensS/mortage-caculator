import * as React from "react"

const ServiceItem = ({ image, title, description }) => {
    return (
        <div className="servcies-list__item w-full md:w-3/4 lg:w-2/3 flex flex-col items-center py-8 bg-white m-auto">
            <img src={image} className="w-14 md:w-14 lg:w-20 h-14 md:h-14 lg:h-20" alt="vector_1_icon"/>
            <h1 className="services-list__item_title font-bold my-4 text-xl md:text-2xl lg:text-3xl">{title}</h1>
            <span className="services-list__item_description text-[#5F626B] font-bold w-2/3 mt-2 text-sm md:text-base lg:text-lg text-center">{description}</span>
        </div>
    )
};

export default ServiceItem;