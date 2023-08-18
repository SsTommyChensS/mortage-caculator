import * as React from "react"

const handleNavbarToggle = () => {
    let navbar_menu = document.getElementById("navbar-default");
    if(navbar_menu.classList.contains("hidden")) {
        navbar_menu.classList.remove("hidden")
    } else {
        navbar_menu.classList.add("hidden");
    }
}

const Navbar = () => {
    return (
        <nav className="navbar h-2/6 md:h-1/5 bg-[#383F50]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between lg:justify-between mx-auto py-6 px-4 gap-x-8 gap-y-4">
                <span className="flex items-center">
                    <div className="w-12 h-12 bg-[#FF8049] rounded-full mr-4 flex justify-center items-center">
                        <span className="text-white text-base font-bold italic">K</span>
                    </div>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Kinka Finance</span>
                </span>
                <button onClick={handleNavbarToggle} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto bg-gray-500 rounded-lg md:bg-[#383F50] mt-2" id="navbar-default">
                    <ul className="font-medium text-xl flex flex-col gap-2 lg:gap-8 p-2 lg:p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <a href="/" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hover:bg-gray-400 md:hover:bg-gray-600 md:hover:underline">Caculator</a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hover:bg-gray-400 md:hover:bg-gray-600 md:hover:underline">Services</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;