import React, { useState } from "react";
import LoginBotton from "../LoginBotton/LoginBotton";
import Logo from "../Logo/Logo";
import DefaultHeaderNavbarItems from "../../../Mock/DefaultHeaderNavbarItems";
import { Link } from "react-router";
import ShopButton from "../ShopButton/ShopButton";
function DefualtHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      <div className="container text-asd text-black primaryOrange m-auto flex justify-between font-extrabold">
        <LoginBotton className="max-lg:hidden" />
        <ShopButton />
        <button
          className="lg:hidden flex flex-col items-center my-auto mx-10"
          onClick={toggleMenu}
        >
          <span className="block w-8 h-0.5 bg-black mb-1"></span>
          <span className="block w-8 h-0.5 bg-black mb-1"></span>
          <span className="block w-8 h-0.5 bg-black"></span>
        </button>

        <div className="flex justify-around items-center  w-6/10 max-lg:hidden">
          {DefaultHeaderNavbarItems.map((item) => (
            <Link key={item.id} to={item.path}>
              {item.title}
            </Link>
          ))}
        </div>
        <Logo className="h-20 " />
        {isMenuOpen && (
          <div className="container m-auto absolute top-20 left-0 right-0 primaryOrange flex flex-col items-center z-10 lg:hidden">
            {DefaultHeaderNavbarItems.map((item) => (
              <Link
              key={item.id}
              to={item.path}
              className=" p-2 hover:bg-amber-300 transition-colors duration-200 font-extrabold"
              onClick={() => setIsMenuOpen(false)} // Close menu when an item is clicked
              >
                {item.title}
              </Link>
            ))}

            <ShopButton />
            <LoginBotton className="my-5" />

          </div>
        )}
      </div>
    </>
  );
}

export default DefualtHeader;
