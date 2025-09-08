// import React, { useState } from "react";

// const ProjectLevelDetails = () => {
//   const [selectedProject, setSelectedProject] = useState("TEST");
//   const [enableRFID, setEnableRFID] = useState(false);
//   const [scanMode, setScanMode] = useState("RFID");

//   // Fake hierarchical data
//   const hierarchy = {
//     Tower: {
//       "Wing A": ["Basement-1", "Basement-2"],
//       "Wing B": ["Basement-3", "Basement-4"],
//     },
//     Floor: {
//       "Basement-1": ["Flat-101", "Flat-102"],
//       "Basement-2": ["Flat-201", "Flat-202"],
//       "Basement-3": ["Flat-301"],
//       "Basement-4": ["Flat-401", "Flat-402"],
//     },
//     Flat: {
//       "Flat-101": ["Room-1", "Room-2"],
//       "Flat-102": ["Room-3"],
//       "Flat-201": ["Room-4"],
//       "Flat-202": ["Room-5", "Room-6"],
//       "Flat-301": ["Room-7"],
//       "Flat-401": ["Room-8"],
//       "Flat-402": ["Room-9"],
//     },
//     Room: {
//       "Room-1": ["Unit-1"],
//       "Room-2": ["Unit-2", "Unit-3"],
//       "Room-3": ["Unit-4"],
//       "Room-4": ["Unit-5"],
//       "Room-5": ["Unit-6"],
//     },
//     Unit: {
//       "Unit-1": ["FU-1"],
//       "Unit-2": ["FU-2"],
//       "Unit-3": ["FU-3"],
//       "Unit-4": ["FU-4"],
//     },
//   };

//   // State for each level
//   const [levels, setLevels] = useState({
//     Tower: { select: "", list: [] },
//     Floor: { select: "", list: [] },
//     Flat: { select: "", list: [] },
//     Room: { select: "", list: [] },
//     Unit: { select: "", list: [] },
//     FurtherUnit: { select: "", list: [] },
//   });

//   // Handle Add >>
//   const handleAdd = (level) => {
//     const { select, list } = levels[level];
//     if (select && !list.includes(select)) {
//       setLevels((prev) => ({
//         ...prev,
//         [level]: { select: "", list: [...list, select] },
//       }));
//     }
//   };

//   // Handle Remove <<
//   const handleRemove = (level, item) => {
//     setLevels((prev) => {
//       const updated = {
//         ...prev,
//         [level]: {
//           ...prev[level],
//           list: prev[level].list.filter((x) => x !== item),
//         },
//       };

//       // Reset dependent levels if parent removed
//       const order = ["Tower", "Floor", "Flat", "Room", "Unit", "FurtherUnit"];
//       const idx = order.indexOf(level);
//       for (let i = idx + 1; i < order.length; i++) {
//         updated[order[i]] = { select: "", list: [] };
//       }
//       return updated;
//     });
//   };

//   // Get available options based on hierarchy
//   const getOptions = (level) => {
//     if (level === "Tower") {
//       return Object.keys(hierarchy.Tower);
//     }
//     if (level === "Floor") {
//       const tower = levels.Tower.list[0];
//       return tower ? hierarchy.Tower[tower] : [];
//     }
//     if (level === "Flat") {
//       const floor = levels.Floor.list[0];
//       return floor ? hierarchy.Floor[floor] : [];
//     }
//     if (level === "Room") {
//       const flat = levels.Flat.list[0];
//       return flat ? hierarchy.Flat[flat] : [];
//     }
//     if (level === "Unit") {
//       const room = levels.Room.list[0];
//       return room ? hierarchy.Room[room] : [];
//     }
//     if (level === "FurtherUnit") {
//       const unit = levels.Unit.list[0];
//       return unit ? hierarchy.Unit[unit] : [];
//     }
//     return [];
//   };

//   const order = ["Tower", "Floor", "Flat", "Room", "Unit", "FurtherUnit"];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="bg-white shadow-lg rounded-2xl p-6 max-w-6xl mx-auto">
//         {/* Top controls */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Select Project
//             </label>
//             <select
//               value={selectedProject}
//               onChange={(e) => setSelectedProject(e.target.value)}
//               className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="TEST">TEST</option>
//               <option value="ALPHA">ALPHA</option>
//               <option value="BETA">BETA</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Project(Code)
//             </label>
//             <div className="mt-2 font-semibold text-gray-800">
//               {selectedProject} ({selectedProject})
//             </div>
//           </div>

//           <div className="flex flex-col justify-center space-y-2">
//             <div className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={enableRFID}
//                 onChange={(e) => setEnableRFID(e.target.checked)}
//               />
//               <label className="text-sm text-gray-600">
//                 Enable RFID/Barcode
//               </label>
//             </div>
//             <div className="flex items-center gap-4">
//               <label className="text-sm font-medium text-gray-600">
//                 Scan Mode:
//               </label>
//               <label className="flex items-center gap-1 text-sm">
//                 <input
//                   type="radio"
//                   value="RFID"
//                   checked={scanMode === "RFID"}
//                   onChange={(e) => setScanMode(e.target.value)}
//                 />
//                 RFID
//               </label>
//               <label className="flex items-center gap-1 text-sm">
//                 <input
//                   type="radio"
//                   value="Barcode"
//                   checked={scanMode === "Barcode"}
//                   onChange={(e) => setScanMode(e.target.value)}
//                 />
//                 Barcode
//               </label>
//             </div>
//           </div>
//         </div>

//         {/* Levels */}
//         <div className="space-y-6">
//           {order.map((level) => (
//             <div key={level} className="bg-gray-50 p-4 rounded-lg shadow-md">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 {level}
//               </label>
//               <div className="flex gap-2">
//                 <select
//                   value={levels[level].select}
//                   onChange={(e) =>
//                     setLevels((prev) => ({
//                       ...prev,
//                       [level]: { ...prev[level], select: e.target.value },
//                     }))
//                   }
//                   className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
//                   disabled={getOptions(level).length === 0}
//                 >
//                   <option value="">-- Please Select --</option>
//                   {getOptions(level).map((opt, idx) => (
//                     <option key={idx} value={opt}>
//                       {opt}
//                     </option>
//                   ))}
//                 </select>

//                 <button
//                   type="button"
//                   onClick={() => handleAdd(level)}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
//                   disabled={!levels[level].select}
//                 >
//                   Add &gt;&gt;
//                 </button>
//               </div>

//               <ul className="mt-3 max-h-32 overflow-y-auto border rounded-lg p-2 bg-white">
//                 {levels[level].list.length === 0 && (
//                   <li className="text-sm text-gray-500">No {level} added</li>
//                 )}
//                 {levels[level].list.map((item, i) => (
//                   <li
//                     key={i}
//                     className="flex justify-between items-center text-sm border-b py-1"
//                   >
//                     <span>{item}</span>
//                     <button
//                       type="button"
//                       onClick={() => handleRemove(level, item)}
//                       className="text-red-600 hover:underline text-xs"
//                     >
//                       Remove &lt;&lt;
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectLevelDetails;

// ==============================

// import React, { useState } from "react";

// const ProjectLevelDetails = () => {
//   const [selectedProject, setSelectedProject] = useState("");
//   const [enableRFID, setEnableRFID] = useState(false);
//   const [scanMode, setScanMode] = useState("RFID");

