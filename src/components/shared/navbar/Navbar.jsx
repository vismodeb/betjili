// import { IoMdMenu } from "react-icons/io";
// import { Link } from "react-router-dom";

// const Navbar = ({ open }) => {
//   return (
//     <div>
//       <div
//         className={`bg-[#333333] p-4 fixed left-0 right-0 z-20 duration-300 ${
//           !open ? "md:ml-16" : "md:ml-64"
//         }`}
//       >
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2 sm:gap-3">
//             <div className="md:hidden text-yellow-300">
//               <IoMdMenu className="text-3xl" />
//             </div>
//             <Link to={"/"}>
//               <img
//                 className="w-24 sm:w-28 md:w-36"
//                 src="https://img.m156b.com/mb/h5/assets/images/dark/logo.png?v=1727771384153"
//                 alt=""
//               />
//             </Link>
//           </div>
//           <div className="flex gap-2 md:gap-3">
//             <div className="flex gap-1 sm:gap-2">
//               <button className="text-sm font-medium px-3 sm:px-4 md:px-7 py-1 md:py-2 bg-yellow-300 hover:bg-yellow-400 transition-all duration-300 rounded-md">
//                 লগ ইন
//               </button>
//               <button className="text-sm font-medium px-2 sm:px-3 md:px-6 py-1 md:py-2 bg-slate-100 hover:bg-slate-200 transition-all duration-300 rounded-md">
//                 সাইন আপ
//               </button>
//             </div>
//             <div className="flex items-center">
//               <div className="w-6 md:w-7">
//                 <img
//                   src={
//                     "https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-bangladesh-flag-icon-in-modern-neomorphism-style-png-image_4872074.png"
//                   }
//                   alt="BD flag"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Open the modal using document.getElementById('ID').showModal() method */}
//       <button
//         className="btn z-50"
//         onClick={() => document.getElementById("my_modal_2").showModal()}
//       >
//         open modal
//       </button>
//       <dialog id="my_modal_2" className="modal">
//         <div className="modal-box">
//           <h3 className="font-bold text-lg">Hello!</h3>
//           <p className="py-4">Press ESC key or click outside to close</p>
//         </div>
//         <form method="dialog" className="modal-backdrop">
//           <button>close</button>
//         </form>
//       </dialog>
//     </div>
//   );
// };

// export default Navbar;

import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import AccoundModal from "../modal/AccoundModal";

const Navbar = ({ open }) => {
  const openModal = (id) => {
    document.getElementById(id).showModal();
  };

  return (
    <div>
      <div
        className={`bg-[#333333] p-4 fixed left-0 right-0 z-20 duration-300 ${
          !open ? "md:ml-16" : "md:ml-64"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 sm:gap-3">
            <div className="md:hidden text-yellow-300">
              <IoMdMenu className="text-3xl sm:text-3xl" />
            </div>
            <Link to={"/"}>
              <img
                className="w-24 sm:w-28 md:w-36"
                src="https://img.m156b.com/mb/h5/assets/images/dark/logo.png?v=1727771384153"
                alt=""
              />
            </Link>
          </div>
          <div className="flex gap-1 sm:gap-2 md:gap-3">
            <div className="flex gap-1 sm:gap-2">
              <button
                className="text-xs sm:text-sm font-medium px-2 sm:px-4 md:px-7 py-1 md:py-2 bg-yellow-300 hover:bg-yellow-400 transition-all duration-300 rounded-md"
                onClick={() => openModal("login_modal")}
              >
                লগ ইন
              </button>
              <button
                className="text-xs sm:text-sm font-medium px-2 sm:px-3 md:px-6 py-1 md:py-2 bg-slate-100 hover:bg-slate-200 transition-all duration-300 rounded-md"
                onClick={() => openModal("signup_modal")}
              >
                সাইন আপ
              </button>
            </div>
            <div className="flex items-center">
              <div className="w-6 md:w-7">
                <img
                  src={
                    "https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-bangladesh-flag-icon-in-modern-neomorphism-style-png-image_4872074.png"
                  }
                  alt="BD flag"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <AccoundModal id="login_modal" title="লগ ইন" buttonText="লগ ইন">
        <form className="py-4 px-4">
          <div className="bg-[#45434360] p-3 rounded-lg">
            <div className="mb-3">
              <label className="text-white text-sm" htmlFor="name">
                ব্যবহারকারীর নাম
              </label>
              <input
                type="name"
                placeholder="৪-১৫ অক্ষর নাম্বার এলাউ"
                className="text-white bg-[#5a5959] border-none outline-none w-full p-2 rounded-md"
                required
              />
            </div>
            <div className="mb-3">
              <label className="text-white text-sm" htmlFor="password">
                পাসওয়ার্ড
              </label>
              <input
                type="password"
                placeholder="৬-২০ অক্ষর বা সংখ্যা"
                className="text-white bg-[#5a5959] border-none outline-none w-full p-2 rounded-md"
                required
              />
            </div>
            <div className="text-right text-xs text-yellow-300">
              <div className="p-0.5 inline-block border border-yellow-300 rounded-md cursor-pointer">
                পাসওয়ার্ড ভুলে গেছেন?
              </div>
            </div>
          </div>
        </form>
      </AccoundModal>

      {/* Signup Modal */}
      <AccoundModal id="signup_modal" title="সাইন আপ" buttonText="নিশ্চিত করুন">
        <form className="py-4 px-4">
          <div className="bg-[#45434360] p-3 rounded-lg">
            <div className="mb-3">
              <label className="text-white text-sm" htmlFor="name">
                ব্যবহারকারীর নাম
              </label>
              <input
                type="name"
                placeholder="৪-১৫ অক্ষর নাম্বার এলাউ"
                className="text-white bg-[#5a5959] border-none outline-none w-full p-2 rounded-md"
                required
              />
            </div>
            <div className="mb-3">
              <label className="text-white text-sm" htmlFor="password">
                পাসওয়ার্ড
              </label>
              <input
                type="password"
                placeholder="৬-২০ অক্ষর বা সংখ্যা"
                className="text-white bg-[#5a5959] border-none outline-none w-full p-2 rounded-md"
                required
              />
            </div>
          </div>
          <div className="bg-[#45434360] p-3 mt-2 rounded-lg">
            <div className="mb-3">
              <label className="text-white text-sm" htmlFor="password">
                ফোন নাম্বার
              </label>
              <input
                type="password"
                placeholder="ফোন নাম্বার"
                className="text-white bg-[#5a5959] border-none outline-none w-full p-2 rounded-md"
                required
              />
            </div>
          </div>
        </form>
      </AccoundModal>
    </div>
  );
};

export default Navbar;
