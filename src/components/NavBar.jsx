import React, { useState } from "react";

const NavBar = () => {
  const [selectedMenu, setSelectedMenu] = useState('home'); 

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu); 
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
        </div>
        <a className="btn btn-ghost text-xl flex items-center" href="/">
          <img
            src="Logo.png"
            alt="Logo"
            className="h-16 lg:h-12 mx-auto"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              href="/"
              onClick={() => handleMenuClick('home')}
              className={`${selectedMenu === 'home' ? 'font-bold border-b-2 border-pink-500' : ''
                }`}
            >
              หน้าหลัก
            </a>
          </li>
          <li>
            <a
              onClick={() => handleMenuClick('vaccine')}
              className={`${selectedMenu === 'vaccine' ? 'font-bold border-b-2 border-pink-500' : ''
                }`}
            >
              วัคซีน
            </a>
          </li>
          <li>
            <a
              onClick={() => handleMenuClick('development')}
              className={`${selectedMenu === 'development' ? 'font-bold border-b-2 border-pink-500' : ''
                }`}
            >
              พัฒนาการ
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