//   // Fake hierarchy data
//   const hierarchy = {
//     Tower: {
//       "Wing A": ["Basement-1", "Basement-2"],
//       "Wing B": ["Basement-3", "Basement-4"],
//     },
//     Floor: {
//       "Basement-1": ["Flat-101", "Flat-102"],
//       "Basement-2": ["Flat-201", "Flat-202"],
//       "Basement-3": ["Flat-301"],
//       "Basement-4": ["Flat-401", "Flat-402"],
//     },
//     Flat: {
//       "Flat-101": ["Room-1", "Room-2"],
//       "Flat-102": ["Room-3"],
//       "Flat-201": ["Room-4"],
//       "Flat-202": ["Room-5", "Room-6"],
//     },
//     Room: {
//       "Room-1": ["Unit-1"],
//       "Room-2": ["Unit-2", "Unit-3"],
//       "Room-3": ["Unit-4"],
//     },
//     Unit: {
//       "Unit-1": ["FU-1"],
//       "Unit-2": ["FU-2"],
//       "Unit-3": ["FU-3"],
//       "Unit-4": ["FU-4"],
//     },
//   };

//   const [levels, setLevels] = useState({
//     Tower: { select: "", list: [] },
//     Floor: { select: "", list: [] },
//     Flat: { select: "", list: [] },
//     Room: { select: "", list: [] },
//     Unit: { select: "", list: [] },
//     FurtherUnit: { select: "", list: [] },
//   });

//   const handleAdd = (level) => {
//     const { select, list } = levels[level];
//     if (select && !list.includes(select)) {
//       setLevels((prev) => ({
//         ...prev,
//         [level]: { select: "", list: [...list, select] },
//       }));
//     }
//   };

//   const handleRemove = (level, item) => {
//     setLevels((prev) => {
//       const updated = {
//         ...prev,
//         [level]: {
//           ...prev[level],
//           list: prev[level].list.filter((x) => x !== item),
//         },
//       };
//       const order = ["Tower", "Floor", "Flat", "Room", "Unit", "FurtherUnit"];
//       const idx = order.indexOf(level);
//       for (let i = idx + 1; i < order.length; i++) {
//         updated[order[i]] = { select: "", list: [] };
//       }
//       return updated;
//     });
//   };

//   const getOptions = (level) => {
//     if (level === "Tower") return Object.keys(hierarchy.Tower);
//     if (level === "Floor") {
//       const tower = levels.Tower.list[0];
//       return tower ? hierarchy.Tower[tower] : [];
//     }
//     if (level === "Flat") {
//       const floor = levels.Floor.list[0];
//       return floor ? hierarchy.Floor[floor] : [];
//     }
//     if (level === "Room") {
//       const flat = levels.Flat.list[0];
//       return flat ? hierarchy.Flat[flat] : [];
//     }
//     if (level === "Unit") {
//       const room = levels.Room.list[0];
//       return room ? hierarchy.Room[room] : [];
//     }
//     if (level === "FurtherUnit") {
//       const unit = levels.Unit.list[0];
//       return unit ? hierarchy.Unit[unit] : [];
//     }
//     return [];
//   };

//   const order = ["Tower", "Floor", "Flat", "Room", "Unit", "FurtherUnit"];

//   const handleClearAll = () => {
//     setLevels({
//       Tower: { select: "", list: [] },
//       Floor: { select: "", list: [] },
//       Flat: { select: "", list: [] },
//       Room: { select: "", list: [] },
//       Unit: { select: "", list: [] },
//       FurtherUnit: { select: "", list: [] },
//     });
//   };

//   return (
//     <div className=" bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen">
//       <div className="bg-white shadow-xl rounded-2xl p-6 max-w-6xl mx-auto">
//         {/* Top controls */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Select Project
//             </label>
//             <select
//               value={selectedProject}
//               onChange={(e) => setSelectedProject(e.target.value)}
//               className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 bg-gray-50"
//             >
//               <option value="">-- Choose Project --</option>
//               <option value="TEST">TEST</option>
//               <option value="ALPHA">ALPHA</option>
//               <option value="BETA">BETA</option>
//             </select>
//           </div>

//           {selectedProject && (
//             <>
//               <div>
//                 <label className="block text-sm font-medium text-gray-600">
//                   Project(Code)
//                 </label>
//                 <div className="mt-2 font-semibold text-gray-800">
//                   {selectedProject} ({selectedProject})
//                 </div>
//               </div>

//               <div className="flex flex-col justify-center space-y-2">
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     checked={enableRFID}
//                     onChange={(e) => setEnableRFID(e.target.checked)}
//                   />
//                   <label className="text-sm text-gray-600">
//                     Enable RFID/Barcode
//                   </label>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <label className="text-sm font-medium text-gray-600">
//                     Scan Mode:
//                   </label>
//                   <label className="flex items-center gap-1 text-sm">
//                     <input
//                       type="radio"
//                       value="RFID"
//                       checked={scanMode === "RFID"}
//                       onChange={(e) => setScanMode(e.target.value)}
//                     />
//                     RFID
//                   </label>
//                   <label className="flex items-center gap-1 text-sm">
//                     <input
//                       type="radio"
//                       value="Barcode"
//                       checked={scanMode === "Barcode"}
//                       onChange={(e) => setScanMode(e.target.value)}
//                     />
//                     Barcode
//                   </label>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>

//         {/* Levels (only show if project selected) */}
//         {selectedProject && (
//           <>
//             <div className="space-y-6">
//               {order.map((level) => (
//                 <div
//                   key={level}
//                   className="bg-gray-50 p-4 rounded-xl shadow-md hover:shadow-lg transition"
//                 >
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     {level}
//                   </label>
//                   <div className="flex gap-2">
//                     <select
//                       value={levels[level].select}
//                       onChange={(e) =>
//                         setLevels((prev) => ({
//                           ...prev,
//                           [level]: { ...prev[level], select: e.target.value },
//                         }))
//                       }
//                       className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 bg-white"
//                       disabled={getOptions(level).length === 0}
//                     >
//                       <option value="">-- Please Select --</option>
//                       {getOptions(level).map((opt, idx) => (
//                         <option key={idx} value={opt}>
//                           {opt}
//                         </option>
//                       ))}
//                     </select>

//                     <button
//                       type="button"
//                       onClick={() => handleAdd(level)}
//                       className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-indigo-600 hover:to-blue-700 transition disabled:opacity-50"
//                       disabled={!levels[level].select}
//                     >
//                       Add &gt;&gt;
//                     </button>
//                   </div>

//                   {/* Selected List */}
//                   <div className="mt-3 flex flex-wrap gap-2">
//                     {levels[level].list.length === 0 && (
//                       <span className="text-sm text-gray-400 italic">
//                         No {level} added
//                       </span>
//                     )}
//                     {levels[level].list.map((item, i) => (
//                       <span
//                         key={i}
//                         className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm shadow-sm"
//                       >
//                         {item}
//                         <button
//                           type="button"
//                           onClick={() => handleRemove(level, item)}
//                           className="text-red-600 hover:text-red-800 text-xs"
//                         >
//                           ✕
//                         </button>
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Clear All Button */}
//             <div className="mt-8 flex justify-center">
//               <button
//                 type="button"
//                 onClick={handleClearAll}
//                 className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
//               >
//                 Clear All
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectLevelDetails;

// ============================

// import React, { useState } from "react";

// const ProjectLevelDetails = () => {
//   const [selectedProject, setSelectedProject] = useState("");
//   const [enableRFID, setEnableRFID] = useState(false);
//   const [scanMode, setScanMode] = useState("RFID");

