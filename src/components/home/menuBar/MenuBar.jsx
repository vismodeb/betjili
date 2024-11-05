import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const MenuBar = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <div className="flex p-2 bg-yellow-400 overflow-x-auto">
            <Tab className="tab rounded-md">
              <div className="px-5 py-1 md:px-6 md:py-1.5 text-xs font-semibold rounded-md cursor-pointer tab-content">
                <img
                  className="w-6 m-auto tab-image"
                  src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/theme-icon/active/icon-sport.svg?v=1730260800861"
                  alt=""
                />
                স্পোর্ট
              </div>
            </Tab>
            <Tab className="tab rounded-md">
              <div className="px-5 py-1 md:px-6 md:py-1.5 text-xs font-semibold rounded-md cursor-pointer tab-content">
                <img
                  className="w-6 m-auto tab-image"
                  src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/theme-icon/active/icon-sport.svg?v=1730260800861"
                  alt=""
                />
                স্পোর্ট
              </div>
            </Tab>
          </div>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3 md:flex justify-between items-center gap-2 py-2">
            {/* single card */}
            <div className="relative w-full">
              <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
                <img
                  className="w-6 md:w-7 m-auto"
                  src="https://img.m156b.com/mb/h5/assets/images/icon-set/sports-icon/icon-exchange.svg?v=1730260800861"
                  alt=""
                />
                <p className="md:mt-1">CRICKET</p>
              </div>
              <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
                <img
                  className="rounded-tr-lg"
                  src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                  alt=""
                />
              </div>
            </div>

            {/* single card */}
            <div className="relative w-full">
              <div className="h-[58px] md:h-[68px] py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
            </div>
            {/* single card */}
            <div className="relative w-full">
              <div className="h-[58px] md:h-[68px] py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
            </div>
            {/* single card */}
            <div className="relative w-full">
              <div className="h-[58px] md:h-[68px] py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
            </div>
            {/* single card */}
            <div className="relative w-full">
              <div className="h-[58px] md:h-[68px] py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
            </div>
            {/* single card */}
            <div className="relative w-full">
              <div className="h-[58px] md:h-[68px] py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
            </div>

            {/* Repeat other items as needed */}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 md:flex justify-between items-center gap-2 py-2">
            {/* single card */}
            <div className="relative w-full">
              <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
                <img
                  className="w-6 md:w-7 m-auto"
                  src="https://img.m156b.com/mb/h5/assets/images/icon-set/sports-icon/icon-exchange.svg?v=1730260800861"
                  alt=""
                />
                <p className="md:mt-1">CRICKET</p>
              </div>
              <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
                <img
                  className="rounded-tr-lg"
                  src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                  alt=""
                />
              </div>
            </div>
            {/* single card */}
            <div className="relative w-full">
              <div className="py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg">
                <img
                  className="w-6 md:w-7 m-auto"
                  src="https://img.m156b.com/mb/h5/assets/images/icon-set/sports-icon/icon-exchange.svg?v=1730260800861"
                  alt=""
                />
                <p className="md:mt-1">CRICKET</p>
              </div>
              <div className="absolute top-0 -right-0.5 w-6 rounded-tr-lg">
                <img
                  className="rounded-tr-lg"
                  src="https://img.m156b.com/mb/h5/assets/images/dark/icon-set/index-theme-icon/card-triangle.svg?v=1730260800861"
                  alt=""
                />
              </div>
            </div>
            {/* single card */}
            <div className="relative w-full">
              <div className="h-[58px] md:h-[68px] py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
            </div>
            {/* single card */}
            <div className="relative w-full">
              <div className="h-[58px] md:h-[68px] py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
            </div>
            {/* single card */}
            <div className="relative w-full">
              <div className="h-[58px] md:h-[68px] py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
            </div>
            {/* single card */}
            <div className="relative w-full">
              <div className="h-[58px] md:h-[68px] py-2 text-center text-xs font-semibold text-white bg-[#333333] rounded-lg"></div>
            </div>

            {/* Repeat other items as needed */}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MenuBar;
