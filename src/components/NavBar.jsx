import React, { useState } from "react";

export const NavBar = () => {

    let links = [
        {name: "HOME", link: "/", target: ""},
        {name: "GITHUB", link: "https://github.com/francopachec0", target: "_blank"},
        {name: "LINKEDIN", link: "https://www.linkedin.com/in/francopachec0/", target: "_blank"},
        {name: "PORTFOLIO", link: "https://portfolio-pacheco.vercel.app/", target: "_blank"},
    ];

    const [open, setOpen] = useState(false);

    return (
        <nav className="shadow-md w-full fixed md:absolute top-0 left-0 z-50">
            <div className="md:flex items-center justify-between bg-white py-2 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center text-black transform md:hover:scale-110 duration-200">
                    <a href="/" className="flex items-center">
                        <span className="text-3xl text-black mr-2 pt-2">
                            <ion-icon name="gift-outline"></ion-icon>
                        </span>
                    FP SHOP
                    </a>
                </div>
                <div className="flex items-center absolute right-20 top-4 cursor-pointer duration-300 md:hidden">
                        <button>
                            <ion-icon size='large' name="cart-outline"></ion-icon>
                        </button>
                </div>
                <div>
                    <div onClick={() => setOpen(!open)} className="text-3xl absolute right-3 top-4 cursor-pointer md:hidden">
                        <div className="flex items-center cursor-pointer md:hidden px-2">
                            <ion-icon name={open ? "close" : "menu"}></ion-icon>
                        </div>
                    </div>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 ${open ? "top-17" : "top-[-490px]"}`}>
                    {
                        links?.map((l, i) => (
                            <li key={i} className="md:ml-8 text-md font-semibold md:my-0 my-7">
                                <a href={l.link} target={l.target} className="text-black hover:text-[#adb5bd] duration-300">{l.name}</a>
                            </li>
                        ))
                    }
                    <div className="flex items-center xs:max-md:hidden cursor-pointer transform md:hover:scale-110 duration-300 md:hover:text-[#adb5bd] md:my-0 md:ml-8">
                        <a href="/cart">
                            <button className="flex items-center">
                                <ion-icon size='large' name="cart-outline"></ion-icon>
                                <span className="text-bold text-sm pb-6">0</span>
                            </button>
                        </a>
                    </div>
                </ul>
            </div>
        </nav>
    );
};