//   // Hierarchy data (editable with custom entries)
//   const [hierarchy, setHierarchy] = useState({
//     Tower: {
//       "Wing A": ["Basement-1", "Basement-2"],
//       "Wing B": ["Basement-3", "Basement-4"],
//     },
//     Floor: {
//       "Basement-1": ["Flat-101", "Flat-102"],
//       "Basement-2": ["Flat-201", "Flat-202"],
//       "Basement-3": ["Flat-301"],
//       "Basement-4": ["Flat-401", "Flat-402"],
//     },
//     Flat: {
//       "Flat-101": ["Room-1", "Room-2"],
//       "Flat-102": ["Room-3"],
//       "Flat-201": ["Room-4"],
//       "Flat-202": ["Room-5", "Room-6"],
//     },
//     Room: {
//       "Room-1": ["Unit-1"],
//       "Room-2": ["Unit-2", "Unit-3"],
//       "Room-3": ["Unit-4"],
//     },
//     Unit: {
//       "Unit-1": ["FU-1"],
//       "Unit-2": ["FU-2"],
//       "Unit-3": ["FU-3"],
//       "Unit-4": ["FU-4"],
//     },
//   });

//   const [levels, setLevels] = useState({
//     Tower: { select: "", list: [] },
//     Floor: { select: "", list: [] },
//     Flat: { select: "", list: [] },
//     Room: { select: "", list: [] },
//     Unit: { select: "", list: [] },
//     FurtherUnit: { select: "", list: [] },
//   });

//   const [newEntry, setNewEntry] = useState({
//     Tower: "",
//     Floor: "",
//     Flat: "",
//     Room: "",
//     Unit: "",
//     FurtherUnit: "",
//   });

//   const order = ["Tower", "Floor", "Flat", "Room", "Unit", "FurtherUnit"];

//   const handleAdd = (level) => {
//     const { select, list } = levels[level];
//     if (select && !list.includes(select)) {
//       setLevels((prev) => ({
//         ...prev,
//         [level]: { select: "", list: [...list, select] },
//       }));
//     }
//   };

//   const handleRemove = (level, item) => {
//     setLevels((prev) => {
//       const updated = {
//         ...prev,
//         [level]: {
//           ...prev[level],
//           list: prev[level].list.filter((x) => x !== item),
//         },
//       };
//       const idx = order.indexOf(level);
//       for (let i = idx + 1; i < order.length; i++) {
//         updated[order[i]] = { select: "", list: [] };
//       }
//       return updated;
//     });
//   };

//   // Add custom entry (immediately select + save in hierarchy)
//   const handleAddCustom = (level) => {
//     const value = newEntry[level].trim();
//     if (!value) return;

//     const parentIdx = order.indexOf(level) - 1;

//     setHierarchy((prev) => {
//       const updated = { ...prev };

//       if (level === "Tower") {
//         if (!updated.Tower[value]) updated.Tower[value] = [];
//       } else {
//         const parentLevel = order[parentIdx];
//         const parent = levels[parentLevel].list[0];
//         if (parent) {
//           if (!updated[level][parent]) updated[level][parent] = [];
//           if (!updated[level][parent].includes(value)) {
//             updated[level][parent].push(value);
//           }
//         }
//       }
//       return updated;
//     });

//     // Auto add to selected list
//     setLevels((prev) => ({
//       ...prev,
//       [level]: {
//         select: "",
//         list: prev[level].list.includes(value)
//           ? prev[level].list
//           : [...prev[level].list, value],
//       },
//     }));

//     setNewEntry((prev) => ({ ...prev, [level]: "" }));
//   };

//   const getOptions = (level) => {
//     if (level === "Tower") return Object.keys(hierarchy.Tower);
//     if (level === "Floor") {
//       const tower = levels.Tower.list[0];
//       return tower ? hierarchy.Tower[tower] || [] : [];
//     }
//     if (level === "Flat") {
//       const floor = levels.Floor.list[0];
//       return floor ? hierarchy.Floor[floor] || [] : [];
//     }
//     if (level === "Room") {
//       const flat = levels.Flat.list[0];
//       return flat ? hierarchy.Flat[flat] || [] : [];
//     }
//     if (level === "Unit") {
//       const room = levels.Room.list[0];
//       return room ? hierarchy.Room[room] || [] : [];
//     }
//     if (level === "FurtherUnit") {
//       const unit = levels.Unit.list[0];
//       return unit ? hierarchy.Unit[unit] || [] : [];
//     }
//     return [];
//   };

//   const handleClearAll = () => {
//     setLevels({
//       Tower: { select: "", list: [] },
//       Floor: { select: "", list: [] },
//       Flat: { select: "", list: [] },
//       Room: { select: "", list: [] },
//       Unit: { select: "", list: [] },
//       FurtherUnit: { select: "", list: [] },
//     });
//   };

//   return (
//     <div className=" bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen">
//       <div className="bg-white shadow-xl rounded-2xl p-6 max-w-6xl mx-auto">
//         {/* Top controls */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Select Project
//             </label>
//             <select
//               value={selectedProject}
//               onChange={(e) => setSelectedProject(e.target.value)}
//               className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 bg-gray-50"
//             >
//               <option value="">-- Choose Project --</option>
//               <option value="TEST">TEST</option>
//               <option value="ALPHA">ALPHA</option>
//               <option value="BETA">BETA</option>
//             </select>
//           </div>

//           {selectedProject && (
//             <>
//               <div>
//                 <label className="block text-sm font-medium text-gray-600">
//                   Project(Code)
//                 </label>
//                 <div className="mt-2 font-semibold text-gray-800">
//                   {selectedProject} ({selectedProject})
//                 </div>
//               </div>

//               <div className="flex flex-col justify-center space-y-2">
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     checked={enableRFID}
//                     onChange={(e) => setEnableRFID(e.target.checked)}
//                   />
//                   <label className="text-sm text-gray-600">
//                     Enable RFID/Barcode
//                   </label>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <label className="text-sm font-medium text-gray-600">
//                     Scan Mode:
//                   </label>
//                   <label className="flex items-center gap-1 text-sm">
//                     <input
//                       type="radio"
//                       value="RFID"
//                       checked={scanMode === "RFID"}
//                       onChange={(e) => setScanMode(e.target.value)}
//                     />
//                     RFID
//                   </label>
//                   <label className="flex items-center gap-1 text-sm">
//                     <input
//                       type="radio"
//                       value="Barcode"
//                       checked={scanMode === "Barcode"}
//                       onChange={(e) => setScanMode(e.target.value)}
//                     />
//                     Barcode
//                   </label>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>

//         {/* Levels */}
//         {selectedProject && (
//           <>
//             <div className="space-y-6">
//               {order.map((level) => (
//                 <div
//                   key={level}
//                   className="bg-gray-50 p-4 rounded-xl shadow-md hover:shadow-lg transition"
//                 >
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     {level}
//                   </label>
//                   <div className="flex gap-2">
//                     <select
//                       value={levels[level].select}
//                       onChange={(e) =>
//                         setLevels((prev) => ({
//                           ...prev,
//                           [level]: { ...prev[level], select: e.target.value },
//                         }))
//                       }
//                       className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 bg-white"
//                       disabled={getOptions(level).length === 0}
//                     >
//                       <option value="">-- Please Select --</option>
//                       {getOptions(level).map((opt, idx) => (
//                         <option key={idx} value={opt}>
//                           {opt}
//                         </option>
//                       ))}
//                     </select>

//                     <button
//                       type="button"
//                       onClick={() => handleAdd(level)}
//                       className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-indigo-600 hover:to-blue-700 transition disabled:opacity-50"
//                       disabled={!levels[level].select}
//                     >
//                       Add &gt;&gt;
//                     </button>
//                   </div>

