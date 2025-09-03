// src/components/UserMang/Breadcrumbs.jsx
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="flex items-center text-sm text-gray-600 px-6 py-3 bg-white shadow-sm rounded-b-2xl">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <span
            className={`${
              index === items.length - 1
                ? "font-semibold text-gray-900"
                : "hover:text-blue-600 cursor-pointer"
            }`}
          >
            {item}
          </span>
          {index < items.length - 1 && (
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          )}
        </div>
      ))}
    </nav>
  );
}
