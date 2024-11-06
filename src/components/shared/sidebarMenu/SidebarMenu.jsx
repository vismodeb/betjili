import { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowBack, IoMdFootball, IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";

const SidebarMenu = ({ open, setOpen }) => {
  // State to track submenu visibility for each menu item
  const [submenuOpen, setSubmenuOpen] = useState({
    home: false,
    sports: false,
    casino: false,
    slot: false,
    table: false,
  });

  // Toggle submenu visibility
  const toggleSubmenu = (menu) => {
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className={`${open ? "w-64" : "w-16"} hidden md:block duration-300 h-screen fixed`}>
      {/* Top collapse button */}
      <div className={`bg-zinc-800 py-3 ${!open && "py-5"}`}>
        <div className="flex gap-x-3 items-center justify-center">
          <IoIosArrowBack
            className={`m-auto text-center w-10 h-7 p-1 bg-yellow-400 hover:bg-yellow-500 rounded-full cursor-pointer ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {/* Menu items with submenus */}
      <div className="bg-[#333] overflow-y-auto pb-20 h-full scrollbar-hide">
        {/* Home Menu */}
        <div className="menu-item" onClick={() => toggleSubmenu("home")}>
          <div className={`px-4 py-3 text-yellow-300 flex gap-2 border-b border-gray-700 duration-300 ${!open && "justify-center"}`}>
            <IoMdHome size={24} />
            <p className={`text-white font-semibold ${!open && "hidden"}`}>হোম</p>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
          {submenuOpen.home && open && (
            <div className="pl-8 text-white text-sm bg-gray-700">
              <Link to="/sub-home-1" className="block py-1">Sub Home 1</Link>
              <Link to="/sub-home-2" className="block py-1">Sub Home 2</Link>
            </div>
          )}
        </div>

        {/* Sports Menu */}
        <div className="menu-item" onClick={() => toggleSubmenu("sports")}>
          <div className={`px-4 py-3 text-yellow-300 flex gap-2 border-b border-gray-700 duration-300 ${!open && "justify-center"}`}>
            <IoMdFootball size={24} />
            <p className={`text-white font-semibold ${!open && "hidden"}`}>স্পোর্ট</p>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
          {submenuOpen.sports && open && (
            <div className="pl-8 text-white text-sm bg-gray-700">
              <Link to="/sub-sport-1" className="block py-1">Sub Sport 1</Link>
              <Link to="/sub-sport-2" className="block py-1">Sub Sport 2</Link>
            </div>
          )}
        </div>

        {/* Casino Menu */}
        <div className="menu-item" onClick={() => toggleSubmenu("casino")}>
          <div className={`px-4 py-3 text-yellow-300 flex gap-2 border-b border-gray-700 duration-300 ${!open && "justify-center"}`}>
            <BiSolidPhoneCall size={24} />
            <p className={`text-white font-semibold ${!open && "hidden"}`}>ক্যাসিনো</p>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
          {submenuOpen.casino && open && (
            <div className="pl-8 text-white text-sm bg-gray-700">
              <Link to="/sub-casino-1" className="block py-1">Sub Casino 1</Link>
              <Link to="/sub-casino-2" className="block py-1">Sub Casino 2</Link>
            </div>
          )}
        </div>

        {/* Slot Menu */}
        <div className="menu-item" onClick={() => toggleSubmenu("slot")}>
          <div className={`px-4 py-3 text-yellow-300 flex gap-2 border-b border-gray-700 duration-300 ${!open && "justify-center"}`}>
            <BiSolidPhoneCall size={24} />
            <p className={`text-white font-semibold ${!open && "hidden"}`}>স্লট</p>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
          {submenuOpen.slot && open && (
            <div className="pl-8 text-white text-sm bg-gray-700">
              <Link to="/sub-slot-1" className="block py-1">Sub Slot 1</Link>
              <Link to="/sub-slot-2" className="block py-1">Sub Slot 2</Link>
            </div>
          )}
        </div>

        {/* Table Menu */}
        <div className="menu-item" onClick={() => toggleSubmenu("table")}>
          <div className={`px-4 py-3 text-yellow-300 flex gap-2 border-b border-gray-700 duration-300 ${!open && "justify-center"}`}>
            <BiSolidPhoneCall size={24} />
            <p className={`text-white font-semibold ${!open && "hidden"}`}>টেবিল</p>
            <FaAngleDown className={`text-white ${!open && "hidden"}`} />
          </div>
          {submenuOpen.table && open && (
            <div className="pl-8 text-white text-sm bg-gray-700">
              <Link to="/sub-table-1" className="block py-1">Sub Table 1</Link>
              <Link to="/sub-table-2" className="block py-1">Sub Table 2</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