//                   {/* Custom input */}
//                   <div className="flex gap-2 mt-2">
//                     <input
//                       type="text"
//                       value={newEntry[level]}
//                       onChange={(e) =>
//                         setNewEntry((prev) => ({
//                           ...prev,
//                           [level]: e.target.value,
//                         }))
//                       }
//                       placeholder={`Add new ${level}`}
//                       className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => handleAddCustom(level)}
//                       className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
//                     >
//                       Add New
//                     </button>
//                   </div>

//                   {/* Selected List */}
//                   <div className="mt-3 flex flex-wrap gap-2">
//                     {levels[level].list.length === 0 && (
//                       <span className="text-sm text-gray-400 italic">
//                         No {level} added
//                       </span>
//                     )}
//                     {levels[level].list.map((item, i) => (
//                       <span
//                         key={i}
//                         className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm shadow-sm"
//                       >
//                         {item}
//                         <button
//                           type="button"
//                           onClick={() => handleRemove(level, item)}
//                           className="text-red-600 hover:text-red-800 text-xs"
//                         >
//                           ✕
//                         </button>
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Clear All */}
//             <div className="mt-8 flex justify-center">
//               <button
//                 type="button"
//                 onClick={handleClearAll}
//                 className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
//               >
//                 Clear All
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectLevelDetails;

// =========================================

// import React, { useState } from "react";

// const ProjectLevelDetails = () => {
//   const [selectedProject, setSelectedProject] = useState("");
//   const [enableRFID, setEnableRFID] = useState(false);
//   const [scanMode, setScanMode] = useState("RFID");

//   // Fake hierarchy (initial data)
//   const [hierarchy, setHierarchy] = useState({
//     Tower: {
//       "Wing A": ["Basement-1", "Basement-2"],
//       "Wing B": ["Basement-3", "Basement-4"],
//     },
//     Floor: {
//       "Basement-1": ["Flat-101", "Flat-102"],
//       "Basement-2": ["Flat-201", "Flat-202"],
//       "Basement-3": ["Flat-301"],
//       "Basement-4": ["Flat-401", "Flat-402"],
//     },
//     Flat: {
//       "Flat-101": ["Room-1", "Room-2"],
//       "Flat-102": ["Room-3"],
//       "Flat-201": ["Room-4"],
//       "Flat-202": ["Room-5", "Room-6"],
//     },
//     Room: {
//       "Room-1": ["Unit-1"],
//       "Room-2": ["Unit-2", "Unit-3"],
//       "Room-3": ["Unit-4"],
//     },
//     Unit: {
//       "Unit-1": ["FU-1"],
//       "Unit-2": ["FU-2"],
//       "Unit-3": ["FU-3"],
//       "Unit-4": ["FU-4"],
//     },
//     FurtherUnit: {},
//   });

//   const [levels, setLevels] = useState({
//     Tower: { select: "", list: [] },
//     Floor: { select: "", list: [] },
//     Flat: { select: "", list: [] },
//     Room: { select: "", list: [] },
//     Unit: { select: "", list: [] },
//     FurtherUnit: { select: "", list: [] },
//   });

//   const [newInputs, setNewInputs] = useState({
//     Tower: "",
//     Floor: "",
//     Flat: "",
//     Room: "",
//     Unit: "",
//     FurtherUnit: "",
//   });

//   const order = ["Tower", "Floor", "Flat", "Room", "Unit", "FurtherUnit"];

//   // --- Add selected value ---
//   const handleAdd = (level) => {
//     const { select, list } = levels[level];
//     if (select && !list.includes(select)) {
//       setLevels((prev) => ({
//         ...prev,
//         [level]: { select: "", list: [...list, select] },
//       }));
//     }
//   };

//   // --- Remove selected value ---
//   const handleRemove = (level, item) => {
//     setLevels((prev) => ({
//       ...prev,
//       [level]: {
//         ...prev[level],
//         list: prev[level].list.filter((x) => x !== item),
//       },
//     }));
//   };

//   // --- Add new custom value ---
//   const handleAddNew = (level) => {
//     const newValue = newInputs[level].trim();
//     if (!newValue) return;

//     const idx = order.indexOf(level);
//     const parentLevel = order[idx - 1];

//     setHierarchy((prev) => {
//       const updated = { ...prev };

//       if (parentLevel) {
//         // insert under all selected parents
//         levels[parentLevel].list.forEach((parent) => {
//           if (!updated[level][parent]) updated[level][parent] = [];
//           if (!updated[level][parent].includes(newValue)) {
//             updated[level][parent] = [...updated[level][parent], newValue];
//           }
//         });
//       } else {
//         // top-level (Tower)
//         if (!updated[level][newValue]) {
//           updated[level][newValue] = [];
//         }
//       }

//       return updated;
//     });

//     // auto add to current level list
//     setLevels((prev) => ({
//       ...prev,
//       [level]: {
//         select: "",
//         list: [...prev[level].list, newValue],
//       },
//     }));

//     // clear input
//     setNewInputs((prev) => ({ ...prev, [level]: "" }));
//   };

//   // --- Get dropdown options for each level ---
//   const getOptions = (level) => {
//     if (level === "Tower") return Object.keys(hierarchy.Tower);

//     const idx = order.indexOf(level);
//     const parentLevel = order[idx - 1];
//     if (!parentLevel) return [];

//     const parents = levels[parentLevel].list;
//     if (parents.length === 0) return [];

//     const childOptions = parents.flatMap(
//       (p) => hierarchy[parentLevel][p] || []
//     );
//     return [...new Set(childOptions)]; // unique values
//   };

//   // --- Clear all ---
//   const handleClearAll = () => {
//     setLevels({
//       Tower: { select: "", list: [] },
//       Floor: { select: "", list: [] },
//       Flat: { select: "", list: [] },
//       Room: { select: "", list: [] },
//       Unit: { select: "", list: [] },
//       FurtherUnit: { select: "", list: [] },
//     });
//   };

//   return (
//     <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen">
//       <div className="bg-white shadow-xl rounded-2xl p-6 max-w-6xl mx-auto">
//         {/* Top controls */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Select Project
//             </label>
//             <select
//               value={selectedProject}
//               onChange={(e) => setSelectedProject(e.target.value)}
//               className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 bg-gray-50"
//             >
//               <option value="">-- Choose Project --</option>
//               <option value="TEST">TEST</option>
//               <option value="ALPHA">ALPHA</option>
//               <option value="BETA">BETA</option>
//             </select>
//           </div>

//           {selectedProject && (
//             <>
//               <div>
//                 <label className="block text-sm font-medium text-gray-600">
//                   Project(Code)
//                 </label>
//                 <div className="mt-2 font-semibold text-gray-800">
//                   {selectedProject} ({selectedProject})
//                 </div>
//               </div>

//               <div className="flex flex-col justify-center space-y-2">
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     checked={enableRFID}
//                     onChange={(e) => setEnableRFID(e.target.checked)}
//                   />
//                   <label className="text-sm text-gray-600">
//                     Enable RFID/Barcode
//                   </label>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <label className="text-sm font-medium text-gray-600">
//                     Scan Mode:
//                   </label>
//                   <label className="flex items-center gap-1 text-sm">
//                     <input
//                       type="radio"
//                       value="RFID"
//                       checked={scanMode === "RFID"}
//                       onChange={(e) => setScanMode(e.target.value)}
//                     />
//                     RFID
//                   </label>
//                   <label className="flex items-center gap-1 text-sm">
//                     <input
//                       type="radio"
//                       value="Barcode"
//                       checked={scanMode === "Barcode"}
//                       onChange={(e) => setScanMode(e.target.value)}
//                     />
//                     Barcode
//                   </label>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>

