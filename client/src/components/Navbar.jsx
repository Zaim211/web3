import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

import { useState } from "react";
import logo from "../../images/logo.png";

const NavbarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
    <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <li className="hover:bg-[#2546bd] bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer">
          login
        </li>
      </ul>
      <div className="flex relative">
        {!showMenu && (
          <HiMenuAlt4
            onClick={() => setShowMenu(true)}
            className="text-white md:hidden cursor-pointer"
            fontSize={28}
          />
        )}
        {showMenu && (
          <AiOutlineClose
            onClick={() => setShowMenu(false)}
            className="text-white md:hidden cursor-pointer"
            fontSize={28}
          />
        )}
        {showMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setShowMenu(false)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => (
                <NavbarItem
                  key={item + index}
                  title={item}
                  classprops="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
