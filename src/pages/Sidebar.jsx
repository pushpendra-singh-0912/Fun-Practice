// import {
//   Home,
//   LayoutDashboard,
//   BarChart,
//   FileText,
//   Search,
//   ClipboardList,
//   Handshake,
// } from "lucide-react";
// import QcopLogo from "../assets/Qcop-logo.png";
// import Push from "../assets/Push.png";
// import { useNavigate } from "react-router-dom";

// export default function Sidebar() {
//   const navigate = useNavigate();

//   return (
//     <div className="w-64 bg-[#EBEEF2] h-screen flex flex-col justify-between">
//       {/* Top Section */}
//       <div>
//         {/* Logo */}
//         <div className="flex items-center gap-2 px-4 py-6 border-b">
//           <img
//             src={QcopLogo} // replace with your COP logo
//             alt="COP Logo"
//             className="w-36 h-16"
//           />
//         </div>

//         {/* Search */}
//         <div className="w-full px-3 py-2">
//           <div className="flex items-center gap-2 bg-gray-200 rounded-md px-2 w-full">
//             <Search className="w-4 h-4 text-gray-600" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full p-2 bg-transparent text-sm text-gray-700 focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* Nav */}
//         <nav className="space-y-1 px-4">
//           <button className="flex items-center w-full px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-blue-600 hover:text-white my-3">
//             <Home className="w-4 h-4 mr-3" />
//             Home
//           </button>
//           <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md">
//             <LayoutDashboard className="w-4 h-4 mr-3" />
//             Dashboard
//           </button>
//           <button
//             onClick={() => navigate("/Report")}
//             className="flex items-center w-full px-3 py-2 text-sm font-medium  text-gray-700 hover:bg-blue-600 hover:text-white rounded-md"
//           >
//             <BarChart className="w-4 h-4 mr-3" />
//             Reports
//           </button>
//           <button className="flex items-center w-full px-3 py-2 text-sm font-medium  text-gray-700 hover:bg-blue-600 hover:text-white rounded-md">
//             <ClipboardList className="w-4 h-4 mr-3" />
//             DLR
//           </button>
//           <button className="flex items-center w-full px-3 py-2 text-sm font-medium  text-gray-700 hover:bg-blue-600 hover:text-white rounded-md">
//             <FileText className="w-4 h-4 mr-3" />
//             Audit
//           </button>
//           <button className="flex items-center w-full px-3 py-2 text-sm font-medium  text-gray-700 hover:bg-blue-600 hover:text-white rounded-md">
//             <FileText className="w-4 h-4 mr-3" />
//             Pour Card
//           </button>
//           <button className="flex items-center w-full px-3 py-2 text-sm font-medium  text-gray-700 hover:bg-blue-600 hover:text-white rounded-md">
//             <Handshake className="w-4 h-4 mr-3" />
//             Handover
//           </button>
//         </nav>
//       </div>

//       {/* User Profile */}
//       <div className="px-4 py-4 border-t border-gray-300 mt-5">
//         <div className="flex items-center p-2 text-white rounded-md">
//           <img src={Push} alt="User" className="w-10 h-10 rounded-full mr-3" />
//           <div className="text-sm leading-tight text-black">
//             <p className="font-medium ">Pushpendra Singh</p>
//             <p className="text-xs opacity-80">Maker</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// ----------------------------------------------------------------------now add responsive ness but this code is good upper code is best

import {
  Home,
  LayoutDashboard,
  BarChart,
  FileText,
  Search,
  ClipboardList,
  Handshake,
} from "lucide-react";
import QcopLogo from "../assets/Qcop-logo.png";
import Push from "../assets/Push.png";
import { useNavigate } from "react-router-dom";
import AddUserForm from "../components/Forms/AddUserForm";
import { useState } from "react";

export default function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); //for showing the adduserform

  return (
    <div className="w-64 bg-[#EBEEF2] h-[100%] flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 py-6 border-b">
          <img src={QcopLogo} alt="COP Logo" className="w-36 h-16" />
        </div>

        {/* Search */}
        <div className="w-full px-3 py-2">
          <div className="flex items-center gap-2 bg-gray-200 rounded-md px-2 w-full">
            <Search className="w-4 h-4 text-gray-600" />
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 bg-transparent text-sm text-gray-700 focus:outline-none"
            />
          </div>
        </div>

        {/* Nav */}
        <nav className="space-y-1 px-4">
          <button className="flex items-center w-full px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-blue-600 hover:text-white my-3">
            <Home className="w-4 h-4 mr-3" />
            Home
          </button>
          <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md">
            <LayoutDashboard className="w-4 h-4 mr-3" />
            Dashboard
          </button>
          <button
            onClick={() => navigate("/Report")}
            className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md"
          >
            <BarChart className="w-4 h-4 mr-3" />
            Reports
          </button>
          <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md">
            <ClipboardList className="w-4 h-4 mr-3" />
            DLR
          </button>
          <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md">
            <FileText className="w-4 h-4 mr-3" />
            Audit
          </button>
          <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md">
            <FileText className="w-4 h-4 mr-3" />
            Pour Card
          </button>
          <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md">
            <Handshake className="w-4 h-4 mr-3" />
            Handover
          </button>
        </nav>
      </div>

      {/* User Profile */}
      <div className="px-4 py-4 border-t border-b border-gray-300">
        <div className="flex items-center p-2 text-white rounded-md">
          <img src={Push} alt="User" className="w-10 h-10 rounded-full mr-3" />
          <div className="text-sm leading-tight text-black">
            <p className="font-medium">Pushpendra Singh</p>
            <p className="text-xs opacity-80 flex justify-between items-center">
              Maker
              <button className="text-2xl" onClick={() => setIsOpen(true)}>
                +
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Show AddUserForm only when isOpen is true */}
      {isOpen && <AddUserForm open={isOpen} onClose={() => setIsOpen(false)} />}
    </div>
  );
}

// ===============================