//         {/* Levels (only show if project selected) */}
//         {selectedProject && (
//           <>
//             <div className="space-y-6">
//               {order.map((level) => (
//                 <div
//                   key={level}
//                   className="bg-gray-50 p-4 rounded-xl shadow-md hover:shadow-lg transition"
//                 >
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     {level}
//                   </label>
//                   <div className="flex flex-col md:flex-row gap-2">
//                     {/* Dropdown */}
//                     <select
//                       value={levels[level].select}
//                       onChange={(e) =>
//                         setLevels((prev) => ({
//                           ...prev,
//                           [level]: { ...prev[level], select: e.target.value },
//                         }))
//                       }
//                       className="flex-1 border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 bg-white"
//                       disabled={getOptions(level).length === 0}
//                     >
//                       <option value="">-- Please Select --</option>
//                       {getOptions(level).map((opt, idx) => (
//                         <option key={idx} value={opt}>
//                           {opt}
//                         </option>
//                       ))}
//                     </select>

//                     {/* Add >> button */}
//                     <button
//                       type="button"
//                       onClick={() => handleAdd(level)}
//                       className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-indigo-600 hover:to-blue-700 transition disabled:opacity-50"
//                       disabled={!levels[level].select}
//                     >
//                       Add &gt;&gt;
//                     </button>
//                   </div>

//                   {/* Add New Input */}
//                   <div className="flex gap-2 mt-3">
//                     <input
//                       type="text"
//                       value={newInputs[level]}
//                       onChange={(e) =>
//                         setNewInputs((prev) => ({
//                           ...prev,
//                           [level]: e.target.value,
//                         }))
//                       }
//                       placeholder={`Add new ${level}`}
//                       className="flex-1 border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => handleAddNew(level)}
//                       className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
//                     >
//                       Add New
//                     </button>
//                   </div>

//                   {/* Selected List */}
//                   <div className="mt-3 flex flex-wrap gap-2">
//                     {levels[level].list.length === 0 && (
//                       <span className="text-sm text-gray-400 italic">
//                         No {level} added
//                       </span>
//                     )}
//                     {levels[level].list.map((item, i) => (
//                       <span
//                         key={i}
//                         className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm shadow-sm"
//                       >
//                         {item}
//                         <button
//                           type="button"
//                           onClick={() => handleRemove(level, item)}
//                           className="text-red-600 hover:text-red-800 text-xs"
//                         >
//                           ✕
//                         </button>
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Clear All Button */}
//             <div className="mt-8 flex justify-center">
//               <button
//                 type="button"
//                 onClick={handleClearAll}
//                 className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
//               >
//                 Clear All
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectLevelDetails;

// ============ =========== ============== ==================
// import React, { useState } from "react";

// const ProjectLevelDetails = () => {
//   const [selectedProject, setSelectedProject] = useState("");

//   const [hierarchy, setHierarchy] = useState({
//     Tower: {
//       "Wing A": ["Basement-1", "Basement-2"],
//       "Wing B": ["Basement-3", "Basement-4"],
//     },
//     Floor: {
//       "Basement-1": ["Flat-101", "Flat-102"],
//       "Basement-2": ["Flat-201", "Flat-202"],
//       "Basement-3": ["Flat-301"],
//       "Basement-4": ["Flat-401", "Flat-402"],
//     },
//     Flat: {
//       "Flat-101": ["Room-1", "Room-2"],
//       "Flat-102": ["Room-3"],
//       "Flat-201": ["Room-4"],
//       "Flat-202": ["Room-5", "Room-6"],
//     },
//     Room: {
//       "Room-1": ["Unit-1"],
//       "Room-2": ["Unit-2", "Unit-3"],
//       "Room-3": ["Unit-4"],
//     },
//     Unit: {
//       "Unit-1": ["FU-1"],
//       "Unit-2": ["FU-2"],
//       "Unit-3": ["FU-3"],
//       "Unit-4": ["FU-4"],
//     },
//     FurtherUnit: {},
//   });

//   const [selected, setSelected] = useState({
//     Tower: [],
//     Floor: [],
//     Flat: [],
//     Room: [],
//     Unit: [],
//     FurtherUnit: [],
//   });

//   const [inputs, setInputs] = useState({
//     Tower: "",
//     Floor: "",
//     Flat: "",
//     Room: "",
//     Unit: "",
//     FurtherUnit: "",
//   });

//   // Handle dropdown change (multi-select support)
//   const handleSelect = (level, value) => {
//     setSelected((prev) => ({
//       ...prev,
//       [level]: prev[level].includes(value)
//         ? prev[level].filter((v) => v !== value)
//         : [...prev[level], value],
//     }));
//   };

//   // Add new value logic
//   const handleAddNew = (level) => {
//     const newValue = inputs[level].trim();
//     if (!newValue) return;

//     setHierarchy((prev) => {
//       const updated = { ...prev };

//       if (level === "Tower") {
//         updated.Tower[newValue] = [];
//       } else {
//         const parentLevel =
//           Object.keys(hierarchy)[Object.keys(hierarchy).indexOf(level) - 1];
//         selected[parentLevel].forEach((parent) => {
//           if (!updated[level][parent]) updated[level][parent] = [];
//           updated[level][parent] = [...updated[level][parent], newValue];
//         });
//         if (!updated[level][newValue]) updated[level][newValue] = [];
//       }

//       return updated;
//     });

//     setSelected((prev) => ({
//       ...prev,
//       [level]: [...prev[level], newValue],
//     }));

//     setInputs((prev) => ({ ...prev, [level]: "" }));
//   };

//   // Clear selection
//   const handleClear = (level) => {
//     setSelected((prev) => ({ ...prev, [level]: [] }));
//   };

//   // Get options for dropdowns
//   const getOptions = (level) => {
//     if (level === "Tower") return Object.keys(hierarchy.Tower);

//     const parentLevel =
//       Object.keys(hierarchy)[Object.keys(hierarchy).indexOf(level) - 1];
//     const parents = selected[parentLevel];
//     let options = [];

//     parents.forEach((p) => {
//       if (hierarchy[parentLevel][p]) {
//         options = [...options, ...hierarchy[parentLevel][p]];
//       }
//     });

//     return [...new Set(options)];
//   };

//   const levels = ["Tower", "Floor", "Flat", "Room", "Unit", "FurtherUnit"];

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//         Project Level Details
//       </h2>

//       {/* Project Selector */}
//       <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
//         <label className="block text-gray-700 font-medium mb-2">
//           Select Project
//         </label>
//         <select
//           value={selectedProject}
//           onChange={(e) => setSelectedProject(e.target.value)}
//           className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="">-- Select a Project --</option>
//           <option value="Project Alpha">Project Alpha</option>
//           <option value="Project Beta">Project Beta</option>
//         </select>
//       </div>

//       {/* Hierarchy Fields */}
//       {selectedProject && (
//         <div className="bg-white shadow-lg rounded-2xl p-6 space-y-6">
//           {levels.map((level, i) => (
//             <div
//               key={level}
//               className="border-b pb-4 last:border-none flex flex-col md:flex-row md:items-end md:gap-4"
//             >
//               <div className="flex-1">
//                 <label className="block text-gray-700 font-medium mb-1">
//                   {level}
//                 </label>
//                 <select
//                   multiple
//                   value={selected[level]}
//                   onChange={(e) => handleSelect(level, e.target.value)}
//                   className="w-full border rounded-xl px-3 py-2 h-28 focus:ring-2 focus:ring-blue-500"
//                 >
//                   {getOptions(level).map((opt) => (
//                     <option key={opt} value={opt}>
//                       {opt}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="flex-1">
//                 <label className="block text-gray-700 font-medium mb-1">
//                   Add New {level}
//                 </label>
//                 <input
//                   type="text"
//                   value={inputs[level]}
//                   onChange={(e) =>
//                     setInputs((prev) => ({
//                       ...prev,
//                       [level]: e.target.value,
//                     }))
//                   }
//                   className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                   placeholder={`Enter ${level}`}
//                 />
//               </div>

