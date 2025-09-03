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
// import AddUserForm from "../components/Forms/AddUserForm";
// import { useState } from "react";

// export default function Sidebar() {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false); //for showing the adduserform

//   return (
//     <div className="w-64 bg-[#EBEEF2] h-[100%] flex flex-col justify-between">
//       {/* Top Section */}
//       <div>
//         {/* Logo */}
//         <div className="flex items-center gap-2 px-4 py-6 border-b">
//           <img src={QcopLogo} alt="COP Logo" className="w-36 h-16" />
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
//             className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md"
//           >
//             <BarChart className="w-4 h-4 mr-3" />
//             Reports
//           </button>
//           <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md">
//             <ClipboardList className="w-4 h-4 mr-3" />
//             DLR
//           </button>
//           <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md">
//             <FileText className="w-4 h-4 mr-3" />
//             Audit
//           </button>
//           <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md">
//             <FileText className="w-4 h-4 mr-3" />
//             Pour Card
//           </button>
//           <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md">
//             <Handshake className="w-4 h-4 mr-3" />
//             Handover
//           </button>
//         </nav>
//       </div>

//       {/* User Profile */}
//       <div className="px-4 py-4 border-t border-b border-gray-300">
//         <div className="flex items-center p-2 text-white rounded-md">
//           <img src={Push} alt="User" className="w-10 h-10 rounded-full mr-3" />
//           <div className="text-sm leading-tight text-black">
//             <p className="font-medium">Pushpendra Singh</p>
//             <p className="text-xs opacity-80 flex justify-between items-center">
//               Maker
//               <button className="text-2xl" onClick={() => setIsOpen(true)}>
//                 +
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Show AddUserForm only when isOpen is true */}
//       {isOpen && <AddUserForm open={isOpen} onClose={() => setIsOpen(false)} />}
//     </div>
//   );
// }

// ===============================try to add + in side bar and sub select on sidebar

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
// import AddUserForm from "../components/Forms/AddUserForm";
// import { useState } from "react";

// export default function Sidebar() {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false); //for showing the adduserform

//   return (
//     <div className="md:w-64 bg-[#EBEEF2] h-[100%] flex flex-col justify-between">
//       {/* Top Section */}
//       <div>
//         {/* Logo */}
//         <div className="flex items-center gap-2 px-4 py-6 border-b">
//           <img src={QcopLogo} alt="COP Logo" className="w-36 h-16" />
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
//             <Home className="w-5 h-5 mr-3" />
//             Home
//             {/* <span className="ml-24 w-5 rounded-full border ">
//               +
//             </span> */}
//           </button>
//           <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md">
//             <LayoutDashboard className="w-4 h-4 mr-3" />
//             Dashboard
//           </button>
//           <button
//             onClick={() => navigate("/Report")}
//             className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md"
//           >
//             <BarChart className="w-4 h-4 mr-3" />
//             Reports
//           </button>
//           <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md">
//             <ClipboardList className="w-4 h-4 mr-3" />
//             DLR
//           </button>
//           <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md">
//             <FileText className="w-4 h-4 mr-3" />
//             Audit
//           </button>
//           <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md">
//             <FileText className="w-4 h-4 mr-3" />
//             Pour Card
//           </button>
//           <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-md">
//             <Handshake className="w-4 h-4 mr-3" />
//             Handover
//           </button>
//         </nav>
//       </div>

//       {/* User Profile */}
//       <div className="px-4 py-4 border-t border-b border-gray-300">
//         <div className="flex items-center p-2 text-white rounded-md">
//           <img src={Push} alt="User" className="w-10 h-10 rounded-full mr-3" />
//           <div className="text-sm leading-tight text-black">
//             <p className="font-medium">Pushpendra Singh</p>
//             <p className="text-xs opacity-80 flex justify-between items-center">
//               Maker
//               <button className="text-2xl" onClick={() => setIsOpen(true)}>
//                 +
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Show AddUserForm only when isOpen is true */}
//       {isOpen && <AddUserForm open={isOpen} onClose={() => setIsOpen(false)} />}
//     </div>
//   );
// }

