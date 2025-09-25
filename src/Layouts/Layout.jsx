// =========================

// src/layouts/Layout.jsx
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Menu, Bell } from "lucide-react";
// import Sidebar from "../pages/Sidebar";
// import QcopLogo from "../assets/Qcop-logo.png";

// export default function Layout({ children }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar (desktop) */}
//       <div className="hidden md:block fixed left-0 top-0 h-full w-64">
//         <Sidebar />
//       </div>

//       {/* Sidebar (mobile, sliding) */}
//       <motion.div
//         initial={{ x: "-100%" }}
//         animate={{ x: isOpen ? 0 : "-100%" }}
//         transition={{ duration: 0.3 }}
//         className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 md:hidden"
//       >
//         <Sidebar onCloseSidebar={() => setIsOpen(false)} />
//       </motion.div>

//       {/* Overlay for mobile */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Main area */}
//       <div className="flex-1 flex flex-col w-full md:ml-64">
//         {/* Top bar (mobile only) */}
//         <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md fixed top-0 left-0 right-0 z-30 md:hidden">
//           <button onClick={() => setIsOpen(true)} className="p-2">
//             <Menu className="w-6 h-6 text-gray-700" />
//           </button>
//           <img src={QcopLogo} alt="QCOP Logo" className="h-8 object-contain" />
//           <button className="p-2">
//             <Bell className="w-6 h-6 text-gray-700" />
//           </button>
//         </header>

//         {/* Content */}
//         <main className="flex-1 pt-2 mt-14 md:mt-0 overflow-auto">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }

// =====================================

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Menu, Bell } from "lucide-react";
// import Sidebar from "../pages/Sidebar";
// import QcopLogo from "../assets/Qcop-logo.png";

// export default function Layout({ children }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar (desktop) */}
//       <div className="hidden md:block fixed left-0 top-0 h-full w-64">
//         <Sidebar />
//       </div>

//       {/* Sidebar (mobile, sliding) */}
//       <motion.div
//         initial={{ x: "-100%" }}
//         animate={{ x: isOpen ? 0 : "-100%" }}
//         transition={{ duration: 0.3 }}
//         className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 md:hidden"
//       >
//         <Sidebar onCloseSidebar={() => setIsOpen(false)} />
//       </motion.div>

//       {/* Overlay for mobile */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Main area */}
//       <div className="flex-1 flex flex-col w-full md:ml-64">
//         {/* Top bar (mobile only) */}
//         <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md fixed top-0 left-0 right-0 z-30 md:hidden">
//           <button onClick={() => setIsOpen(true)} className="p-2">
//             <Menu className="w-6 h-6 text-gray-700" />
//           </button>
//           <img src={QcopLogo} alt="QCOP Logo" className="h-8 object-contain" />
//           <button className="p-2">
//             <Bell className="w-6 h-6 text-gray-700" />
//           </button>
//         </header>

//         {/* Content */}
//         <main className="flex-1 pt-2 mt-14 md:mt-0 overflow-auto overflow-x-hidden">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }

// -------------------------------------------------gpt like

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Menu, Bell } from "lucide-react";
// import Sidebar from "../pages/Sidebar";
// import QcopLogo from "../assets/Qcop-logo.png";

// export default function Layout({ children }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar (desktop) */}
//       <div className="hidden md:block fixed left-0 top-0 h-full w-64 border-r border-gray-200">
//         <Sidebar />
//       </div>

//       {/* Sidebar (mobile, sliding) */}
//       <motion.div
//         initial={{ x: "-100%" }}
//         animate={{ x: isOpen ? 0 : "-100%" }}
//         transition={{ duration: 0.3 }}
//         className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 md:hidden"
//       >
//         <Sidebar onCloseSidebar={() => setIsOpen(false)} />
//       </motion.div>

//       {/* Overlay for mobile */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Main content area (like ChatGPT right panel) */}
//       <div className="flex-1 flex flex-col md:ml-64">
//         {/* Top bar (mobile only) */}
//         <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md fixed top-0 left-0 right-0 z-30 md:hidden">
//           <button onClick={() => setIsOpen(true)} className="p-2">
//             <Menu className="w-6 h-6 text-gray-700" />
//           </button>
//           <img src={QcopLogo} alt="QCOP Logo" className="h-8 object-contain" />
//           <button className="p-2">
//             <Bell className="w-6 h-6 text-gray-700" />
//           </button>
//         </header>

//         {/* Content */}
//         <main className="flex-1 pt-4 px-2 md:px-4 mt-14 md:mt-0 overflow-auto">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }

// =================

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Bell } from "lucide-react";
import Sidebar from "../pages/Sidebar";
import QcopLogo from "../assets/Qcop-logo.png";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar (desktop) */}
      <div className="hidden md:block fixed left-0 top-0 h-full w-64">
        <Sidebar />
      </div>

      {/* Sidebar (mobile, sliding) */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 md:hidden"
      >
        <Sidebar onCloseSidebar={() => setIsOpen(false)} />
      </motion.div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col w-full md:ml-64">
        {/* Top bar (mobile only) */}
        <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md fixed top-0 left-0 right-0 z-30 md:hidden">
          <button onClick={() => setIsOpen(true)} className="p-2">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <img src={QcopLogo} alt="QCOP Logo" className="h-8 object-contain" />
          <button className="p-2">
            <Bell className="w-6 h-6 text-gray-700" />
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 pt-2 mt-14 md:mt-0 overflow-y-auto overflow-x-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