//               <div className="flex gap-2 mt-3 md:mt-0">
//                 <button
//                   onClick={() => handleAddNew(level)}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700"
//                 >
//                   Add New
//                 </button>
//                 <button
//                   onClick={() => handleClear(level)}
//                   className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl shadow hover:bg-gray-300"
//                 >
//                   Clear
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectLevelDetails;

// ================= ==      =============        ===============    =============

// import React, { useState } from "react";

// const ProjectLevelDetails = () => {
//   const levels = ["Tower", "Floor", "Flat", "Room", "Unit", "FurtherUnit"];
//   const [selectedProject, setSelectedProject] = useState("");

//   const [hierarchy, setHierarchy] = useState({
//     Tower: { "Wing A": [], "Wing B": [] },
//     Floor: {},
//     Flat: {},
//     Room: {},
//     Unit: {},
//     FurtherUnit: {},
//   });

//   const [selected, setSelected] = useState({
//     Tower: [],
//     Floor: [],
//     Flat: [],
//     Room: [],
//     Unit: [],
//     FurtherUnit: [],
//   });

//   const [inputs, setInputs] = useState({
//     Tower: "",
//     Floor: "",
//     Flat: "",
//     Room: "",
//     Unit: "",
//     FurtherUnit: "",
//   });

//   // Get options based on parent selection
//   const getOptions = (level) => {
//     if (level === "Tower") return Object.keys(hierarchy.Tower);
//     const parentLevel = levels[levels.indexOf(level) - 1];
//     const parents = selected[parentLevel];
//     if (!parents?.length) return [];
//     let options = [];
//     parents.forEach((p) => {
//       if (hierarchy[parentLevel][p])
//         options = [...options, ...hierarchy[parentLevel][p]];
//     });
//     return [...new Set(options)];
//   };

//   const handleSelect = (level, value) => {
//     setSelected((prev) => {
//       const updated = { ...prev };
//       updated[level] = prev[level].includes(value)
//         ? prev[level].filter((v) => v !== value)
//         : [...prev[level], value];

//       // Clear all lower levels
//       const index = levels.indexOf(level);
//       for (let i = index + 1; i < levels.length; i++) updated[levels[i]] = [];
//       return updated;
//     });
//   };

//   // Add new value logic
//   const handleAddNew = (level) => {
//     const newValue = inputs[level].trim();
//     if (!newValue) return;

//     const levelIndex = levels.indexOf(level);
//     const parentLevel = levels[levelIndex - 1];

//     setHierarchy((prev) => {
//       const updated = { ...prev };

//       if (level === "Tower") {
//         if (!updated.Tower[newValue]) updated.Tower[newValue] = [];
//       } else {
//         const parents = selected[parentLevel];
//         if (!parents?.length) return prev; // No parent selected

//         // Add new value under selected parents
//         parents.forEach((p) => {
//           if (!updated[parentLevel][p]) updated[parentLevel][p] = [];
//           if (!updated[parentLevel][p].includes(newValue))
//             updated[parentLevel][p].push(newValue);
//         });

//         // Also create an empty key for this new value to hold its children later
//         if (!updated[level][newValue]) updated[level][newValue] = [];
//       }

//       return updated;
//     });

//     // Auto-select the new value and clear lower levels
//     setSelected((prev) => {
//       const updated = { ...prev };
//       updated[level] = [newValue];
//       for (let i = levelIndex + 1; i < levels.length; i++)
//         updated[levels[i]] = [];
//       return updated;
//     });

//     // Clear input
//     setInputs((prev) => ({ ...prev, [level]: "" }));
//   };

//   const handleClear = (level) => {
//     const index = levels.indexOf(level);
//     setSelected((prev) => {
//       const updated = { ...prev };
//       updated[level] = [];
//       for (let i = index + 1; i < levels.length; i++) updated[levels[i]] = [];
//       return updated;
//     });
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//         Project Level Details
//       </h2>

//       {/* Project Selector */}
//       <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
//         <label className="block text-gray-700 font-medium mb-2">
//           Select Project
//         </label>
//         <select
//           value={selectedProject}
//           onChange={(e) => setSelectedProject(e.target.value)}
//           className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="">-- Select a Project --</option>
//           <option value="Project Alpha">Project Alpha</option>
//           <option value="Project Beta">Project Beta</option>
//         </select>
//       </div>

//       {selectedProject && (
//         <div className="bg-white shadow-lg rounded-2xl p-6 space-y-6">
//           {levels.map((level, index) => {
//             if (level !== "Tower" && !selected[levels[index - 1]]?.length)
//               return null;
//             const options = getOptions(level);

//             return (
//               <div
//                 key={level}
//                 className="border-b pb-4 last:border-none flex flex-col md:flex-row md:items-end md:gap-4"
//               >
//                 <div className="flex-1">
//                   <label className="block text-gray-700 font-medium mb-1">
//                     {level}
//                   </label>
//                   <select
//                     multiple
//                     value={selected[level]}
//                     onChange={(e) => handleSelect(level, e.target.value)}
//                     className="w-full border rounded-xl px-3 py-2 h-28 focus:ring-2 focus:ring-blue-200"
//                   >
//                     {options.map((opt) => (
//                       <option key={opt} value={opt}>
//                         {opt}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="flex-1">
//                   <label className="block text-gray-700 font-medium mb-1">
//                     Add New {level}
//                   </label>
//                   <input
//                     type="text"
//                     value={inputs[level]}
//                     onChange={(e) =>
//                       setInputs({ ...inputs, [level]: e.target.value })
//                     }
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter") {
//                         e.preventDefault();
//                         handleAddNew(level);
//                       }
//                     }}
//                     className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                     placeholder={`Enter ${level}`}
//                   />
//                 </div>

//                 <div className="flex gap-2 mt-3 md:mt-0">
//                   <button
//                     onClick={() => handleAddNew(level)}
//                     className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700"
//                   >
//                     Add New
//                   </button>
//                   <button
//                     onClick={() => handleClear(level)}
//                     className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl shadow hover:bg-gray-300"
//                   >
//                     Clear
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectLevelDetails;

// ===========     =================================                             =======================

// import React, { useState } from "react";

// const ProjectLevelDetails = () => {
//   const levels = ["Tower", "Floor", "Flat", "Room", "Unit", "FurtherUnit"];
//   const [selectedProject, setSelectedProject] = useState("");

//   const [hierarchy, setHierarchy] = useState({
//     Tower: { "Wing A": [], "Wing B": [] },
//     Floor: {},
//     Flat: {},
//     Room: {},
//     Unit: {},
//     FurtherUnit: {},
//   });

//   const [selected, setSelected] = useState({
//     Tower: [],
//     Floor: [],
//     Flat: [],
//     Room: [],
//     Unit: [],
//     FurtherUnit: [],
//   });

//   const [inputs, setInputs] = useState({
//     Tower: "",
//     Floor: "",
//     Flat: "",
//     Room: "",
//     Unit: "",
//     FurtherUnit: "",
//   });

//   // Get options based on parent selection
//   const getOptions = (level) => {
//     if (level === "Tower") return Object.keys(hierarchy.Tower);
//     const parentLevel = levels[levels.indexOf(level) - 1];
//     const parent = selected[parentLevel][0];
//     if (!parent) return [];
//     return hierarchy[parentLevel][parent] || [];
//   };

