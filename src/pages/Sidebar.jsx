// ========================= ================ ===========

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
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: <Home className="w-5 h-5 mr-3" />,
    subMenu: ["Overview", "Stats"],
  },
  {
    id: "Graph",
    label: "graph",
    icon: <Home className="w-5 h-5 mr-3" />,
    subMenu: ["QA", "NC"],
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
    subMenu: [
      "UserManagement",
      "TabIdMapping",
      "UserMapping",
      "UserVersionList",
      "ProjectDetail",
      "ProjectLevelDetails",
      "ManageContractors",
    ],
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
    if (onCloseSidebar) onCloseSidebar();
  };

  return (
    <div className="h-full w-64 bg-[#EBEEF2] flex flex-col shadow-md">
      {/* Top Section */}
      <div>
        <div className="flex items-center gap-2 px-4 py-6 border-b">
          <img src={QcopLogo} alt="QCOP Logo" className="w-36 h-16" />
        </div>

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
      </div>

      {/* Nav Section */}
      <div className="flex-1 relative overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300 scrollbar-thumb-rounded-md">
        {/* Top Fade */}
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-gray-300 to-transparent pointer-events-none z-10" />

        {/* Menu */}
        <nav className="space-y-1 relative z-0 px-4 py-2">
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

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-gray-300 to-transparent pointer-events-none z-10" />
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
