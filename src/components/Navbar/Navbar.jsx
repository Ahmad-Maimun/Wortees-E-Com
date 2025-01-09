import { useState } from 'react';
import logo from '../../../public/images/logo.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b border-[#BFBFBF] border-dashed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="w-[200px] h-[35px]" src={logo} alt="" />
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleSidebar}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isSidebarOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navbar Links (Desktop) */}
          <div className="hidden md:flex space-x-8">
            <ul className="gap-12 flex items-center">
              <li>
                <a className="text-[#191A26]" href="#">
                  Manifesto
                </a>
              </li>
              <li>
                <a className="text-[#191A26]" href="#">
                  Collezione
                </a>
              </li>
              <li>
                <a className="text-[#191A26]" href="#">
                  Contatti
                </a>
              </li>
            </ul>
          </div>
          {/* Select Language */}
          <div className="relative text-left flex items-center">
            {/* Language Button */}
            <button onClick={toggleDropdown} className="flex items-center mr-5">
              <img
                src="https://flagcdn.com/w20/us.png"
                alt="USA Flag"
                className="w-5 h-4 mr-2 rounded-lg"
              />
              EN
              <KeyboardArrowDownIcon />
            </button>

            {/* Dropdown */}
            {isOpen && (
              <div className="origin-top-right mr-24 absolute right-0 mt-[180px] w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {/* English */}
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <img
                      src="https://flagcdn.com/w20/us.png"
                      alt="USA Flag"
                      className="w-5 h-4 mr-3"
                    />
                    <span>English</span>
                  </a>
                  {/* Spanish */}
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <img
                      src="https://flagcdn.com/w20/es.png"
                      alt="Spain Flag"
                      className="w-5 h-4 mr-3"
                    />
                    <span>Spanish</span>
                  </a>
                  {/* French */}
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <img
                      src="https://flagcdn.com/w20/fr.png"
                      alt="France Flag"
                      className="w-5 h-4 mr-3"
                    />
                    <span>French</span>
                  </a>
                </div>
              </div>
            )}
            <div className="cursor-pointer w-11 h-11 bg-[#F5F5F5] rounded-[50%] border border-[#E6E6E6] flex justify-center items-center">
              <FavoriteBorderIcon />
            </div>
            <span className="w-[2px] h-5 bg-[#464646] mx-4"></span>
            <div className="cursor-pointer w-11 h-11 bg-[#F5F5F5] rounded-[50%] border border-[#E6E6E6] flex justify-center items-center">
              <LocalMallOutlinedIcon />
            </div>
            <span className="ml-2 text-sm font-semibold leading-4">
              CART (1)
            </span>
          </div>
        </div>
      </div>

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          <button
            onClick={toggleSidebar}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="px-4">
          <ul>
            <li>
              <a
                href="#"
                className="block px-3 py-2 rounded-md hover:bg-gray-700"
              >
                Manifesto
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 rounded-md hover:bg-gray-700"
              >
                Collezione
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 rounded-md hover:bg-gray-700"
              >
                Contatti
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay (When Sidebar is Open) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