//   // Handle single-select change
//   const handleSelect = (level, value) => {
//     setSelected((prev) => {
//       const updated = { ...prev };
//       updated[level] = value ? [value] : [];

//       // Clear all lower levels
//       const index = levels.indexOf(level);
//       for (let i = index + 1; i < levels.length; i++) updated[levels[i]] = [];
//       return updated;
//     });
//   };

//   // Add new value logic
//   const handleAddNew = (level) => {
//     const newValue = inputs[level].trim();
//     if (!newValue) return;

//     const levelIndex = levels.indexOf(level);
//     const parentLevel = levels[levelIndex - 1];
//     const parent = selected[parentLevel][0];

//     setHierarchy((prev) => {
//       const updated = { ...prev };

//       if (level === "Tower") {
//         if (!updated.Tower[newValue]) updated.Tower[newValue] = [];
//       } else {
//         if (!parent) return prev; // no parent selected

//         if (!updated[parentLevel][parent]) updated[parentLevel][parent] = [];
//         if (!updated[parentLevel][parent].includes(newValue))
//           updated[parentLevel][parent].push(newValue);

//         // create empty array for this level for future children
//         if (!updated[level][newValue]) updated[level][newValue] = [];
//       }

//       return updated;
//     });

//     // Auto-select the new value and clear lower levels
//     setSelected((prev) => {
//       const updated = { ...prev };
//       updated[level] = [newValue];
//       for (let i = levelIndex + 1; i < levels.length; i++)
//         updated[levels[i]] = [];
//       return updated;
//     });

//     // Clear input
//     setInputs((prev) => ({ ...prev, [level]: "" }));
//   };

//   const handleClear = (level) => {
//     const index = levels.indexOf(level);
//     setSelected((prev) => {
//       const updated = { ...prev };
//       updated[level] = [];
//       for (let i = index + 1; i < levels.length; i++) updated[levels[i]] = [];
//       return updated;
//     });
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//         Project Level Details
//       </h2>

//       {/* Project Selector */}
//       <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
//         <label className="block text-gray-700 font-medium mb-2">
//           Select Project
//         </label>
//         <select
//           value={selectedProject}
//           onChange={(e) => setSelectedProject(e.target.value)}
//           className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="">-- Select a Project --</option>
//           <option value="Project Alpha">Project Alpha</option>
//           <option value="Project Beta">Project Beta</option>
//         </select>
//       </div>

//       {selectedProject && (
//         <div className="bg-white shadow-lg rounded-2xl p-6 space-y-6">
//           {levels.map((level, index) => {
//             if (level !== "Tower" && !selected[levels[index - 1]]?.length)
//               return null;
//             const options = getOptions(level);

//             return (
//               <div
//                 key={level}
//                 className="border-b pb-4 last:border-none flex flex-col md:flex-row md:items-end md:gap-4"
//               >
//                 <div className="flex-1">
//                   <label className="block text-gray-700 font-medium mb-1">
//                     {level}
//                   </label>
//                   <select
//                     value={selected[level][0] || ""}
//                     onChange={(e) => handleSelect(level, e.target.value)}
//                     className="w-full border rounded-xl px-3 py-2 h-12 focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="">-- Select {level} --</option>
//                     {options.map((opt) => (
//                       <option key={opt} value={opt}>
//                         {opt}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="flex-1">
//                   <label className="block text-gray-700 font-medium mb-1">
//                     Add New {level}
//                   </label>
//                   <input
//                     type="text"
//                     value={inputs[level]}
//                     onChange={(e) =>
//                       setInputs({ ...inputs, [level]: e.target.value })
//                     }
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter") {
//                         e.preventDefault();
//                         handleAddNew(level);
//                       }
//                     }}
//                     className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                     placeholder={`Enter ${level}`}
//                   />
//                 </div>

//                 <div className="flex gap-2 mt-3 md:mt-0">
//                   <button
//                     onClick={() => handleAddNew(level)}
//                     className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700"
//                   >
//                     Add New
//                   </button>
//                   <button
//                     onClick={() => handleClear(level)}
//                     className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl shadow hover:bg-gray-300"
//                   >
//                     Clear
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectLevelDetails;

// =========================================== final h niche wala
// import React, { useState } from "react";

// const ProjectLevelDetails = () => {
//   const levels = ["Tower", "Floor", "Flat", "Room", "Unit", "FurtherUnit"];
//   const [selectedProject, setSelectedProject] = useState("");

//   const [hierarchy, setHierarchy] = useState({
//     Tower: { "Wing A": [], "Wing B": [] },
//     Floor: {},
//     Flat: {},
//     Room: {},
//     Unit: {},
//     FurtherUnit: {},
//   });

//   const [selected, setSelected] = useState({
//     Tower: [],
//     Floor: [],
//     Flat: [],
//     Room: [],
//     Unit: [],
//     FurtherUnit: [],
//   });

//   const [inputs, setInputs] = useState({
//     Tower: "",
//     Floor: "",
//     Flat: "",
//     Room: "",
//     Unit: "",
//     FurtherUnit: "",
//   });

//   // Get options based on parent selection
//   const getOptions = (level) => {
//     if (level === "Tower") return Object.keys(hierarchy.Tower);
//     const parentLevel = levels[levels.indexOf(level) - 1];
//     const parent = selected[parentLevel][0];
//     if (!parent) return [];
//     return hierarchy[parentLevel][parent] || [];
//   };

//   // Handle single-select change
//   const handleSelect = (level, value) => {
//     setSelected((prev) => {
//       const updated = { ...prev };
//       updated[level] = value ? [value] : [];

//       // Clear all lower levels
//       const index = levels.indexOf(level);
//       for (let i = index + 1; i < levels.length; i++) updated[levels[i]] = [];
//       return updated;
//     });
//   };

//   // Add new value logic (Tower fixed)
//   const handleAddNew = (level) => {
//     const newValue = inputs[level].trim();
//     if (!newValue) return;

//     const levelIndex = levels.indexOf(level);

//     setHierarchy((prev) => {
//       const updated = { ...prev };

//       if (level === "Tower") {
//         // Add new Tower
//         if (!updated.Tower[newValue]) updated.Tower[newValue] = [];
//       } else {
//         const parentLevel = levels[levelIndex - 1];
//         const parent = selected[parentLevel][0];
//         if (!parent) return prev; // no parent selected

//         if (!updated[parentLevel][parent]) updated[parentLevel][parent] = [];
//         if (!updated[parentLevel][parent].includes(newValue))
//           updated[parentLevel][parent].push(newValue);

//         // also create empty array for this new child
//         if (!updated[level][newValue]) updated[level][newValue] = [];
//       }

//       return updated;
//     });

//     // Auto-select the new value and clear lower levels
//     setSelected((prev) => {
//       const updated = { ...prev };
//       updated[level] = [newValue];
//       for (let i = levelIndex + 1; i < levels.length; i++)
//         updated[levels[i]] = [];
//       return updated;
//     });

//     // Clear input
//     setInputs((prev) => ({ ...prev, [level]: "" }));
//   };

//   const handleClear = (level) => {
//     const index = levels.indexOf(level);
//     setSelected((prev) => {
//       const updated = { ...prev };
//       updated[level] = [];
//       for (let i = index + 1; i < levels.length; i++) updated[levels[i]] = [];
//       return updated;
//     });
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//         Project Level Details
//       </h2>