// ==================================================== nwo try to add sub sidebar let see what happens

// import {
//   Home,
//   LayoutDashboard,
//   BarChart,
//   FileText,
//   Search,
//   ClipboardList,
//   Handshake,
//   Plus,
// } from "lucide-react";
// import QcopLogo from "../assets/Qcop-logo.png";
// import Push from "../assets/Push.png";
// import { useNavigate } from "react-router-dom";
// import AddUserForm from "../components/Forms/AddUserForm";
// import { useState } from "react";

// const navItems = [
//   { id: "home", label: "Home", icon: <Home className="w-5 h-5 mr-3" /> },
//   {
//     id: "dashboard",
//     label: "Dashboard",
//     icon: <LayoutDashboard className="w-4 h-4 mr-3" />,
//   },
//   {
//     id: "reports",
//     label: "Reports",
//     icon: <BarChart className="w-4 h-4 mr-3" />,
//   },
//   { id: "dlr", label: "DLR", icon: <ClipboardList className="w-4 h-4 mr-3" /> },
//   { id: "audit", label: "Audit", icon: <FileText className="w-4 h-4 mr-3" /> },
//   {
//     id: "pour",
//     label: "Pour Card",
//     icon: <FileText className="w-4 h-4 mr-3" />,
//   },
//   {
//     id: "handover",
//     label: "Handover",
//     icon: <Handshake className="w-4 h-4 mr-3" />,
//   },
// ];

// export default function Sidebar() {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false); // AddUserForm
//   const [activeSubMenu, setActiveSubMenu] = useState(null); // Which submenu is open

//   const toggleSubMenu = (id) => {
//     setActiveSubMenu((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div className="md:w-64 bg-[#EBEEF2] h-[100%] flex flex-col justify-between relative">
//       {/* Top Section */}
//       <div>
//         {/* Logo */}
//         <div className="flex items-center gap-2 px-4 py-6 border-b">
//           <img src={QcopLogo} alt="COP Logo" className="w-36 h-16" />
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
//           {navItems.map((item) => (
//             <div key={item.id} className="relative">
//               <button
//                 className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-blue-600 hover:text-white my-2"
//                 onClick={() => navigate(`/${item.id}`)}
//               >
//                 <div className="flex items-center">
//                   {item.icon}
//                   {item.label}
//                 </div>
//                 <Plus
//                   className="w-5 h-5 text-gray-500 hover:text-white"
//                   onClick={(e) => {
//                     e.stopPropagation(); // prevent parent click
//                     toggleSubMenu(item.id);
//                   }}
//                 />
//               </button>

//               {/* Sub Sidebar */}
//               {activeSubMenu === item.id && (
//                 <div className="absolute left-full top-0 bg-white shadow-lg border rounded-md w-48 p-3 z-50">
//                   <p className="text-sm font-semibold mb-2 text-gray-700">
//                     {item.label} Options
//                   </p>
//                   <ul className="space-y-2 text-sm text-gray-600">
//                     <li className="hover:text-blue-600 cursor-pointer">
//                       Option 1
//                     </li>
//                     <li className="hover:text-blue-600 cursor-pointer">
//                       Option 2
//                     </li>
//                     <li className="hover:text-blue-600 cursor-pointer">
//                       Option 3
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>
//       </div>

//       {/* User Profile */}
//       <div className="px-4 py-4 border-t border-b border-gray-300">
//         <div className="flex items-center p-2 text-white rounded-md">
//           <img src={Push} alt="User" className="w-10 h-10 rounded-full mr-3" />
//           <div className="text-sm leading-tight text-black">
//             <p className="font-medium">Pushpendra Singh</p>
//             <p className="text-xs opacity-80 flex justify-between items-center">
//               Maker
//               <button className="text-2xl" onClick={() => setIsOpen(true)}>
//                 +
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Show AddUserForm only when isOpen is true */}
//       {isOpen && <AddUserForm open={isOpen} onClose={() => setIsOpen(false)} />}
//     </div>
//   );
// }

