// // src/components/UserMang/PageHeader.jsx
// import { Search } from "lucide-react";
// import { useState } from "react";
// import AddUserForm from "../Forms/AddUserForm";

// export default function PageHeader({
//   title,
//   showSearch = false,
//   showFilter = false,
//   showAddUser = false,
//   backgroundImage,
// }) {
//   const [isOpen, setIsOpen] = useState(false); // AddUserForm
//   return (
//     <div
//       className="relative w-full min-h-[200px] md:h-[30vh] flex items-center px-6 bg-cover bg-center shadow-md"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//       }}
//     >
//       {/* Overlay for darkening */}
//       <div className="absolute inset-0 bg-black/40"></div>
//       {/* Content */}
//       <div className="relative z-10 flex justify-between items-center w-full">
//         {/* Left - Title */}
//         <h1 className="text-2xl md:text-3xl font-semibold text-white">
//           {title}
//         </h1>

//         {/* Right - Actions */}
//         <div className="flex items-center gap-3">
//           {showSearch && (
//             <div className="flex items-center bg-transparent border border-gray-300  rounded-xl px-3 py-1 shadow-sm">
//               <Search className="  w-4 h-4 text-gray-500" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="ml-2 bg-transparent outline-none text-sm text-gray-700"
//               />
//             </div>
//           )}

//           {showFilter && (
//             <button className="bg-transparent/5  text-white border border-gray-300  hover:text-blue-700 px-3 py-1.5 rounded-xl text-sm font-medium shadow-sm transition">
//               Filters
//             </button>
//           )}

//           {showAddUser && (
//             <button
//               onClick={() => setIsOpen(true)}
//               className="bg-transparent/5 hover:bg-white hover:text-blue-700 text-white border border-gray-300 px-4 py-1.5 rounded-xl text-sm font-medium shadow-md transition"
//             >
//               + Add User
//             </button>
//           )}
//         </div>
//       </div>
//       {/* Show AddUserForm only when isOpen is true */}
//       {isOpen && <AddUserForm open={isOpen} onClose={() => setIsOpen(false)} />}
//     </div>
//   );
// }

// ========================================

// src/components/UserMang/PageHeader.jsx
import { Search } from "lucide-react";
import { useState } from "react";
import AddUserForm from "../Forms/AddUserForm";

export default function PageHeader({
  title,
  showSearch = false,
  showFilter = false,
  showAddUser = false,
  backgroundImage,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative w-full min-h-[200px] md:h-[30vh] flex flex-col sm:flex-row items-center px-4 sm:px-6 bg-cover bg-center shadow-md"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center w-full gap-3 sm:gap-0">
        {/* Left - Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center sm:text-left">
          {title}
        </h1>

        {/* Right - Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
          {showSearch && (
            <div className="flex items-center bg-white/90 border border-gray-300 rounded-xl px-3 py-1 shadow-sm w-full sm:w-auto">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 bg-transparent outline-none text-sm sm:text-base w-full sm:w-auto"
              />
            </div>
          )}

          {showFilter && (
            <button className="bg-transparent/5 text-white border border-gray-300 hover:text-blue-700 px-3 py-1.5 rounded-xl text-sm sm:text-base font-medium shadow-sm transition w-full sm:w-auto">
              Filters
            </button>
          )}

          {showAddUser && (
            <button
              onClick={() => setIsOpen(true)}
              className="bg-transparent/5 hover:bg-white hover:text-blue-700 text-white border border-gray-300 px-4 py-1.5 rounded-xl text-sm sm:text-base font-medium shadow-md transition w-full sm:w-auto"
            >
              + Add User
            </button>
          )}
        </div>
      </div>

      {isOpen && <AddUserForm open={isOpen} onClose={() => setIsOpen(false)} />}
    </div>
  );
}
