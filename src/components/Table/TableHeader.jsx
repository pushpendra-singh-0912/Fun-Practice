// export default function TableHeader({ headers }) {
//   return (
//     <thead className="bg-gray-200 uppercase text-sm text-[#4177A4]">
//       <tr>
//         {headers.map((head, i) => (
//           <th key={i} className="px-4 py-3 font-semibold text-left">
//             {head}
//           </th>
//         ))}
//         <th className="px-4 py-3 text-right">Actions</th>
//       </tr>
//     </thead>
//   );
// }

// ------------------------------------------

import { ChevronUp, ChevronDown } from "lucide-react";

export default function TableHeader({ headers, sortConfig, onSort }) {
  return (
    <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
      <tr>
        {headers.map((head) => (
          <th
            key={head.key}
            className="px-4 py-3 font-semibold text-left cursor-pointer select-none"
            onClick={() => onSort(head.key)}
          >
            <div className="flex items-center gap-1">
              {head.label}
              {sortConfig.key === head.key ? (
                sortConfig.direction === "asc" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )
              ) : null}
            </div>
          </th>
        ))}
        <th className="px-4 py-3 text-right">Actions</th>
      </tr>
    </thead>
  );
}