// ========================= nwo do the above same but now subside bar comes down in the parent sidebar this is the main one below

// import {
//   Home,
//   LayoutDashboard,
//   BarChart,
//   FileText,
//   Search,
//   ClipboardList,
//   Handshake,
//   Plus,
// } from "lucide-react";
// import QcopLogo from "../assets/Qcop-logo.png";
// import Push from "../assets/Push.png";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const navItems = [
//   {
//     id: "home",
//     label: "Home",
//     icon: <Home className="w-5 h-5 mr-3" />,
//     subMenu: ["Overview", "Stats"],
//   },
//   {
//     id: "dashboard",
//     label: "Dashboard",
//     icon: <LayoutDashboard className="w-4 h-4 mr-3" />,
//     subMenu: ["Analytics", "Performance"],
//   },
//   {
//     id: "siteadmin",
//     label: "Site Admin",
//     icon: <BarChart className="w-4 h-4 mr-3" />,
//     subMenu: ["UserManagement", "TabIdMapping", "UserMapping"],
//   },
//   {
//     id: "Report",
//     label: "Reports",
//     icon: <BarChart className="w-4 h-4 mr-3" />,
//     subMenu: ["Daily", "Weekly", "Monthly"],
//   },
//   {
//     id: "dlr",
//     label: "DLR",
//     icon: <ClipboardList className="w-4 h-4 mr-3" />,
//     subMenu: ["Upload", "History"],
//   },
//   {
//     id: "audit",
//     label: "Audit",
//     icon: <FileText className="w-4 h-4 mr-3" />,
//     subMenu: ["Upload", "History"],
//   },
//   {
//     id: "pour",
//     label: "Pour Card",
//     icon: <FileText className="w-4 h-4 mr-3" />,
//     subMenu: ["Upload", "History"],
//   },
//   {
//     id: "handover",
//     label: "Handover",
//     icon: <Handshake className="w-4 h-4 mr-3" />,
//     subMenu: ["Checklist", "Approvals"],
//   },
// ];

// export default function Sidebar() {
//   const navigate = useNavigate();
//   // const [isOpen, setIsOpen] = useState(false); // AddUserForm
//   const [activeSubMenu, setActiveSubMenu] = useState(null); // which submenu is open

//   const toggleSubMenu = (id) => {
//     setActiveSubMenu((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div className="md:w-64 bg-[#EBEEF2] h-[100%] flex flex-col justify-between">
//       {/* Top Section */}
//       <div>
//         {/* Logo */}
//         <div className="flex items-center gap-2 px-4 py-6 border-b">
//           <img src={QcopLogo} alt="COP Logo" className="w-36 h-16" />
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
//           {navItems.map((item) => (
//             <div key={item.id}>
//               <button
//                 className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-blue-600 hover:text-white my-2"
//                 onClick={() => navigate(`/${item.id}`)}
//               >
//                 <div className="flex items-center">
//                   {item.icon}
//                   {item.label}
//                 </div>
//                 {item.subMenu && (
//                   <Plus
//                     className={`w-5 h-5 transition-transform ${
//                       activeSubMenu === item.id
//                         ? "rotate-45 text-blue-600"
//                         : "text-gray-500"
//                     }`}
//                     onClick={(e) => {
//                       e.stopPropagation(); // prevent parent click
//                       toggleSubMenu(item.id);
//                     }}
//                   />
//                 )}
//               </button>

//               {/* Sub Menu inside sidebar */}
//               {activeSubMenu === item.id && item.subMenu && (
//                 <div className="ml-10 mt-1 space-y-1">
//                   {item.subMenu.map((sub, i) => (
//                     <button
//                       key={i}
//                       onClick={() =>
//                         navigate(
//                           `/${item.id}/${sub
//                             .replace(/\s+/g, "-")
//                             .toLowerCase()}`
//                         )
//                       }
//                       className="block w-full text-left px-2 py-1 text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
//                     >
//                       {sub}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>
//       </div>