//       {/* Project Selector */}
//       <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
//         <label className="block text-gray-700 font-medium mb-2">
//           Select Project
//         </label>
//         <select
//           value={selectedProject}
//           onChange={(e) => setSelectedProject(e.target.value)}
//           className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="">-- Select a Project --</option>
//           <option value="Project Alpha">Project Alpha</option>
//           <option value="Project Beta">Project Beta</option>
//         </select>
//       </div>

//       {selectedProject && (
//         <div className="bg-white shadow-lg rounded-2xl p-6 space-y-6">
//           {levels.map((level, index) => {
//             if (level !== "Tower" && !selected[levels[index - 1]]?.length)
//               return null;
//             const options = getOptions(level);

//             return (
//               <div
//                 key={level}
//                 className="border-b pb-4 last:border-none flex flex-col md:flex-row md:items-end md:gap-4"
//               >
//                 <div className="flex-1">
//                   <label className="block text-gray-700 font-medium mb-1">
//                     {level}
//                   </label>
//                   <select
//                     value={selected[level][0] || ""}
//                     onChange={(e) => handleSelect(level, e.target.value)}
//                     className="w-full border rounded-xl px-3 py-2 h-12 focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="">-- Select {level} --</option>
//                     {options.map((opt) => (
//                       <option key={opt} value={opt}>
//                         {opt}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="flex-1">
//                   <label className="block text-gray-700 font-medium mb-1">
//                     Add New {level}
//                   </label>
//                   <input
//                     type="text"
//                     value={inputs[level]}
//                     onChange={(e) =>
//                       setInputs({ ...inputs, [level]: e.target.value })
//                     }
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter") {
//                         e.preventDefault();
//                         handleAddNew(level);
//                       }
//                     }}
//                     className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                     placeholder={`Enter ${level}`}
//                   />
//                 </div>

//                 <div className="flex gap-2 mt-3 md:mt-0">
//                   <button
//                     onClick={() => handleAddNew(level)}
//                     className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700"
//                   >
//                     Add New
//                   </button>
//                   <button
//                     onClick={() => handleClear(level)}
//                     className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl shadow hover:bg-gray-300"
//                   >
//                     Clear
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectLevelDetails;

// ================ ========== =========== =========== ========== =======          =           ====        ====

import React, { useState, useRef, useEffect } from "react";

const ProjectLevelDetails = () => {
  const levels = ["Tower", "Floor", "Flat", "Room", "Unit", "FurtherUnit"];
  const levelColors = {
    Tower: "bg-blue-50 border-blue-400",
    Floor: "bg-green-50 border-green-400",
    Flat: "bg-yellow-50 border-yellow-400",
    Room: "bg-purple-50 border-purple-400",
    Unit: "bg-pink-50 border-pink-400",
    FurtherUnit: "bg-gray-50 border-gray-400",
  };

  const [selectedProject, setSelectedProject] = useState("");
  const [hierarchy, setHierarchy] = useState({
    Tower: { "Wing A": [], "Wing B": [] },
    Floor: {},
    Flat: {},
    Room: {},
    Unit: {},
    FurtherUnit: {},
  });
  const [selected, setSelected] = useState({
    Tower: [],
    Floor: [],
    Flat: [],
    Room: [],
    Unit: [],
    FurtherUnit: [],
  });
  const [inputs, setInputs] = useState({
    Tower: "",
    Floor: "",
    Flat: "",
    Room: "",
    Unit: "",
    FurtherUnit: "",
  });

  const inputRefs = useRef({});

  useEffect(() => {
    levels.forEach((level) => {
      if (inputRefs.current[level]) {
        inputRefs.current[level].focus();
      }
    });
  }, [inputs]);

  const getOptions = (level) => {
    if (level === "Tower") return Object.keys(hierarchy.Tower);
    const parentLevel = levels[levels.indexOf(level) - 1];
    const parent = selected[parentLevel][0];
    if (!parent) return [];
    return hierarchy[parentLevel][parent] || [];
  };

  const handleSelect = (level, value) => {
    setSelected((prev) => {
      const updated = { ...prev };
      updated[level] = value ? [value] : [];
      const index = levels.indexOf(level);
      for (let i = index + 1; i < levels.length; i++) updated[levels[i]] = [];
      return updated;
    });
  };

  const handleAddNew = (level) => {
    const newValue = inputs[level].trim();
    if (!newValue) return;

    const levelIndex = levels.indexOf(level);

    setHierarchy((prev) => {
      const updated = { ...prev };
      if (level === "Tower") {
        if (!updated.Tower[newValue]) updated.Tower[newValue] = [];
      } else {
        const parentLevel = levels[levelIndex - 1];
        const parent = selected[parentLevel][0];
        if (!parent) return prev;

        if (!updated[parentLevel][parent]) updated[parentLevel][parent] = [];
        if (!updated[parentLevel][parent].includes(newValue))
          updated[parentLevel][parent].push(newValue);

        if (!updated[level][newValue]) updated[level][newValue] = [];
      }
      return updated;
    });

    setSelected((prev) => {
      const updated = { ...prev };
      updated[level] = [newValue];
      for (let i = levelIndex + 1; i < levels.length; i++)
        updated[levels[i]] = [];
      return updated;
    });

    setInputs((prev) => ({ ...prev, [level]: "" }));
    inputRefs.current[level]?.focus();
  };

  const handleClear = (level) => {
    const index = levels.indexOf(level);
    setSelected((prev) => {
      const updated = { ...prev };
      updated[level] = [];
      for (let i = index + 1; i < levels.length; i++) updated[levels[i]] = [];
      return updated;
    });
  };

  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Project Level Details
      </h2>

      {/* Project Selector */}
      <div className="bg-white shadow-md rounded-2xl p-4 md:p-6 mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Select Project
        </label>
        <select
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
          className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select a Project --</option>
          <option value="Project Alpha">Project Alpha</option>
          <option value="Project Beta">Project Beta</option>
        </select>
      </div>

      {selectedProject && (
        <div className="space-y-6">
          {levels.map((level, index) => {
            const parentSelected =
              level === "Tower" || selected[levels[index - 1]]?.length;
            if (!parentSelected) return null;

            const options = getOptions(level);
            const isDisabled = !parentSelected;

            return (
              <div
                key={level}
                className={`flex flex-col md:flex-row md:items-end md:gap-4 p-4 border-l-4 ${levelColors[level]} rounded-xl`}
              >
                <div className="flex-1">
                  <label className="block text-gray-700 font-medium mb-1">
                    {level}
                  </label>
                  <select
                    value={selected[level][0] || ""}
                    onChange={(e) => handleSelect(level, e.target.value)}
                    disabled={isDisabled}
                    className={`w-full border rounded-xl px-3 py-2 h-12 focus:ring-2 focus:ring-blue-500 ${
                      isDisabled ? "bg-gray-100 cursor-not-allowed" : ""
                    }`}
                  >
                    <option value="">-- Select {level} --</option>
                    {options.length ? (
                      options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))
                    ) : (
                      <option disabled>No options available</option>
                    )}
                  </select>
                </div>

                <div className="flex-1 mt-2 md:mt-0">
                  <label className="block text-gray-700 font-medium mb-1">
                    Add New {level}
                  </label>
                  <input
                    type="text"
                    value={inputs[level]}
                    ref={(el) => (inputRefs.current[level] = el)}
                    onChange={(e) =>
                      setInputs({ ...inputs, [level]: e.target.value })
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddNew(level);
                      }
                    }}
                    placeholder={`Enter new ${level}`}
                    className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex gap-2 mt-3 md:mt-0">
                  <button
                    onClick={() => handleAddNew(level)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => handleClear(level)}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl shadow hover:bg-gray-300"
                  >
                    Clear
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectLevelDetails;
