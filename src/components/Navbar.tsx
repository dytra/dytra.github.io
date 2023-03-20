import React from "react";

interface Menu {
    classes?: string
    label: string
}
interface NavbarInterface {
    menus: Menu[]
}
const Navbar: React.FC<NavbarInterface> = ({ menus }) => {
    return (
        <nav className="flex pt-3 items-center">
            <div className="logo">
                <span className='font-semibold'>dytrafolio</span>
            </div>
            <div className="menu-container hidden md:block ml-auto">
                <ul className="flex gap-5">
                    {menus.map((menu, index) => {
                        return (
                            <li key={index} className="menu-item font-medium"><a href="" className={menu.classes}>{menu.label}</a></li>

                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;