//       {/* User Profile */}
//       <div className="px-4 py-4 border-t border-b border-gray-300">
//         <div className="flex items-center p-2 text-white rounded-md">
//           <img src={Push} alt="User" className="w-10 h-10 rounded-full mr-3" />
//           <div className="text-sm leading-tight text-black">
//             <p className="font-medium">Pushpendra Singh</p>
//             <p className="text-xs opacity-80 flex justify-between items-center">
//               Maker
//               {/* <button className="text-2xl" >
//                 +
//               </button> */}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// =================   =============   ================   ================  ============

// import {
//   Home,
//   LayoutDashboard,
//   BarChart,
//   FileText,
//   Search,
//   ClipboardList,
//   Handshake,
//   Plus,
// } from "lucide-react";
// import QcopLogo from "../assets/Qcop-logo.png";
// import Push from "../assets/Push.png";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const navItems = [
//   {
//     id: "home",
//     label: "Home",
//     icon: <Home className="w-5 h-5 mr-3" />,
//     subMenu: ["Overview", "Stats"],
//   },
//   {
//     id: "dashboard",
//     label: "Dashboard",
//     icon: <LayoutDashboard className="w-4 h-4 mr-3" />,
//     subMenu: ["Analytics", "Performance"],
//   },
//   {
//     id: "siteadmin",
//     label: "Site Admin",
//     icon: <BarChart className="w-4 h-4 mr-3" />,
//     subMenu: ["UserManagement", "TabIdMapping", "UserMapping"],
//   },
//   {
//     id: "Report",
//     label: "Reports",
//     icon: <BarChart className="w-4 h-4 mr-3" />,
//     subMenu: ["Daily", "Weekly", "Monthly"],
//   },
//   {
//     id: "dlr",
//     label: "DLR",
//     icon: <ClipboardList className="w-4 h-4 mr-3" />,
//     subMenu: ["Upload", "History"],
//   },
//   {
//     id: "audit",
//     label: "Audit",
//     icon: <FileText className="w-4 h-4 mr-3" />,
//     subMenu: ["Upload", "History"],
//   },
//   {
//     id: "pour",
//     label: "Pour Card",
//     icon: <FileText className="w-4 h-4 mr-3" />,
//     subMenu: ["Upload", "History"],
//   },
//   {
//     id: "handover",
//     label: "Handover",
//     icon: <Handshake className="w-4 h-4 mr-3" />,
//     subMenu: ["Checklist", "Approvals"],
//   },
// ];

// export default function Sidebar() {
//   const navigate = useNavigate();
//   const [activeSubMenu, setActiveSubMenu] = useState(null);

//   const toggleSubMenu = (id) => {
//     setActiveSubMenu((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div className="fixed top-0 left-0 h-screen w-64 bg-[#EBEEF2] flex flex-col justify-between shadow-md z-50">
//       {/* Top Section */}
//       <div>
//         {/* Logo */}
//         <div className="flex items-center gap-2 px-4 py-6 border-b">
//           <img src={QcopLogo} alt="COP Logo" className="w-36 h-16" />
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
//           {navItems.map((item) => (
//             <div key={item.id}>
//               <button
//                 className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-blue-600 hover:text-white my-2"
//                 onClick={() => navigate(`/${item.id}`)}
//               >
//                 <div className="flex items-center">
//                   {item.icon}
//                   {item.label}
//                 </div>
//                 {item.subMenu && (
//                   <Plus
//                     className={`w-5 h-5 transition-transform ${
//                       activeSubMenu === item.id
//                         ? "rotate-45 text-blue-600"
//                         : "text-gray-500"
//                     }`}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       toggleSubMenu(item.id);
//                     }}
//                   />
//                 )}
//               </button>

//               {activeSubMenu === item.id && item.subMenu && (
//                 <div className="ml-10 mt-1 space-y-1">
//                   {item.subMenu.map((sub, i) => (
//                     <button
//                       key={i}
//                       onClick={() =>
//                         navigate(
//                           `/${item.id}/${sub
//                             .replace(/\s+/g, "-")
//                             .toLowerCase()}`
//                         )
//                       }
//                       className="block w-full text-left px-2 py-1 text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
//                     >
//                       {sub}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>
//       </div>

