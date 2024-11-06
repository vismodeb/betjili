import { useState } from "react";

const MenuBar = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tab List */}
      <div className="flex p-2 bg-yellow-400 overflow-x-auto">
        <div
          onClick={() => setActiveTab(0)}
          className={`px-5 py-1 md:px-6 md:py-1.5 text-xs font-semibold cursor-pointer ${
            activeTab === 0
              ? "bg-black text-yellow-400 rounded-md"
              : "bg-yellow-400 text-black"
          }`}
        >
          <div className="tab-content">
            <img
              className={`w-6 m-auto tab-image ${
                activeTab === 0 ? "filter-yellow" : ""
              }`}
              src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/theme-icon/active/icon-sport.svg?v=1730260800861"
              alt="Sport Icon"
            />
            স্পোর্ট
          </div>
        </div>
        <div
          onClick={() => setActiveTab(1)}
          className={`px-5 py-1 md:px-6 md:py-1.5 text-xs font-semibold cursor-pointer ${
            activeTab === 1
              ? "bg-black text-yellow-400 rounded-md"
              : "bg-yellow-400 text-black"
          }`}
        >
          <div className="tab-content">
            <img
              className={`w-6 m-auto tab-image ${
                activeTab === 1 ? "filter-yellow" : ""
              }`}
              src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/theme-icon/active/icon-sport.svg?v=1730260800861"
              alt="Sport Icon"
            />
            স্পোর্ট
          </div>
        </div>
      </div>

      {/* Tab Panels */}
      {activeTab === 0 && (
        <div className="grid grid-cols-3 md:flex justify-between items-center gap-2 py-2">
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/icon-set/sports-icon/icon-exchange.svg?v=1730260800861"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">CRICKET</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/icon-set/sports-icon/icon-exchange.svg?v=1730260800861"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">CRICKET</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Repeat other cards as needed */}
        </div>
      )}

      {activeTab === 1 && (
        <div className="grid grid-cols-3 md:flex justify-between items-center gap-2 py-2">
          {/* Single Card */}
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/icon-set/sports-icon/icon-exchange.svg?v=1730260800861"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">CRICKET</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/icon-set/sports-icon/icon-exchange.svg?v=1730260800861"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">CRICKET</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          <div className="relative w-full">
            <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
              <img
                className="w-6 md:w-7 m-auto"
                src="https://img.m156b.com/mb/h5/assets/images/icon-set/sports-icon/icon-exchange.svg?v=1730260800861"
                alt="Cricket Icon"
              />
              <p className="md:mt-1">CRICKET</p>
            </div>
            <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
              <img
                className="rounded-tr-lg"
                src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                alt="Triangle Icon"
              />
            </div>
          </div>
          {/* Repeat other cards as needed */}
        </div>
      )}
    </div>
  );
};

export default MenuBar;