//       {/* User Profile */}
//       <div className="px-4 py-4 border-t border-gray-300">
//         <div className="flex items-center p-2 text-white rounded-md">
//           <img src={Push} alt="User" className="w-10 h-10 rounded-full mr-3" />
//           <div className="text-sm leading-tight text-black">
//             <p className="font-medium">Pushpendra Singh</p>
//             <p className="text-xs opacity-80">Maker</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// =====================================================

import {
  Home,
  LayoutDashboard,
  BarChart,
  FileText,
  Search,
  ClipboardList,
  Handshake,
  Plus,
} from "lucide-react";
import QcopLogo from "../assets/Qcop-logo.png";
import Push from "../assets/Push.png";
import { useNavigate } from "react-router-dom"; // ✅ FIX: added this import
import { useState } from "react";

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: <Home className="w-5 h-5 mr-3" />,
    subMenu: ["Overview", "Stats"],
  },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard className="w-4 h-4 mr-3" />,
    subMenu: ["Analytics", "Performance"],
  },
  {
    id: "siteadmin",
    label: "Site Admin",
    icon: <BarChart className="w-4 h-4 mr-3" />,
    subMenu: ["UserManagement", "TabIdMapping", "UserMapping"],
  },
  {
    id: "Report",
    label: "Reports",
    icon: <BarChart className="w-4 h-4 mr-3" />,
    subMenu: ["Daily", "Weekly", "Monthly"],
  },
  {
    id: "dlr",
    label: "DLR",
    icon: <ClipboardList className="w-4 h-4 mr-3" />,
    subMenu: ["Upload", "History"],
  },
  {
    id: "audit",
    label: "Audit",
    icon: <FileText className="w-4 h-4 mr-3" />,
    subMenu: ["Upload", "History"],
  },
  {
    id: "pour",
    label: "Pour Card",
    icon: <FileText className="w-4 h-4 mr-3" />,
    subMenu: ["Upload", "History"],
  },
  {
    id: "handover",
    label: "Handover",
    icon: <Handshake className="w-4 h-4 mr-3" />,
    subMenu: ["Checklist", "Approvals"],
  },
];

export default function Sidebar({ onCloseSidebar }) {
  const navigate = useNavigate();
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleSubMenu = (id) => {
    setActiveSubMenu((prev) => (prev === id ? null : id));
  };

  const handleNavigate = (path) => {
    navigate(path);

    // ✅ Close sidebar if function exists (mobile only)
    if (onCloseSidebar) {
      onCloseSidebar();
    }
  };

  return (
    <div className="h-full w-64 bg-[#EBEEF2] flex flex-col justify-between shadow-md">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 py-6 border-b">
          <img src={QcopLogo} alt="QCOP Logo" className="w-36 h-16" />
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
          {navItems.map((item) => (
            <div key={item.id}>
              <button
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-blue-600 hover:text-white my-2"
                onClick={() => handleNavigate(`/${item.id}`)}
              >
                <div className="flex items-center">
                  {item.icon}
                  {item.label}
                </div>
                {item.subMenu && (
                  <Plus
                    className={`w-5 h-5 transition-transform ${
                      activeSubMenu === item.id
                        ? "rotate-45 text-blue-600"
                        : "text-gray-500"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSubMenu(item.id);
                    }}
                  />
                )}
              </button>

              {activeSubMenu === item.id && item.subMenu && (
                <div className="ml-10 mt-1 space-y-1">
                  {item.subMenu.map((sub, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        handleNavigate(
                          `/${item.id}/${sub
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`
                        )
                      }
                      className="block w-full text-left px-2 py-1 text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* User Profile */}
      <div className="px-4 py-4 border-t border-gray-300">
        <div className="flex items-center p-2 text-white rounded-md">
          <img src={Push} alt="User" className="w-10 h-10 rounded-full mr-3" />
          <div className="text-sm leading-tight text-black">
            <p className="font-medium">Pushpendra Singh</p>
            <p className="text-xs opacity-80">Maker</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================================
