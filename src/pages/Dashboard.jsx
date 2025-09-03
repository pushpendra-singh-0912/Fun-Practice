// // --------------------------------------

// import React from "react";
// import QualityCheck from "../assets/Quality-check.png";
// import NC from "../assets/NC.png";
// import SNAG from "../assets/SNAG.png";
// import EHS from "../assets/EHS.png";
// import WP from "../assets/WP.png";
// import MAT from "../assets/MAT.png";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//           <div className="flex items-center">
//             <span className="text-gray-600 mr-2">DLFΔ</span>
//             <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
//           </div>
//         </div>
//         <p className="text-gray-600 mb-6">
//           The Defect Management & Control System utilizes a relational work or
//           site structure to ensure the inspection process is comprehensive, with
//           no items missed.
//         </p>

//         {/* Cards Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Quality Check */}
//           <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-4 rounded-lg text-center">
//             <h2 className="text-lg font-semibold">Quality Check</h2>
//             <p className="mb-4">
//               Track inspections to ensure work meets construction standards.
//             </p>
//             <img
//               src={QualityCheck}
//               alt="Quality Check"
//               className="mx-auto mb-4 w-24"
//             />
//             <div className="flex justify-center mb-4">
//               <div className="w-16 h-16 bg-green-300 rounded-full flex items-center justify-center">
//                 <span className="text-xl font-bold">✓</span>
//               </div>
//             </div>
//             <button className="bg-white text-teal-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* EHS */}
//           <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 p-4 rounded-lg text-center">
//             <h2 className="text-lg font-semibold">EHS</h2>
//             <p className="mb-4">
//               Environment, Health & Safety
//               <br />
//               Ensure safety, health, and environmental compliance.
//             </p>
//             <img src={EHS} alt="EHS" className="mx-auto mb-4 w-24" />
//             <button className="bg-white text-cyan-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* Work Permit */}
//           <div className="bg-gradient-to-br from-red-100 to-red-200 p-4 rounded-lg text-center">
//             <h2 className="text-lg font-semibold">Work Permit</h2>
//             <p className="mb-4">Manage and verify site work permits.</p>
//             <img src={WP} alt="Work Permit" className="mx-auto mb-4 w-24" />
//             <button className="bg-white text-red-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* Non-Confirmatory */}
//           <div className="bg-gradient-to-br from-gray-400 to-gray-500 p-4 rounded-lg text-center text-white">
//             <h2 className="text-lg font-semibold">Non-Confirmatory</h2>
//             <p className="mb-4">
//               Identify work not matching plans or quality norms.
//             </p>
//             <img
//               src={NC}
//               alt="Non-Confirmatory"
//               className="mx-auto mb-4 w-24"
//             />
//             <button className="bg-white text-gray-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* Materials */}
//           <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg text-center">
//             <h2 className="text-lg font-semibold">Materials</h2>
//             <p className="mb-4">
//               Track inspections to ensure work meets construction standards.
//             </p>
//             <img src={MAT} alt="Materials" className="mx-auto mb-4 w-24" />
//             <button className="bg-white text-blue-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* SNAG - Defects */}
//           <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 rounded-lg text-center">
//             <h2 className="text-lg font-semibold">SNAG - Defects</h2>
//             <p className="mb-4">
//               Log and monitor on-site issues needing fixes.
//             </p>
//             <img src={SNAG} alt="SNAG" className="mx-auto mb-4 w-24" />
//             <button className="bg-white text-yellow-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// ----------------------------------------------

// import React from "react";
// import QualityCheck from "../assets/Quality-check.png";
// import NC from "../assets/NC.png";
// import SNAG from "../assets/SNAG.png";
// import EHS from "../assets/EHS.png";
// import WP from "../assets/WP.png";
// import MAT from "../assets/MAT.png";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-800 text-white p-4 flex flex-col justify-between">
//         <div>
//           <div className="flex items-center mb-6">
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
//               <span className="text-blue-800 font-bold">COP</span>
//             </div>
//             <span className="text-xl font-bold">QUALITY INSPECTOR</span>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full p-2 rounded-md text-gray-800 focus:outline-none"
//             />
//           </div>
//           <nav className="space-y-2 flex-1">
//             <button className="w-full text-left p-2 bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🏠</span> Home
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> Dashboard
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📊</span> Reports
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> DLR
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🔍</span> Audit
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📄</span> Pour Card
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🤝</span> Handover
//             </button>
//           </nav>
//         </div>
//         <div className="mt-4">
//           <div className="flex items-center p-2 bg-blue-700 rounded-md">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="User"
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <span className="text-sm">
//               Arshi Kohli
//               <br />
//               #fiedg-9276
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//           <div className="flex items-center">
//             <span className="text-gray-600 mr-2">DLFΔ</span>
//             <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
//           </div>
//         </div>
//         <p className="text-gray-600 mb-6">
//           The Defect Management & Control System utilizes a relational work or
//           site structure to ensure the inspection process is comprehensive, with
//           no items missed.
//         </p>

//         {/* Cards Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Quality Check */}
//           <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-4 rounded-lg text-center">
//             <h2 className="text-lg font-semibold">Quality Check</h2>
//             <p className="mb-4 text-sm">
//               Track inspections to ensure work meets construction standards.
//             </p>
//             <img
//               src={QualityCheck}
//               alt="Quality Check"
//               className="mx-auto mb-4 w-28"
//             />
//             <div className="flex justify-center mb-4">
//               <div className="w-16 h-16 bg-green-300 rounded-full flex items-center justify-center">
//                 <span className="text-2xl font-bold">✓</span>
//               </div>
//             </div>
//             <button className="bg-white text-teal-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* EHS */}
//           <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 p-4 rounded-lg text-center">
//             <h2 className="text-lg font-semibold">EHS</h2>
//             <p className="mb-4 text-sm">
//               Environment, Health & Safety
//               <br />
//               Ensure safety, health, and environmental compliance.
//             </p>
//             <img src={EHS} alt="EHS" className="mx-auto mb-4 w-28" />
//             <button className="bg-white text-cyan-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* Work Permit */}
//           <div className="bg-gradient-to-br from-red-100 to-red-200 p-4 rounded-lg text-center">
//             <h2 className="text-lg font-semibold">Work Permit</h2>
//             <p className="mb-4 text-sm">Manage and verify site work permits.</p>
//             <img src={WP} alt="Work Permit" className="mx-auto mb-4 w-28" />
//             <button className="bg-white text-red-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* Non-Confirmatory */}
//           <div className="bg-gradient-to-br from-gray-400 to-gray-500 p-4 rounded-lg text-center text-white">
//             <h2 className="text-lg font-semibold">Non-Confirmatory</h2>
//             <p className="mb-4 text-sm">
//               Identify work not matching plans or quality norms.
//             </p>
//             <img
//               src={NC}
//               alt="Non-Confirmatory"
//               className="mx-auto mb-4 w-28"
//             />
//             <button className="bg-white text-gray-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* Materials */}
//           <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg text-center">
//             <h2 className="text-lg font-semibold">Materials</h2>
//             <p className="mb-4 text-sm">
//               Track inspections to ensure work meets construction standards.
//             </p>
//             <img src={MAT} alt="Materials" className="mx-auto mb-4 w-28" />
//             <button className="bg-white text-blue-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* SNAG - Defects */}
//           <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 rounded-lg text-center">
//             <h2 className="text-lg font-semibold">SNAG - Defects</h2>
//             <p className="mb-4 text-sm">
//               Log and monitor on-site issues needing fixes.
//             </p>
//             <img src={SNAG} alt="SNAG" className="mx-auto mb-4 w-28" />
//             <button className="bg-white text-yellow-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// --------------------------------------------

// import React from "react";
// import QualityCheck from "../assets/Quality-check.png";
// import NC from "../assets/NC.png";
// import SNAG from "../assets/SNAG.png";
// import EHS from "../assets/EHS.png";
// import WP from "../assets/WP.png";
// import MAT from "../assets/MAT.png";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-800 text-white p-4 flex flex-col justify-between">
//         <div>
//           <div className="flex items-center mb-6">
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
//               <span className="text-blue-800 font-bold">COP</span>
//             </div>
//             <span className="text-xl font-bold">QUALITY INSPECTOR</span>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full p-2 rounded-md text-gray-800 focus:outline-none"
//             />
//           </div>
//           <nav className="space-y-2 flex-1">
//             <button className="w-full text-left p-2 bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🏠</span> Home
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> Dashboard
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📊</span> Reports
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> DLR
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🔍</span> Audit
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📄</span> Pour Card
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🤝</span> Handover
//             </button>
//           </nav>
//         </div>
//         <div className="mt-4">
//           <div className="flex items-center p-2 bg-blue-700 rounded-md">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="User"
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <span className="text-sm">
//               Arshi Kohli
//               <br />
//               #fiedg-9276
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//           <div className="flex items-center">
//             <span className="text-gray-600 mr-2">DLFΔ</span>
//             <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
//           </div>
//         </div>
//         <p className="text-gray-600 mb-6">
//           The Defect Management & Control System utilizes a relational work or
//           site structure to ensure the inspection process is comprehensive, with
//           no items missed.
//         </p>

//         {/* Cards Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Quality Check */}
//           <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-4 rounded-lg text-center">
//             <h2 className="text-lg font-semibold">Quality Check</h2>
//             <p className="mb-4 text-sm">
//               Track inspections to ensure work meets construction standards.
//             </p>
//             <img
//               src={QualityCheck}
//               alt="Quality Check"
//               className="mx-auto mb-4 w-28"
//             />
//             <div className="flex justify-center mb-4">
//               <div className="w-16 h-16 bg-green-300 rounded-full flex items-center justify-center">
//                 <span className="text-2xl font-bold">✓</span>
//               </div>
//             </div>
//             <button className="bg-white text-teal-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* EHS */}
//           <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 p-4 rounded-lg text-center">
//             <h2 className="text-lg font-semibold">EHS</h2>
//             <p className="mb-4 text-sm">
//               Environment, Health & Safety
//               <br />
//               Ensure safety, health, and environmental compliance.
//             </p>
//             <img src={EHS} alt="EHS" className="mx-auto mb-4 w-28" />
//             <button className="bg-white text-cyan-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* Non-Confirmatory */}
//           <div className="bg-gradient-to-br from-gray-400 to-gray-500 p-4 rounded-lg text-center text-white">
//             <h2 className="text-lg font-semibold">Non-Confirmatory</h2>
//             <p className="mb-4 text-sm">
//               Identify work not matching plans or quality norms.
//             </p>
//             <img
//               src={NC}
//               alt="Non-Confirmatory"
//               className="mx-auto mb-4 w-28"
//             />
//             <button className="bg-white text-gray-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* Work Permit */}
//           <div className="bg-gradient-to-br from-red-100 to-red-200 p-4 rounded-lg text-center">
//             <h2 className="text-lg font-semibold">Work Permit</h2>
//             <p className="mb-4 text-sm">Manage and verify site work permits.</p>
//             <img src={WP} alt="Work Permit" className="mx-auto mb-4 w-28" />
//             <button className="bg-white text-red-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* Materials */}
//           <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg text-center">
//             <h2 className="text-lg font-semibold">Materials</h2>
//             <p className="mb-4 text-sm">
//               Track inspections to ensure work meets construction standards.
//             </p>
//             <img src={MAT} alt="Materials" className="mx-auto mb-4 w-28" />
//             <button className="bg-white text-blue-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* SNAG - Defects */}
//           <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 rounded-lg text-center">
//             <h2 className="text-lg font-semibold">SNAG - Defects</h2>
//             <p className="mb-4 text-sm">
//               Log and monitor on-site issues needing fixes.
//             </p>
//             <img src={SNAG} alt="SNAG" className="mx-auto mb-4 w-28" />
//             <button className="bg-white text-yellow-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// ----------------------------------

// 3rd attempt

// import React from "react";
// import QualityCheck from "../assets/Quality-check.png";
// import NC from "../assets/NC.png";
// import SNAG from "../assets/SNAG.png";
// import EHS from "../assets/EHS.png";
// import WP from "../assets/WP.png";
// import MAT from "../assets/MAT.png";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-800 text-white p-4 flex flex-col justify-between">
//         <div>
//           <div className="flex items-center mb-6">
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
//               <span className="text-blue-800 font-bold">COP</span>
//             </div>
//             <span className="text-xl font-bold">QUALITY INSPECTOR</span>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full p-2 rounded-md text-gray-800 focus:outline-none"
//             />
//           </div>
//           <nav className="space-y-2 flex-1">
//             <button className="w-full text-left p-2 bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🏠</span> Home
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> Dashboard
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📊</span> Reports
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> DLR
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🔍</span> Audit
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📄</span> Pour Card
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🤝</span> Handover
//             </button>
//           </nav>
//         </div>
//         <div className="mt-4">
//           <div className="flex items-center p-2 bg-blue-700 rounded-md">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="User"
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <span className="text-sm">
//               Arshi Kohli
//               <br />
//               #fiedg-9276
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//           <div className="flex items-center">
//             <span className="text-gray-600 mr-2">DLFΔ</span>
//             <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
//           </div>
//         </div>
//         <p className="text-gray-600 mb-6">
//           The Defect Management & Control System utilizes a relational work or
//           site structure to ensure the inspection process is comprehensive, with
//           no items missed.
//         </p>

//         {/* Cards Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Quality Check */}
//           <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-4 rounded-lg text-center min-h-[300px]">
//             <h2 className="text-lg font-semibold">Quality Check</h2>
//             <p className="mb-4 text-sm">
//               Track inspections to ensure work meets construction standards.
//             </p>
//             <div className="flex justify-center mb-4">
//               <img
//                 src={QualityCheck}
//                 alt="Quality Check"
//                 className="w-20 h-20 rounded-full"
//               />
//             </div>
//             <button className="bg-white text-teal-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* EHS */}
//           <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 p-4 rounded-lg text-center min-h-[300px]">
//             <h2 className="text-lg font-semibold">EHS</h2>
//             <p className="mb-4 text-sm">
//               Environment, Health & Safety
//               <br />
//               Ensure safety, health, and environmental compliance.
//             </p>
//             <div className="flex justify-center mb-4">
//               <img src={EHS} alt="EHS" className="w-20 h-20" />
//             </div>
//             <button className="bg-white text-cyan-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* Non-Confirmatory */}
//           <div className="bg-gradient-to-br from-gray-400 to-gray-500 p-4 rounded-lg text-center text-white min-h-[300px]">
//             <h2 className="text-lg font-semibold">Non-Confirmatory</h2>
//             <p className="mb-4 text-sm">
//               Identify work not matching plans or quality norms.
//             </p>
//             <div className="flex justify-center mb-4">
//               <img src={NC} alt="Non-Confirmatory" className="w-20 h-20" />
//             </div>
//             <button className="bg-white text-gray-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* Work Permit */}
//           <div className="bg-gradient-to-br from-red-100 to-red-200 p-4 rounded-lg text-center min-h-[300px]">
//             <h2 className="text-lg font-semibold">Work Permit</h2>
//             <p className="mb-4 text-sm">Manage and verify site work permits.</p>
//             <div className="flex justify-center mb-4">
//               <img src={WP} alt="Work Permit" className="w-20 h-20" />
//             </div>
//             <button className="bg-white text-red-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* Materials */}
//           <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg text-center min-h-[300px]">
//             <h2 className="text-lg font-semibold">Materials</h2>
//             <p className="mb-4 text-sm">
//               Track inspections to ensure work meets construction standards.
//             </p>
//             <div className="flex justify-center mb-4">
//               <img src={MAT} alt="Materials" className="w-20 h-20" />
//             </div>
//             <button className="bg-white text-blue-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>

//           {/* SNAG - Defects */}
//           <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 rounded-lg text-center min-h-[300px]">
//             <h2 className="text-lg font-semibold">SNAG - Defects</h2>
//             <p className="mb-4 text-sm">
//               Log and monitor on-site issues needing fixes.
//             </p>
//             <div className="flex justify-center mb-4">
//               <img src={SNAG} alt="SNAG" className="w-20 h-20" />
//             </div>
//             <button className="bg-white text-yellow-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
//               Check Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// -----------------------------------
// 4 th attempt

// import React from "react";
// import QualityCheck from "../assets/Quality-check.png";
// import NC from "../assets/NC.png";
// import SNAG from "../assets/SNAG.png";
// import EHS from "../assets/EHS.png";
// import WP from "../assets/WP.png";
// import MAT from "../assets/MAT.png";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-800 text-white p-4 flex flex-col justify-between">
//         <div>
//           <div className="flex items-center mb-6">
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
//               <span className="text-blue-800 font-bold">COP</span>
//             </div>
//             <span className="text-xl font-bold">QUALITY INSPECTOR</span>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full p-2 rounded-md text-gray-800 focus:outline-none"
//             />
//           </div>
//           <nav className="space-y-2 flex-1">
//             <button className="w-full text-left p-2 bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🏠</span> Home
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> Dashboard
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📊</span> Reports
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> DLR
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🔍</span> Audit
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📄</span> Pour Card
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🤝</span> Handover
//             </button>
//           </nav>
//         </div>
//         <div className="mt-4">
//           <div className="flex items-center p-2 bg-blue-700 rounded-md">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="User"
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <span className="text-sm">
//               Arshi Kohli
//               <br />
//               #fiedg-9276
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//           <div className="flex items-center">
//             <span className="text-gray-600 mr-2">DLFΔ</span>
//             <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
//           </div>
//         </div>
//         <p className="text-gray-600 mb-6">
//           The Defect Management & Control System utilizes a relational work or
//           site structure to ensure the inspection process is comprehensive, with
//           no items missed.
//         </p>

//         {/* Cards Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Quality Check */}
//           <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-4 rounded-lg text-center h-full flex flex-col justify-between min-h-[300px]">
//             <div>
//               <h2 className="text-lg font-semibold">Quality Check</h2>
//               <p className="mb-4 text-sm">
//                 Track inspections to ensure work meets construction standards.
//               </p>
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={QualityCheck}
//                   alt="Quality Check"
//                   className="w-24 h-24 object-cover"
//                 />
//               </div>
//             </div>
//             <button className="bg-white text-teal-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-full">
//               Check Now
//             </button>
//           </div>

//           {/* EHS */}
//           <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 p-4 rounded-lg text-center h-full flex flex-col justify-between min-h-[300px]">
//             <div>
//               <h2 className="text-lg font-semibold">EHS</h2>
//               <p className="mb-4 text-sm">
//                 Environment, Health & Safety
//                 <br />
//                 Ensure safety, health, and environmental compliance.
//               </p>
//               <div className="flex justify-center mb-4">
//                 <img src={EHS} alt="EHS" className="w-24 h-24 object-cover" />
//               </div>
//             </div>
//             <button className="bg-white text-cyan-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-full">
//               Check Now
//             </button>
//           </div>

//           {/* Non-Confirmatory */}
//           <div className="bg-gradient-to-br from-gray-400 to-gray-500 p-4 rounded-lg text-center text-white h-full flex flex-col justify-between min-h-[300px]">
//             <div>
//               <h2 className="text-lg font-semibold">Non-Confirmatory</h2>
//               <p className="mb-4 text-sm">
//                 Identify work not matching plans or quality norms.
//               </p>
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={NC}
//                   alt="Non-Confirmatory"
//                   className="w-24 h-24 object-cover"
//                 />
//               </div>
//             </div>
//             <button className="bg-white text-gray-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-full">
//               Check Now
//             </button>
//           </div>

//           {/* Work Permit */}
//           <div className="bg-gradient-to-br from-red-100 to-red-200 p-4 rounded-lg text-center h-full flex flex-col justify-between min-h-[300px]">
//             <div>
//               <h2 className="text-lg font-semibold">Work Permit</h2>
//               <p className="mb-4 text-sm">
//                 Manage and verify site work permits.
//               </p>
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={WP}
//                   alt="Work Permit"
//                   className="w-24 h-24 object-cover"
//                 />
//               </div>
//             </div>
//             <button className="bg-white text-red-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-full">
//               Check Now
//             </button>
//           </div>

//           {/* Materials */}
//           <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg text-center h-full flex flex-col justify-between min-h-[300px]">
//             <div>
//               <h2 className="text-lg font-semibold">Materials</h2>
//               <p className="mb-4 text-sm">
//                 Track inspections to ensure work meets construction standards.
//               </p>
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={MAT}
//                   alt="Materials"
//                   className="w-24 h-24 object-cover"
//                 />
//               </div>
//             </div>
//             <button className="bg-white text-blue-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-full">
//               Check Now
//             </button>
//           </div>

//           {/* SNAG - Defects */}
//           <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 rounded-lg text-center h-full flex flex-col justify-between min-h-[300px]">
//             <div>
//               <h2 className="text-lg font-semibold">SNAG - Defects</h2>
//               <p className="mb-4 text-sm">
//                 Log and monitor on-site issues needing fixes.
//               </p>
//               <div className="flex justify-center mb-4">
//                 <img src={SNAG} alt="SNAG" className="w-24 h-24 object-cover" />
//               </div>
//             </div>
//             <button className="bg-white text-yellow-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-full">
//               Check Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// ------------------------------------------
// 5th attempt

// import React from "react";
// import QualityCheck from "../assets/Quality-check.png";
// import NC from "../assets/NC.png";
// import SNAG from "../assets/SNAG.png";
// import EHS from "../assets/EHS.png";
// import WP from "../assets/WP.png";
// import MAT from "../assets/MAT.png";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-800 text-white p-4 flex flex-col justify-between">
//         <div>
//           <div className="flex items-center mb-6">
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
//               <span className="text-blue-800 font-bold">COP</span>
//             </div>
//             <span className="text-xl font-bold">QUALITY INSPECTOR</span>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full p-2 rounded-md text-gray-800 focus:outline-none"
//             />
//           </div>
//           <nav className="space-y-2 flex-1">
//             <button className="w-full text-left p-2 bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🏠</span> Home
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> Dashboard
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📊</span> Reports
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> DLR
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🔍</span> Audit
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📄</span> Pour Card
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🤝</span> Handover
//             </button>
//           </nav>
//         </div>
//         <div className="mt-4">
//           <div className="flex items-center p-2 bg-blue-700 rounded-md">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="User"
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <span className="text-sm">
//               Arshi Kohli
//               <br />
//               #fiedg-9276
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//           <div className="flex items-center">
//             <span className="text-gray-600 mr-2">DLFΔ</span>
//             <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
//           </div>
//         </div>
//         <p className="text-gray-600 mb-6">
//           The Defect Management & Control System utilizes a relational work or
//           site structure to ensure the inspection process is comprehensive, with
//           no items missed.
//         </p>

//         {/* Cards Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Quality Check */}
//           <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-4 rounded-lg text-center flex flex-col justify-between h-[300px]">
//             <div>
//               <h2 className="text-lg font-semibold">Quality Check</h2>
//               <p className="mb-4 text-sm">
//                 Track inspections to ensure work meets construction standards.
//               </p>
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={QualityCheck}
//                   alt="Quality Check"
//                   className="w-24 h-24 object-contain"
//                 />
//               </div>
//             </div>
//             <button className="bg-white text-teal-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-full">
//               Check Now
//             </button>
//           </div>

//           {/* EHS */}
//           <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 p-4 rounded-lg text-center flex flex-col justify-between h-[300px]">
//             <div>
//               <h2 className="text-lg font-semibold">EHS</h2>
//               <p className="mb-4 text-sm">
//                 Environment, Health & Safety
//                 <br />
//                 Ensure safety, health, and environmental compliance.
//               </p>
//               <div className="flex justify-center mb-4">
//                 <img src={EHS} alt="EHS" className="w-24 h-24 object-contain" />
//               </div>
//             </div>
//             <button className="bg-white text-cyan-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-full">
//               Check Now
//             </button>
//           </div>

//           {/* Non-Confirmatory */}
//           <div className="bg-gradient-to-br from-gray-400 to-gray-500 p-4 rounded-lg text-center text-white flex flex-col justify-between h-[300px]">
//             <div>
//               <h2 className="text-lg font-semibold">Non-Confirmatory</h2>
//               <p className="mb-4 text-sm">
//                 Identify work not matching plans or quality norms.
//               </p>
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={NC}
//                   alt="Non-Confirmatory"
//                   className="w-24 h-24 object-contain"
//                 />
//               </div>
//             </div>
//             <button className="bg-white text-gray-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-full">
//               Check Now
//             </button>
//           </div>

//           {/* Work Permit */}
//           <div className="bg-gradient-to-br from-red-100 to-red-200 p-4 rounded-lg text-center flex flex-col justify-between h-[300px]">
//             <div>
//               <h2 className="text-lg font-semibold">Work Permit</h2>
//               <p className="mb-4 text-sm">
//                 Manage and verify site work permits.
//               </p>
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={WP}
//                   alt="Work Permit"
//                   className="w-24 h-24 object-contain"
//                 />
//               </div>
//             </div>
//             <button className="bg-white text-red-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-full">
//               Check Now
//             </button>
//           </div>

//           {/* Materials */}
//           <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg text-center flex flex-col justify-between h-[300px]">
//             <div>
//               <h2 className="text-lg font-semibold">Materials</h2>
//               <p className="mb-4 text-sm">
//                 Track inspections to ensure work meets construction standards.
//               </p>
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={MAT}
//                   alt="Materials"
//                   className="w-24 h-24 object-contain"
//                 />
//               </div>
//             </div>
//             <button className="bg-white text-blue-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-full">
//               Check Now
//             </button>
//           </div>

//           {/* SNAG - Defects */}
//           <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 rounded-lg text-center flex flex-col justify-between h-[300px]">
//             <div>
//               <h2 className="text-lg font-semibold">SNAG - Defects</h2>
//               <p className="mb-4 text-sm">
//                 Log and monitor on-site issues needing fixes.
//               </p>
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={SNAG}
//                   alt="SNAG"
//                   className="w-24 h-24 object-contain"
//                 />
//               </div>
//             </div>
//             <button className="bg-white text-yellow-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-full">
//               Check Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// ---------------------------------------------------
// 6th attempt

// import React from "react";
// import QualityCheck from "../assets/Quality-check.png";
// import NC from "../assets/NC.png";
// import SNAG from "../assets/SNAG.png";
// import EHS from "../assets/EHS.png";
// import WP from "../assets/WP.png";
// import MAT from "../assets/MAT.png";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-800 text-white p-4 flex flex-col justify-between">
//         <div>
//           <div className="flex items-center mb-6">
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
//               <span className="text-blue-800 font-bold">COP</span>
//             </div>
//             <span className="text-xl font-bold">QUALITY INSPECTOR</span>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full p-2 rounded-md text-gray-800 focus:outline-none"
//             />
//           </div>
//           <nav className="space-y-2 flex-1">
//             <button className="w-full text-left p-2 bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🏠</span> Home
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> Dashboard
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📊</span> Reports
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> DLR
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🔍</span> Audit
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📄</span> Pour Card
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🤝</span> Handover
//             </button>
//           </nav>
//         </div>
//         <div className="mt-4">
//           <div className="flex items-center p-2 bg-blue-700 rounded-md">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="User"
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <span className="text-sm">
//               Arshi Kohli
//               <br />
//               #fiedg-9276
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//           <div className="flex items-center">
//             <span className="text-gray-600 mr-2">DLFΔ</span>
//             <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
//           </div>
//         </div>
//         <p className="text-gray-600 mb-6">
//           The Defect Management & Control System utilizes a relational work or
//           site structure to ensure the inspection process is comprehensive, with
//           no items missed.
//         </p>

//         {/* Cards Section */}
//         <div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//           style={{
//             gridTemplateColumns: "2fr 1fr 1fr",
//             gridTemplateRows: "1fr 1fr",
//           }}
//         >
//           {/* Quality Check (Big width, small height) */}
//           <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-4 rounded-lg text-center flex flex-col justify-between h-[200px] col-span-1 row-span-1">
//             <div>
//               <h2 className="text-lg font-semibold">Quality Check</h2>
//               <p className="mb-4 text-sm">
//                 Track inspections to ensure work meets construction standards.
//               </p>
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={QualityCheck}
//                   alt="Quality Check"
//                   className="w-20 h-20 object-contain"
//                 />
//               </div>
//             </div>
//             <button className="bg-white text-teal-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-full">
//               Check Now
//             </button>
//           </div>

//           {/* Non-Confirmatory (Big height, small width) */}
//           <div className="bg-gradient-to-br from-gray-400 to-gray-500 p-4 rounded-lg text-center text-white flex flex-col justify-between h-[300px] col-span-1 row-span-2">
//             <div>
//               <h2 className="text-lg font-semibold">Non-Confirmatory</h2>
//               <p className="mb-4 text-sm">
//                 Identify work not matching plans or quality norms.
//               </p>
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={NC}
//                   alt="Non-Confirmatory"
//                   className="w-20 h-20 object-contain"
//                 />
//               </div>
//             </div>
//             <button className="bg-white text-gray-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-full">
//               Check Now
//             </button>
//           </div>

//           {/* SNAG - Defects (Big height, small width) */}
//           <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 rounded-lg text-center flex flex-col justify-between h-[300px] col-span-1 row-span-2">
//             <div>
//               <h2 className="text-lg font-semibold">SNAG - Defects</h2>
//               <p className="mb-4 text-sm">
//                 Log and monitor on-site issues needing fixes.
//               </p>
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={SNAG}
//                   alt="SNAG"
//                   className="w-20 h-20 object-contain"
//                 />
//               </div>
//             </div>
//             <button className="bg-white text-yellow-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-full">
//               Check Now
//             </button>
//           </div>

//           {/* EHS (Small width, big height) */}
//           <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 p-4 rounded-lg text-center flex flex-col justify-between h-[300px] col-span-1 row-span-1">
//             <div>
//               <h2 className="text-lg font-semibold">EHS</h2>
//               <p className="mb-4 text-sm">
//                 Environment, Health & Safety
//                 <br />
//                 Ensure safety, health, and environmental compliance.
//               </p>
//               <div className="flex justify-center mb-4">
//                 <img src={EHS} alt="EHS" className="w-20 h-20 object-contain" />
//               </div>
//             </div>
//             <button className="bg-white text-cyan-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-full">
//               Check Now
//             </button>
//           </div>

//           {/* Work Permit (Small width, big height) */}
//           <div className="bg-gradient-to-br from-red-100 to-red-200 p-4 rounded-lg text-center flex flex-col justify-between h-[300px] col-span-1 row-span-1">
//             <div>
//               <h2 className="text-lg font-semibold">Work Permit</h2>
//               <p className="mb-4 text-sm">
//                 Manage and verify site work permits.
//               </p>
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={WP}
//                   alt="Work Permit"
//                   className="w-20 h-20 object-contain"
//                 />
//               </div>
//             </div>
//             <button className="bg-white text-red-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-full">
//               Check Now
//             </button>
//           </div>

//           {/* Materials (Big width, small height) */}
//           <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg text-center flex flex-col justify-between h-[200px] col-span-2 row-span-1">
//             <div>
//               <h2 className="text-lg font-semibold">Materials</h2>
//               <p className="mb-4 text-sm">
//                 Track inspections to ensure work meets construction standards.
//               </p>
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={MAT}
//                   alt="Materials"
//                   className="w-20 h-20 object-contain"
//                 />
//               </div>
//             </div>
//             <button className="bg-white text-blue-800 font-medium px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 w-full">
//               Check Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// --------------------------------------------
// 7  most aqurate

// import React from "react";
// import QualityCheck from "../assets/Quality-check.png";
// import NC from "../assets/NC.png";
// import SNAG from "../assets/SNAG.png";
// import EHS from "../assets/EHS.png";
// import WP from "../assets/WP.png";
// import MAT from "../assets/MAT.png";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar (same as yours) */}
//       <div className="w-64 bg-blue-800 text-white p-4 flex flex-col justify-between">
//         <div>
//           <div className="flex items-center mb-6">
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
//               <span className="text-blue-800 font-bold">COP</span>
//             </div>
//             <span className="text-xl font-bold">QUALITY INSPECTOR</span>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full p-2 rounded-md text-gray-800 focus:outline-none"
//             />
//           </div>
//           <nav className="space-y-2 flex-1">
//             <button className="w-full text-left p-2 bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🏠</span> Home
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> Dashboard
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📊</span> Reports
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> DLR
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🔍</span> Audit
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📄</span> Pour Card
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🤝</span> Handover
//             </button>
//           </nav>
//         </div>
//         <div className="mt-4">
//           <div className="flex items-center p-2 bg-blue-700 rounded-md">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="User"
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <span className="text-sm">
//               Arshi Kohli
//               <br />
//               #fiedg-9276
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-y-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//           <div className="flex items-center">
//             <span className="text-gray-600 mr-2">DLFΔ</span>
//             <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
//           </div>
//         </div>
//         <p className="text-gray-600 mb-6">
//           The Defect Management & Control System utilizes a relational work or
//           site structure to ensure the inspection process is comprehensive, with
//           no items missed.
//         </p>

//         {/* ---------- CARDS GRID ---------- */}
//         {/* md:grid-cols-[2fr_1fr_2fr] -> left and right are wide; middle is narrow */}
//         <div className="grid gap-4 p-4 grid-cols-1 md:grid-cols-[2fr_1fr_2fr] items-start">
//           {/* Row 1 */}
//           {/* Quality Check - wide & short (fills left wide column) */}
//           <div
//             className="bg-gradient-to-br from-teal-100 to-teal-200 p-5 rounded-xl flex flex-col justify-between h-56
//                        md:col-start-1 md:row-start-1 md:w-full"
//           >
//             <div>
//               <h2 className="text-lg font-semibold">Quality Check</h2>
//               <p className="text-sm mt-2">
//                 Track inspections to ensure work meets construction standards.
//               </p>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <img
//                 src={QualityCheck}
//                 alt="Quality Check"
//                 className="w-16 h-16"
//               />
//               <button className="bg-white text-teal-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Non-Confirmatory - narrow & tall (center) */}
//           <div
//             className="bg-gradient-to-br from-gray-400 to-gray-500 text-white p-5 rounded-xl flex flex-col justify-between h-96
//                        md:col-start-2 md:row-start-1 md:w-full"
//           >
//             <div>
//               <h2 className="text-lg font-semibold">Non-Confirmatory</h2>
//               <p className="text-sm mt-2">
//                 Identify work not matching plans or quality norms.
//               </p>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <img src={NC} alt="NC" className="w-16 h-16" />
//               <button className="bg-white text-gray-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* SNAG - narrow & tall but placed in right column -> force narrow card width and align to right */}
//           <div
//             className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-5 rounded-xl flex flex-col justify-between h-96
//                        md:col-start-3 md:row-start-1 md:justify-self-end md:max-w-[320px] md:w-full"
//           >
//             <div>
//               <h2 className="text-lg font-semibold">SNAG - Defects</h2>
//               <p className="text-sm mt-2">
//                 Log and monitor on-site issues needing fixes.
//               </p>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <img src={SNAG} alt="SNAG" className="w-16 h-16" />
//               <button className="bg-white text-yellow-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Row 2 */}
//           {/* EHS - narrow & tall, left column but keep narrow width and left-aligned */}
//           <div
//             className="bg-gradient-to-br from-cyan-100 to-cyan-200 p-5 rounded-xl flex flex-col justify-between h-96
//                        md:col-start-1 md:row-start-2 md:justify-self-start md:max-w-[320px] md:w-full"
//           >
//             <div>
//               <h2 className="text-lg font-semibold">EHS</h2>
//               <p className="text-sm mt-2">
//                 Environment, Health & Safety. Ensure safety, health, and
//                 environmental compliance.
//               </p>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <img src={EHS} alt="EHS" className="w-16 h-16" />
//               <button className="bg-white text-cyan-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Work Permit - narrow & tall (center) */}
//           <div
//             className="bg-gradient-to-br from-red-100 to-red-200 p-5 rounded-xl flex flex-col justify-between h-96
//                        md:col-start-2 md:row-start-2 md:w-full"
//           >
//             <div>
//               <h2 className="text-lg font-semibold">Work Permit</h2>
//               <p className="text-sm mt-2">
//                 Manage and verify site work permits.
//               </p>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <img src={WP} alt="WP" className="w-16 h-16" />
//               <button className="bg-white text-red-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Materials - wide & short (fills right wide column) */}
//           <div
//             className="bg-gradient-to-br from-blue-100 to-blue-200 p-5 rounded-xl flex flex-col justify-between h-56
//                        md:col-start-3 md:row-start-2 md:w-full"
//           >
//             <div>
//               <h2 className="text-lg font-semibold">Materials</h2>
//               <p className="text-sm mt-2">
//                 Track inspections to ensure work meets construction standards.
//               </p>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <img src={MAT} alt="Materials" className="w-16 h-16" />
//               <button className="bg-white text-blue-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* ---------- END CARDS GRID ---------- */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// ---------------------------------------------------
//  8 th attempt

// import React from "react";
// import QualityCheck from "../assets/Quality-check.png";
// import NC from "../assets/NC.png";
// import SNAG from "../assets/SNAG.png";
// import EHS from "../assets/EHS.png";
// import WP from "../assets/WP.png";
// import MAT from "../assets/MAT.png";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar (same as yours) */}
//       <div className="w-64 bg-blue-800 text-white p-4 flex flex-col justify-between">
//         <div>
//           <div className="flex items-center mb-6">
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
//               <span className="text-blue-800 font-bold">COP</span>
//             </div>
//             <span className="text-xl font-bold">QUALITY INSPECTOR</span>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full p-2 rounded-md text-gray-800 focus:outline-none"
//             />
//           </div>
//           <nav className="space-y-2 flex-1">
//             <button className="w-full text-left p-2 bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🏠</span> Home
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> Dashboard
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📊</span> Reports
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> DLR
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🔍</span> Audit
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📄</span> Pour Card
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🤝</span> Handover
//             </button>
//           </nav>
//         </div>
//         <div className="mt-4">
//           <div className="flex items-center p-2 bg-blue-700 rounded-md">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="User"
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <span className="text-sm">
//               Arshi Kohli
//               <br />
//               #fiedg-9276
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-y-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//           <div className="flex items-center">
//             <span className="text-gray-600 mr-2">DLFΔ</span>
//             <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
//           </div>
//         </div>
//         <p className="text-gray-600 mb-6">
//           The Defect Management & Control System utilizes a relational work or
//           site structure to ensure the inspection process is comprehensive, with
//           no items missed.
//         </p>

//         {/* ---------- CARDS GRID ---------- */}
//         {/* md:grid-cols-[2fr_1fr_2fr] -> left and right are wide; middle is narrow */}
//         <div className="flex justify-center">
//           <div className="grid gap-4 p-4 grid-cols-1 md:grid-cols-[2fr_1fr_2fr] items-start max-w-7xl w-full">
//             {/* Row 1 */}
//             {/* Quality Check */}
//             <div
//               className="bg-gradient-to-br from-teal-100 to-teal-200 p-5 rounded-xl flex flex-col justify-between h-56
//                  md:col-start-1 md:row-start-1 md:w-full"
//             >
//               <div>
//                 <h2 className="text-lg font-semibold">Quality Check</h2>
//                 <p className="text-sm mt-2">
//                   Track inspections to ensure work meets construction standards.
//                 </p>
//               </div>
//               <div className="flex items-center justify-between mt-4">
//                 <img
//                   src={QualityCheck}
//                   alt="Quality Check"
//                   className="w-16 h-16"
//                 />
//                 <button className="bg-white text-teal-800 font-medium px-4 py-2 rounded-lg shadow">
//                   Check Now
//                 </button>
//               </div>
//             </div>

//             {/* Non-Confirmatory */}
//             <div
//               className="bg-gradient-to-br from-gray-400 to-gray-500 text-white p-5 rounded-xl flex flex-col justify-between h-96
//                  md:col-start-2 md:row-start-1 md:w-full"
//             >
//               <div>
//                 <h2 className="text-lg font-semibold">Non-Confirmatory</h2>
//                 <p className="text-sm mt-2">
//                   Identify work not matching plans or quality norms.
//                 </p>
//               </div>
//               <div className="flex items-center justify-between mt-4">
//                 <img src={NC} alt="NC" className="w-16 h-16" />
//                 <button className="bg-white text-gray-800 font-medium px-4 py-2 rounded-lg shadow">
//                   Check Now
//                 </button>
//               </div>
//             </div>

//             {/* Snag */}
//             <div
//               className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-5 rounded-xl flex flex-col justify-between h-96
//                  md:col-start-3 md:row-start-1 md:w-full"
//             >
//               <div>
//                 <h2 className="text-lg font-semibold">SNAG - Defects</h2>
//                 <p className="text-sm mt-2">
//                   Log and monitor on-site issues needing fixes.
//                 </p>
//               </div>
//               <div className="flex items-center justify-between mt-4">
//                 <img src={SNAG} alt="SNAG" className="w-16 h-16" />
//                 <button className="bg-white text-yellow-800 font-medium px-4 py-2 rounded-lg shadow">
//                   Check Now
//                 </button>
//               </div>
//             </div>

//             {/* Row 2 */}
//             {/* EHS */}
//             <div
//               className="bg-gradient-to-br from-cyan-100 to-cyan-200 p-5 rounded-xl flex flex-col justify-between h-96
//                  md:col-start-1 md:row-start-2 md:w-full"
//             >
//               <div>
//                 <h2 className="text-lg font-semibold">EHS</h2>
//                 <p className="text-sm mt-2">
//                   Environment, Health & Safety. Ensure safety, health, and
//                   environmental compliance.
//                 </p>
//               </div>
//               <div className="flex items-center justify-between mt-4">
//                 <img src={EHS} alt="EHS" className="w-16 h-16" />
//                 <button className="bg-white text-cyan-800 font-medium px-4 py-2 rounded-lg shadow">
//                   Check Now
//                 </button>
//               </div>
//             </div>

//             {/* Work Permit */}
//             <div
//               className="bg-gradient-to-br from-red-100 to-red-200 p-5 rounded-xl flex flex-col justify-between h-96
//                  md:col-start-2 md:row-start-2 md:w-full"
//             >
//               <div>
//                 <h2 className="text-lg font-semibold">Work Permit</h2>
//                 <p className="text-sm mt-2">
//                   Manage and verify site work permits.
//                 </p>
//               </div>
//               <div className="flex items-center justify-between mt-4">
//                 <img src={WP} alt="WP" className="w-16 h-16" />
//                 <button className="bg-white text-red-800 font-medium px-4 py-2 rounded-lg shadow">
//                   Check Now
//                 </button>
//               </div>
//             </div>

//             {/* Materials */}
//             <div
//               className="bg-gradient-to-br from-blue-100 to-blue-200 p-5 rounded-xl flex flex-col justify-between h-56
//                  md:col-start-3 md:row-start-2 md:w-full"
//             >
//               <div>
//                 <h2 className="text-lg font-semibold">Materials</h2>
//                 <p className="text-sm mt-2">
//                   Track inspections to ensure work meets construction standards.
//                 </p>
//               </div>
//               <div className="flex items-center justify-between mt-4">
//                 <img src={MAT} alt="Materials" className="w-16 h-16" />
//                 <button className="bg-white text-blue-800 font-medium px-4 py-2 rounded-lg shadow">
//                   Check Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ---------- END CARDS GRID ---------- */}
//       </div>
//     </div>
//   );
// };
// export default Dashboard;

// ------------------------------------------------
// 9th attempt  final---------------------------------------------------------------------------------------------

// import React from "react";
// import QualityCheck from "../assets/Quality-check.png";
// import NC from "../assets/NC.png";
// import SNAG from "../assets/SNAG.png";
// import EHS from "../assets/EHS.png";
// import WP from "../assets/WP.png";
// import MAT from "../assets/MAT.png";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-800 text-white p-4 flex flex-col justify-between">
//         <div>
//           <div className="flex items-center mb-6">
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
//               <span className="text-blue-800 font-bold">COP</span>
//             </div>
//             <span className="text-xl font-bold">QUALITY INSPECTOR</span>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full p-2 rounded-md text-gray-800 focus:outline-none"
//             />
//           </div>
//           <nav className="space-y-2 flex-1">
//             <button className="w-full text-left p-2 bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🏠</span> Home
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> Dashboard
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📊</span> Reports
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> DLR
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🔍</span> Audit
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📄</span> Pour Card
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🤝</span> Handover
//             </button>
//           </nav>
//         </div>
//         <div className="mt-4">
//           <div className="flex items-center p-2 bg-blue-700 rounded-md">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="User"
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <span className="text-sm">
//               Arshi Kohli
//               <br />
//               #fiedg-9276
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-y-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//           <div className="flex items-center">
//             <span className="text-gray-600 mr-2">DLFΔ</span>
//             <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
//           </div>
//         </div>
//         <p className="text-gray-600 mb-6">
//           The Defect Management & Control System utilizes a relational work or
//           site structure to ensure the inspection process is comprehensive, with
//           no items missed.
//         </p>

//         {/* ---------- CARDS GRID ---------- */}
//         <div className="grid grid-cols-12 gap-2">
//           {/* Row 1 */}
//           {/* Quality Check (wide short) */}
//           <div className="col-span-6 bg-gradient-to-br from-teal-100 to-teal-200 p-5 rounded-xl flex flex-col justify-between h-40">
//             <div>
//               <h2 className="text-lg font-semibold">Quality Check</h2>
//               <p className="text-sm mt-2">
//                 Track inspections to ensure work meets construction standards.
//               </p>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <img
//                 src={QualityCheck}
//                 alt="Quality Check"
//                 className="w-16 h-16"
//               />
//               <button className="bg-white text-teal-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Non-Conformatory (narrow tall) */}
//           <div className="col-span-3 bg-gradient-to-br from-gray-400 to-gray-500 text-white p-5 rounded-xl flex flex-col justify-between h-56">
//             <div>
//               <h2 className="text-lg font-semibold">Non-Confirmatory</h2>
//               <p className="text-sm mt-2">
//                 Identify work not matching plans or quality norms.
//               </p>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <img src={NC} alt="NC" className="w-16 h-16" />
//               <button className="bg-white text-gray-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Snag (narrow tall) */}
//           <div className="col-span-3 bg-gradient-to-br from-yellow-100 to-yellow-200 p-5 rounded-xl flex flex-col justify-between h-56">
//             <div>
//               <h2 className="text-lg font-semibold">SNAG - Defects</h2>
//               <p className="text-sm mt-2">
//                 Log and monitor on-site issues needing fixes.
//               </p>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <img src={SNAG} alt="SNAG" className="w-16 h-16" />
//               <button className="bg-white text-yellow-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Row 2 */}
//           {/* EHS (narrow tall) */}
//           <div className="col-span-3 bg-gradient-to-br from-cyan-100 to-cyan-200 p-5 rounded-xl flex flex-col justify-between h-56">
//             <div>
//               <h2 className="text-lg font-semibold">EHS</h2>
//               <p className="text-sm mt-2">
//                 Environment, Health & Safety. Ensure safety, health, and
//                 environmental compliance.
//               </p>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <img src={EHS} alt="EHS" className="w-16 h-16" />
//               <button className="bg-white text-cyan-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Work Permit (narrow tall) */}
//           <div className="col-span-3 bg-gradient-to-br from-red-100 to-red-200 p-5 rounded-xl flex flex-col justify-between h-56">
//             <div>
//               <h2 className="text-lg font-semibold">Work Permit</h2>
//               <p className="text-sm mt-2">
//                 Manage and verify site work permits.
//               </p>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <img src={WP} alt="WP" className="w-16 h-16" />
//               <button className="bg-white text-red-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Materials (wide short) */}
//           <div className="col-span-6 bg-gradient-to-br from-blue-100 to-blue-200 p-5 rounded-xl flex flex-col justify-between h-40">
//             <div>
//               <h2 className="text-lg font-semibold">Materials</h2>
//               <p className="text-sm mt-2">
//                 Track inspections to ensure work meets construction standards.
//               </p>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <img src={MAT} alt="Materials" className="w-16 h-16" />
//               <button className="bg-white text-blue-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* ---------- END CARDS GRID ---------- */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// ----------------------------------------------------
//  ------------------------------------------------------------------

// import React from "react";
// import QualityCheck from "../assets/Quality-check.png";
// import NC from "../assets/NC.png";
// import SNAG from "../assets/SNAG.png";
// import EHS from "../assets/EHS.png";
// import WP from "../assets/WP.png";
// import MAT from "../assets/MAT.png";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-800 text-white p-4 flex flex-col justify-between">
//         <div>
//           <div className="flex items-center mb-6">
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
//               <span className="text-blue-800 font-bold">COP</span>
//             </div>
//             <span className="text-xl font-bold">QUALITY INSPECTOR</span>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full p-2 rounded-md text-gray-800 focus:outline-none"
//             />
//           </div>
//           <nav className="space-y-2 flex-1">
//             <button className="w-full text-left p-2 bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🏠</span> Home
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> Dashboard
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📊</span> Reports
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> DLR
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🔍</span> Audit
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📄</span> Pour Card
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🤝</span> Handover
//             </button>
//           </nav>
//         </div>
//         <div className="mt-4">
//           <div className="flex items-center p-2 bg-blue-700 rounded-md">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="User"
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <span className="text-sm">
//               Arshi Kohli
//               <br />
//               #fiedg-9276
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-y-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//           <div className="flex items-center">
//             <span className="text-gray-600 mr-2">DLFΔ</span>
//             <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
//           </div>
//         </div>
//         <p className="text-gray-600 mb-6">
//           The Defect Management & Control System utilizes a relational work or
//           site structure to ensure the inspection process is comprehensive, with
//           no items missed.
//         </p>

//         {/* ---------- CARDS GRID ---------- */}
//         <div className="grid grid-cols-12 gap-2">
//           {/* Row 1 */}
//           {/* Quality Check (wide short) */}
//           <div className="col-span-6 bg-gradient-to-br from-teal-100 to-teal-200 p-5 rounded-xl flex flex-col justify-between h-40">
//             <div>
//               <h2 className="text-lg font-semibold">Quality Check</h2>
//               <p className="text-sm mt-2">
//                 Track inspections to ensure work meets construction standards.
//               </p>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <img
//                 src={QualityCheck}
//                 alt="Quality Check"
//                 className="w-16 h-16"
//               />
//               <button className="bg-white text-teal-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Non-Conformatory (narrow tall) */}
//           <div className="col-span-3 bg-gradient-to-br from-gray-400 to-gray-500 text-white p-5 rounded-xl flex flex-col justify-between h-56">
//             <div>
//               <h2 className="text-lg font-semibold">Non-Confirmatory</h2>
//               <p className="text-sm mt-2">
//                 Identify work not matching plans or quality norms.
//               </p>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <img src={NC} alt="NC" className="w-16 h-16" />
//               <button className="bg-white text-gray-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Snag (narrow tall) */}
//           <div className="col-span-3 bg-gradient-to-br from-yellow-100 to-yellow-200 p-5 rounded-xl flex flex-col justify-between h-56">
//             <div>
//               <h2 className="text-lg font-semibold">SNAG - Defects</h2>
//               <p className="text-sm mt-2">
//                 Log and monitor on-site issues needing fixes.
//               </p>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <img src={SNAG} alt="SNAG" className="w-16 h-16" />
//               <button className="bg-white text-yellow-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Row 2 */}
//           {/* EHS (narrow tall) */}
//           <div className="col-span-3 bg-gradient-to-br from-cyan-100 to-cyan-200 p-5 rounded-xl flex flex-col justify-between h-56">
//             <div>
//               <h2 className="text-lg font-semibold">EHS</h2>
//               <p className="text-sm mt-2">
//                 Environment, Health & Safety. Ensure safety, health, and
//                 environmental compliance.
//               </p>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <img src={EHS} alt="EHS" className="w-16 h-16" />
//               <button className="bg-white text-cyan-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Work Permit (narrow tall) */}
//           <div className="col-span-3 bg-gradient-to-br from-red-100 to-red-200 p-5 rounded-xl flex flex-col justify-between h-56">
//             <div>
//               <h2 className="text-lg font-semibold">Work Permit</h2>
//               <p className="text-sm mt-2">
//                 Manage and verify site work permits.
//               </p>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <img src={WP} alt="WP" className="w-16 h-16" />
//               <button className="bg-white text-red-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Materials (wide short) */}
//           <div className="col-span-6 bg-gradient-to-br from-blue-100 to-blue-200 p-5 rounded-xl flex flex-col justify-between h-40">
//             <div>
//               <h2 className="text-lg font-semibold">Materials</h2>
//               <p className="text-sm mt-2">
//                 Track inspections to ensure work meets construction standards.
//               </p>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <img src={MAT} alt="Materials" className="w-16 h-16" />
//               <button className="bg-white text-blue-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* ---------- END CARDS GRID ---------- */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// ---------------------------------------------------------------------------------------
// 10

// import React from "react";
// import QualityCheck from "../assets/Quality-check.png";
// import NC from "../assets/NC.png";
// import SNAG from "../assets/SNAG.png";
// import EHS from "../assets/EHS.png";
// import WP from "../assets/WP.png";
// import MAT from "../assets/MAT.png";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-800 text-white p-4 flex flex-col justify-between">
//         <div>
//           <div className="flex items-center mb-6">
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
//               <span className="text-blue-800 font-bold">COP</span>
//             </div>
//             <span className="text-xl font-bold">QUALITY INSPECTOR</span>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full p-2 rounded-md text-gray-800 focus:outline-none"
//             />
//           </div>
//           <nav className="space-y-2 flex-1">
//             <button className="w-full text-left p-2 bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🏠</span> Home
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> Dashboard
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📊</span> Reports
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> DLR
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🔍</span> Audit
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📄</span> Pour Card
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🤝</span> Handover
//             </button>
//           </nav>
//         </div>
//         <div className="mt-4">
//           <div className="flex items-center p-2 bg-blue-700 rounded-md">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="User"
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <span className="text-sm">
//               Arshi Kohli
//               <br />
//               #fiedg-9276
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-y-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//           <div className="flex items-center">
//             <span className="text-gray-600 mr-2">DLFΔ</span>
//             <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
//           </div>
//         </div>
//         <p className="text-gray-600 mb-6">
//           The Defect Management & Control System utilizes a relational work or
//           site structure to ensure the inspection process is comprehensive, with
//           no items missed.
//         </p>

//         {/* ---------- CARDS GRID ---------- */}
//         <div className="grid grid-cols-12 gap-4">
//           {/* Row 1 */}
//           {/* Quality Check (wide short, icon mid-right, button bottom-left) */}
//           <div className="col-span-6 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl p-5 flex flex-col justify-between h-40">
//             <div className="flex justify-between">
//               <div className="pr-4">
//                 <h2 className="text-lg font-semibold">Quality Check</h2>
//                 <p className="text-sm text-gray-700 mt-1">
//                   Track inspections to ensure work meets construction standards.
//                 </p>
//               </div>
//               <img
//                 src={QualityCheck}
//                 alt="Quality Check"
//                 className="w-16 h-16"
//               />
//             </div>
//             <button className="bg-white text-teal-800 font-medium px-4 py-2 rounded-lg shadow self-start">
//               Check Now
//             </button>
//           </div>

//           {/* Non-Conformatory (narrow tall, icon bottom-right, button bottom-left) */}
//           <div className="col-span-3 bg-gradient-to-br from-gray-400 to-gray-500 text-white rounded-xl p-5 flex flex-col justify-between h-56">
//             <div>
//               <h2 className="text-lg font-semibold">Non-Conformatory</h2>
//               <p className="text-sm mt-1">
//                 Identify work not matching plans or quality norms.
//               </p>
//             </div>
//             <div className="flex justify-between items-center">
//               <button className="bg-white text-gray-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//               <img src={NC} alt="NC" className="w-16 h-16" />
//             </div>
//           </div>

//           {/* Snag (narrow tall, icon bottom-right, button bottom-left) */}
//           <div className="col-span-3 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl p-5 flex flex-col justify-between h-56">
//             <div>
//               <h2 className="text-lg font-semibold">SNAG - Defects</h2>
//               <p className="text-sm text-gray-700 mt-1">
//                 Log and monitor on-site issues needing fixes.
//               </p>
//             </div>
//             <div className="flex justify-between items-center">
//               <button className="bg-white text-amber-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//               <img src={SNAG} alt="SNAG" className="w-16 h-16" />
//             </div>
//           </div>

//           {/* Row 2 */}
//           {/* EHS (narrow tall, icon bottom-left, button bottom-right) */}
//           <div className="col-span-3 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl p-5 flex flex-col justify-between h-56">
//             <div>
//               <h2 className="text-lg font-semibold">EHS</h2>
//               <p className="text-sm text-gray-700 mt-1">
//                 Environment, Health & Safety. Ensure safety, health, and
//                 environmental compliance.
//               </p>
//             </div>
//             <div className="flex justify-between items-center">
//               <img src={EHS} alt="EHS" className="w-16 h-16" />
//               <button className="bg-white text-cyan-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Work Permit (narrow tall, icon bottom-left, button bottom-right) */}
//           <div className="col-span-3 bg-gradient-to-br from-red-100 to-red-200 rounded-xl p-5 flex flex-col justify-between h-56">
//             <div>
//               <h2 className="text-lg font-semibold">Work Permit</h2>
//               <p className="text-sm text-gray-700 mt-1">
//                 Manage and verify site work permits.
//               </p>
//             </div>
//             <div className="flex justify-between items-center">
//               <img src={WP} alt="WP" className="w-16 h-16" />
//               <button className="bg-white text-red-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Materials (wide short, icon bottom-right, button bottom-left) */}
//           <div className="col-span-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-5 flex flex-col justify-between h-40">
//             <div>
//               <h2 className="text-lg font-semibold">Materials</h2>
//               <p className="text-sm text-gray-700 mt-1">
//                 Track inspections to ensure work meets construction standards.
//               </p>
//             </div>
//             <div className="flex justify-between items-center">
//               <button className="bg-white text-blue-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//               <img src={MAT} alt="Materials" className="w-16 h-16" />
//             </div>
//           </div>
//         </div>
//         {/* ---------- END CARDS GRID ---------- */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// -------------------------------------------
// 11

// import React from "react";
// import QualityCheck from "../assets/Quality-check.png";
// import NC from "../assets/NC.png";
// import SNAG from "../assets/SNAG.png";
// import EHS from "../assets/EHS.png";
// import WP from "../assets/WP.png";
// import MAT from "../assets/MAT.png";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-800 text-white p-4 flex flex-col justify-between">
//         <div>
//           <div className="flex items-center mb-6">
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
//               <span className="text-blue-800 font-bold">COP</span>
//             </div>
//             <span className="text-xl font-bold">QUALITY INSPECTOR</span>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full p-2 rounded-md text-gray-800 focus:outline-none"
//             />
//           </div>
//           <nav className="space-y-2 flex-1">
//             <button className="w-full text-left p-2 bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🏠</span> Home
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> Dashboard
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📊</span> Reports
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> DLR
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🔍</span> Audit
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📄</span> Pour Card
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🤝</span> Handover
//             </button>
//           </nav>
//         </div>
//         <div className="mt-4">
//           <div className="flex items-center p-2 bg-blue-700 rounded-md">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="User"
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <span className="text-sm">
//               Arshi Kohli
//               <br />
//               #fiedg-9276
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-y-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//           <div className="flex items-center">
//             <span className="text-gray-600 mr-2">DLFΔ</span>
//             <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
//           </div>
//         </div>
//         <p className="text-gray-600 mb-6">
//           The Defect Management & Control System utilizes a relational work or
//           site structure to ensure the inspection process is comprehensive, with
//           no items missed.
//         </p>

//         {/* ---------- CARDS GRID ---------- */}
//         <div className="grid grid-cols-12 gap-4">
//           {/* Row 1 */}
//           {/* Quality Check (wide short, badge centered, button centered below) */}
//           <div className="col-span-6 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl p-5 flex flex-col items-center justify-center h-50">
//             <h2 className="text-lg font-semibold text-center">Quality Check</h2>
//             <p className="text-sm text-gray-700 text-center mt-1">
//               Track inspections to ensure work meets construction standards.
//             </p>
//             <img
//               src={QualityCheck}
//               alt="Quality Check Badge"
//               className="w-20 h-20 rounded-full mx-auto my-2"
//             />
//             <button className="bg-white text-teal-800 font-medium px-4 py-2 rounded-lg shadow mt-2">
//               Check Now
//             </button>
//           </div>

//           {/* Non-Conformatory (narrow tall, image right, button centered below) */}
//           <div className="col-span-3 bg-gradient-to-br from-gray-400 to-gray-500 text-white rounded-xl p-5 flex flex-col justify-between h-56">
//             <div>
//               <h2 className="text-lg font-semibold">Non-Conformatory</h2>
//               <p className="text-sm mt-1">
//                 Identify work not matching plans or quality norms.
//               </p>
//             </div>
//             <div className="flex justify-end mb-4">
//               <img src={NC} alt="NC" className="w-16 h-16" />
//             </div>
//             <button className="bg-white text-gray-800 font-medium px-4 py-2 rounded-lg shadow mx-auto">
//               Check Now
//             </button>
//           </div>

//           {/* Snag (narrow tall, image right, button centered below) */}
//           <div className="col-span-3 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl p-5 flex flex-col justify-between h-56">
//             <div>
//               <h2 className="text-lg font-semibold">SNAG - Defects</h2>
//               <p className="text-sm text-gray-700 mt-1">
//                 Log and monitor on-site issues needing fixes.
//               </p>
//             </div>
//             <div className="flex justify-end mb-4">
//               <img src={SNAG} alt="SNAG" className="w-16 h-16" />
//             </div>
//             <button className="bg-white text-amber-800 font-medium px-4 py-2 rounded-lg shadow mx-auto">
//               Check Now
//             </button>
//           </div>

//           {/* Row 2 */}
//           {/* EHS (narrow tall, image bottom-left, button bottom-right) */}
//           <div className="col-span-3 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl p-5 flex flex-col justify-between h-56">
//             <div>
//               <h2 className="text-lg font-semibold">EHS</h2>
//               <p className="text-sm text-gray-700 mt-1">
//                 Environment, Health & Safety. Ensure safety, health, and
//                 environmental compliance.
//               </p>
//             </div>
//             <div className="flex justify-between items-end">
//               <img src={EHS} alt="EHS" className="w-16 h-16" />
//               <button className="bg-white text-cyan-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Work Permit (narrow tall, image bottom-left, button bottom-right) */}
//           <div className="col-span-3 bg-gradient-to-br from-red-100 to-red-200 rounded-xl p-5 flex flex-col justify-between h-56">
//             <div>
//               <h2 className="text-lg font-semibold">Work Permit</h2>
//               <p className="text-sm text-gray-700 mt-1">
//                 Manage and verify site work permits.
//               </p>
//             </div>
//             <div className="flex justify-between items-end">
//               <img src={WP} alt="WP" className="w-16 h-16" />
//               <button className="bg-white text-red-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Materials (wide short, image bottom-right, button centered below text) */}
//           <div className="col-span-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-5 flex flex-col items-center justify-center h-40">
//             <h2 className="text-lg font-semibold text-center">Materials</h2>
//             <p className="text-sm text-gray-700 text-center mt-1">
//               Track inspections to ensure work meets construction standards.
//             </p>
//             <div className="flex justify-end w-full mt-2">
//               <img src={MAT} alt="Materials" className="w-16 h-16" />
//             </div>
//             <button className="bg-white text-blue-800 font-medium px-4 py-2 rounded-lg shadow mt-2">
//               Check Now
//             </button>
//           </div>
//         </div>
//         {/* ---------- END CARDS GRID ---------- */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// -------------------------------------------------------
// 12 final kr do

// import React from "react";
// import QualityCheck from "../assets/Quality-check.png";
// import NC from "../assets/NC.png";
// import SNAG from "../assets/SNAG.png";
// import EHS from "../assets/EHS.png";
// import WP from "../assets/WP.png";
// import MAT from "../assets/MAT.png";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-800 text-white p-4 flex flex-col justify-between">
//         <div>
//           <div className="flex items-center mb-6">
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
//               <span className="text-blue-800 font-bold">COP</span>
//             </div>
//             <span className="text-xl font-bold">QUALITY INSPECTOR</span>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full p-2 rounded-md text-gray-800 focus:outline-none"
//             />
//           </div>
//           <nav className="space-y-2 flex-1">
//             <button className="w-full text-left p-2 bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🏠</span> Home
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> Dashboard
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📊</span> Reports
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> DLR
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🔍</span> Audit
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📄</span> Pour Card
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🤝</span> Handover
//             </button>
//           </nav>
//         </div>
//         <div className="mt-4">
//           <div className="flex items-center p-2 bg-blue-700 rounded-md">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="User"
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <span className="text-sm">
//               Arshi Kohli
//               <br />
//               #fiedg-9276
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-y-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//           <div className="flex items-center">
//             <span className="text-gray-600 mr-2">DLFΔ</span>
//             <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
//           </div>
//         </div>
//         <p className="text-gray-600 mb-6">
//           The Defect Management & Control System utilizes a relational work or
//           site structure to ensure the inspection process is comprehensive, with
//           no items missed.
//         </p>

//         {/* ---------- CARDS GRID ---------- */}
//         <div className="grid grid-cols-12 gap-4">
//           {/* Row 1 */}
//           {/* Quality Check (wide short, badge centered, button centered below) */}
//           <div className="col-span-6 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl p-5 flex flex-col items-center justify-center h-50">
//             <h2 className="text-lg font-semibold text-center">Quality Check</h2>
//             <p className="text-sm text-gray-700 text-center mt-1">
//               Track inspections to ensure work meets construction standards.
//             </p>
//             <img
//               src={QualityCheck}
//               alt="Quality Check Badge"
//               className="w-24 h-24 rounded-full mx-auto my-2 border-4 border-teal-300"
//             />
//             <button className="bg-white text-teal-800 font-medium px-4 py-2 rounded-lg shadow mt-2">
//               Check Now
//             </button>
//           </div>

//           {/* Non-Conformatory (narrow tall, image right, button centered below) */}
//           <div className="col-span-3 bg-gradient-to-br from-gray-400 to-gray-500 text-white rounded-xl p-5 flex flex-col justify-between h-62">
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold">Non-Conformatory</h2>
//               <p className="text-sm mt-1">
//                 Identify work not matching plans or quality norms.
//               </p>
//             </div>
//             <div className="flex justify-end mb-4">
//               <img src={NC} alt="NC" className="w-16 h-16" />
//             </div>
//             <button className="bg-white text-gray-800 font-medium px-4 py-2 rounded-lg shadow mx-auto">
//               Check Now
//             </button>
//           </div>

//           {/* Snag (narrow tall, image right, button centered below) */}
//           <div className="col-span-3 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl p-5 flex flex-col justify-between h-62">
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold">SNAG - Defects</h2>
//               <p className="text-sm text-gray-700 mt-1">
//                 Log and monitor on-site issues needing fixes.
//               </p>
//             </div>
//             <div className="flex justify-end mb-4">
//               <img src={SNAG} alt="SNAG" className="w-16 h-16" />
//             </div>
//             <button className="bg-white text-amber-800 font-medium px-4 py-2 rounded-lg shadow mx-auto">
//               Check Now
//             </button>
//           </div>

//           {/* Row 2 */}
//           {/* EHS (narrow tall, image bottom-left, button bottom-right) */}
//           <div className="col-span-3 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl p-5 flex flex-col justify-between h-62">
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold">EHS</h2>
//               <p className="text-sm text-gray-700 mt-1">
//                 Environment, Health & Safety. Ensure safety, health, and
//                 environmental compliance.
//               </p>
//             </div>
//             <div className="flex justify-between items-end">
//               <img src={EHS} alt="EHS" className="w-16 h-16" />
//               <button className="bg-white text-cyan-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Work Permit (narrow tall, image bottom-left, button bottom-right) */}
//           <div className="col-span-3 bg-gradient-to-br from-red-100 to-red-200 rounded-xl p-5 flex flex-col justify-between h-62">
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold">Work Permit</h2>
//               <p className="text-sm text-gray-700 mt-1">
//                 Manage and verify site work permits.
//               </p>
//             </div>
//             <div className="flex justify-between items-end">
//               <img src={WP} alt="WP" className="w-16 h-16" />
//               <button className="bg-white text-red-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Materials (wide short, image bottom-right, button centered below text) */}
//           <div className="col-span-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-5 flex flex-col items-center justify-center h-50">
//             <h2 className="text-lg font-semibold text-center">Materials</h2>
//             <p className="text-sm text-gray-700 text-center mt-1">
//               Track inspections to ensure work meets construction standards.
//             </p>
//             <div className="flex justify-end w-full mt-2">
//               <img src={MAT} alt="Materials" className="w-16 h-16" />
//             </div>
//             <button className="bg-white text-blue-800 font-medium px-4 py-2 rounded-lg shadow mt-2">
//               Check Now
//             </button>
//           </div>
//         </div>
//         {/* ---------- END CARDS GRID ---------- */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// -----------------------------------------------------------------------------------------------------------------------------------------

//  on of the main

// import React from "react";
// import QualityCheck from "../assets/Quality-check.png";
// import NC from "../assets/NC.png";
// import SNAG from "../assets/SNAG.png";
// import EHS from "../assets/EHS.png";
// import WP from "../assets/WP.png";
// import MAT from "../assets/MAT.png";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-800 text-white p-4 flex flex-col justify-between">
//         <div>
//           <div className="flex items-center mb-6">
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
//               <span className="text-blue-800 font-bold">COP</span>
//             </div>
//             <span className="text-xl font-bold">QUALITY INSPECTOR</span>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full p-2 rounded-md text-gray-800 focus:outline-none"
//             />
//           </div>
//           <nav className="space-y-2 flex-1">
//             <button className="w-full text-left p-2 bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🏠</span> Home
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> Dashboard
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📊</span> Reports
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📋</span> DLR
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🔍</span> Audit
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">📄</span> Pour Card
//             </button>
//             <button className="w-full text-left p-2 hover:bg-blue-700 rounded-md flex items-center">
//               <span className="mr-2">🤝</span> Handover
//             </button>
//           </nav>
//         </div>
//         <div className="mt-4">
//           <div className="flex items-center p-2 bg-blue-700 rounded-md">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="User"
//               className="w-10 h-10 rounded-full mr-2"
//             />
//             <span className="text-sm">
//               Arshi Kohli
//               <br />
//               #fiedg-9276
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-y-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//           <div className="flex items-center">
//             <span className="text-gray-600 mr-2">DLFΔ</span>
//             <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
//           </div>
//         </div>
//         <p className="text-gray-600 mb-6">
//           The Defect Management & Control System utilizes a relational work or
//           site structure to ensure the inspection process is comprehensive, with
//           no items missed.
//         </p>

//         {/* ---------- CARDS GRID ---------- */}
//         <div className="grid grid-cols-12 gap-4 mt-12">
//           {/* Row 1 */}
//           {/* Quality Check (wide short, badge centered, button centered below) */}
//           {/* <div className="col-span-6 bg-gradient-to-r from-[#548583] to-[#cfe7e6] text-white rounded-xl p-5 flex flex-col items-center justify-center h-50">
//             <h2 className="text-lg font-semibold text-center">Quality Check</h2>
//             <p className="text-sm text-center mt-1">
//               Track inspections to ensure work meets construction standards.
//             </p>
//             <img
//               src={QualityCheck}
//               alt="Quality Check Badge"
//               className="w-24 h-24 rounded-full mx-auto my-2 border-4 border-teal-300"
//             />
//             <button className="bg-white text-teal-800 font-medium px-4 py-2 rounded-lg shadow mt-2">
//               Check Now
//             </button>
//           </div> */}
//           {/*  */}

//           <div className="col-span-6 bg-gradient-to-r from-[#548583] to-[#cfe7e6] text-white rounded-xl p-5 flex items-center justify-between h-50">
//             {/* Left Section (Text + Button) */}
//             <div className="flex flex-col justify-between h-full">
//               <div>
//                 <h2 className="text-lg font-semibold text-left">
//                   Quality Check
//                 </h2>
//                 <p className="text-sm text-left mt-3 leading-relaxed mt-4">
//                   Track inspections to ensure work <br />
//                   meets construction standards.
//                 </p>
//               </div>
//               <button className="bg-white text-teal-800 font-medium px-4 py-2 rounded-lg shadow mt-2 w-fit">
//                 Check Now
//               </button>
//             </div>

//             {/* Right Section (Image) */}
//             <div className="flex items-center justify-center mr-8">
//               <img
//                 src={QualityCheck}
//                 alt="Quality Check Badge"
//                 className="w-40 h-40 rounded-full"
//               />
//             </div>
//           </div>

//           {/* Non-Conformatory (narrow tall, image right, button centered below) */}
//           {/* <div className="col-span-3 bg-[#40627D] text-white rounded-xl p-5 flex flex-col justify-between h-76">
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold">Non-Conformatory</h2>
//               <p className="text-sm mt-1">
//                 Identify work not matching plans or quality norms.
//               </p>
//             </div>
//             <div className="flex justify-end mb-4">
//               <img src={NC} alt="NC" className="w-16 h-16" />
//             </div>
//             <button className="bg-white text-gray-800 font-medium px-4 py-2 rounded-lg shadow mx-auto">
//               Check Now
//             </button>
//           </div> */}
//           {/*  */}

//           <div className="col-span-3 bg-[#40627D] text-white rounded-xl p-5 flex flex-col justify-between h-76">
//             {/* Top Section (Heading + Description) */}
//             <div>
//               <h2 className="text-lg font-semibold leading-snug">
//                 Non- <br />
//                 Conformatory
//               </h2>
//               <p className="text-sm mt-3 leading-relaxed">
//                 Identify work not matching <br />
//                 plans or <br />
//                 quality norms.
//               </p>
//             </div>

//             {/* Bottom Section (Button + Image) */}
//             <div className="flex justify-between items-end mt-4 flex-1">
//               {/* Button Left */}
//               <button className="bg-white text-gray-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>

//               {/* Image Right */}
//               <img src={NC} alt="NC" className="h-16 w-14 object-contain" />
//             </div>
//           </div>

//           {/* Snag (narrow tall, image right, button centered below) */}
//           <div className="col-span-3 bg-gradient-to-b from-[#cf976f] to-[#edd1bb] text-white rounded-xl p-5 flex flex-col justify-between h-72">
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold">SNAG - Defects</h2>
//               <p className="text-sm  mt-1">
//                 Log and monitor on-site issues needing fixes.
//               </p>
//             </div>
//             <div className="flex justify-end mb-4">
//               <img src={SNAG} alt="SNAG" className="w-16 h-16" />
//             </div>
//             <button className="bg-white text-amber-800 font-medium px-4 py-2 rounded-lg shadow mx-auto">
//               Check Now
//             </button>
//           </div>

//           {/* Row 2 */}
//           {/* EHS (narrow tall, image bottom-left, button bottom-right) */}
//           <div className="col-span-3 bg-gradient-to-b from-[#38ABC4] to-[#d2f4f9] text-white rounded-xl p-5 flex flex-col justify-between h-72">
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold">EHS</h2>
//               <p className="text-sm  mt-1">
//                 Environment, Health & Safety. Ensure safety, health, and
//                 environmental compliance.
//               </p>
//             </div>
//             <div className="flex justify-between items-end">
//               <img src={EHS} alt="EHS" className="w-16 h-16" />
//               <button className="bg-white text-cyan-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Work Permit (narrow tall, image bottom-left, button bottom-right) */}
//           <div className="col-span-3 bg-gradient-to-b from-[#E17C80] to-[#f3c2c4] text-white rounded-xl p-5 flex flex-col justify-between h-62">
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold">Work Permit</h2>
//               <p className="text-sm  mt-1">
//                 Manage and verify site work permits.
//               </p>
//             </div>
//             <div className="flex justify-between items-end">
//               <img src={WP} alt="WP" className="w-16 h-16" />
//               <button className="bg-white text-red-800 font-medium px-4 py-2 rounded-lg shadow">
//                 Check Now
//               </button>
//             </div>
//           </div>

//           {/* Materials (wide short, image bottom-right, button centered below text) */}
//           <div className="col-span-6 bg-gradient-to-r from-[#63B3EC] to-[#cfe7fa] text-white rounded-xl p-5 flex flex-col items-center justify-center h-50">
//             <h2 className="text-lg font-semibold text-center">Materials</h2>
//             <p className="text-sm  text-center mt-1">
//               Track inspections to ensure work meets construction standards.
//             </p>
//             <div className="flex justify-end w-full mt-2">
//               <img src={MAT} alt="Materials" className="w-16 h-16" />
//             </div>
//             <button className="bg-white text-blue-800 font-medium px-4 py-2 rounded-lg shadow mt-2">
//               Check Now
//             </button>
//           </div>
//         </div>
//         {/* ---------- END CARDS GRID ---------- */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// --------------------------------------------------final hai bahi ye -----------------
// ---------------------------------------------------------------

// import React from "react";
// import QualityCheck from "../assets/Quality-check.png";
// import NC from "../assets/NC.png";
// import SNAG from "../assets/SNAG.png";
// import EHS from "../assets/EHS.png";
// import WP from "../assets/WP.png";
// import MAT from "../assets/MAT.png";
// import Sidebar from "./Sidebar";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar />
//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-y-auto">
//         <div className="bg-[#EBEEF2]">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-3xl font-bold">Dashboard</h1>
//             <div className="flex items-center">
//               <span className="text-gray-600 mr-2">DLFΔ</span>
//               <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
//             </div>
//           </div>
//           <p className="text-gray-600 mb-6">
//             The Defect Management & Control System utilizes a relational work or
//             site structure <br></br>to ensure the inspection process is
//             comprehensive, with no items missed.
//           </p>
//         </div>

//         {/* ---------- CARDS GRID ---------- */}
//         <div className="grid grid-cols-12 gap-4 mt-10 items-start overflow-hidden">
//           {/* Row 1 */}
//           {/* Quality Check (wide short, badge centered, button centered below) */}

//           <div className="col-span-6 bg-gradient-to-r from-[#548583] to-[#cfe7e6] text-white rounded-xl p-5 flex items-center justify-between h-72">
//             {/* Left Section (Text + Button) */}
//             <div className="flex flex-col justify-between h-full">
//               <div>
//                 <h2 className="text-lg font-semibold text-left">
//                   Quality Check
//                 </h2>
//                 <p className="text-sm text-left leading-relaxed mt-4">
//                   Track inspections to ensure work <br />
//                   meets construction standards.
//                 </p>
//               </div>
//               <button className="bg-white text-teal-800 font-medium px-4 py-2 rounded-lg shadow mt-2 w-fit">
//                 Check Now
//               </button>
//             </div>

//             {/* Right Section (Image) */}
//             <div className="flex items-center justify-center mr-8">
//               <img
//                 src={QualityCheck}
//                 alt="Quality Check Badge"
//                 className="w-40 h-40 rounded-full"
//               />
//             </div>
//           </div>

//           {/* Non-Conformatory (narrow tall, image right, button centered below) */}

//           <div className="col-span-3 bg-[#40627D] text-white rounded-xl p-5 flex flex-col h-72 overflow-hidden">
//             {/* Top Section (Heading + Description) */}
//             <div>
//               <h2 className="text-lg font-semibold leading-snug">
//                 Non- <br />
//                 Conformatory
//               </h2>
//               <p className="text-sm mt-3 leading-relaxed">
//                 Identify work not matching <br />
//                 plans or <br />
//                 quality norms.
//               </p>
//             </div>

//             {/* Bottom Section */}
//             <div className="flex justify-between items-end mt-auto relative">
//               {/* Button Left */}
//               <button className="bg-white text-gray-800 font-medium px-4 py-2 rounded-lg shadow ">
//                 Check Now
//               </button>

//               {/* Image Wrapper (fully controllable) */}
//               <div
//                 className="absolute -right-5 -bottom-5"
//                 // You can adjust top/bottom/left/right here
//               >
//                 <img
//                   src={NC}
//                   alt="NC"
//                   className="h-[200px] w-[100px] object-fit"
//                   // Adjust h-[..] and w-[..] for size
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Snag (narrow tall, image right, button centered below) */}
//           <div className="col-span-3 bg-gradient-to-b from-[#cf976f] to-[#edd1bb] text-white rounded-xl p-5 flex flex-col justify-between h-72 relative overflow-hidden">
//             {/* Text Section */}
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold leading-snug">
//                 SNAG - <br />
//                 Defects
//               </h2>
//               <p className="text-sm mt-2 leading-relaxed">
//                 Log and monitor on-site issues <br />
//                 needing fix
//               </p>
//             </div>

//             {/* Image Section */}
//             <div className="absolute bottom-0 left-12 z-0">
//               <img src={SNAG} alt="SNAG" className="w-60 h-44 object-fit" />
//             </div>

//             {/* Button (aligned left) */}
//             <button className="relative z-10 bg-white text-amber-800 font-medium px-4 py-2 rounded-lg shadow self-start">
//               Check Now
//             </button>
//           </div>

//           {/* Row 2 */}
//           {/* EHS (narrow tall, image bottom-left, button bottom-right) */}
//           <div className="col-span-3 bg-gradient-to-b from-[#38ABC4] to-[#d2f4f9] text-white rounded-xl p-5 flex flex-col justify-between h-72 relative overflow-hidden">
//             {/* Text Section */}
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold leading-snug">EHS</h2>
//               <p className="text-sm mt-2 leading-relaxed">
//                 Environment, <br />
//                 Health & Safety <br />
//                 <br />
//                 Ensure safety health <br />
//                 and environmental <br />
//                 compliance
//               </p>
//             </div>

//             {/* Image Section (to the right, like NC/SNAG style) */}
//             <div className="absolute bottom-12 right-3 z-0">
//               <img src={EHS} alt="EHS" className="w-32 h-32 object-contain" />
//             </div>

//             {/* Button (aligned left) */}
//             <button className="relative z-10 bg-white text-cyan-800 font-medium px-4 py-2 rounded-lg shadow self-start">
//               Check Now
//             </button>
//           </div>

//           {/* Work Permit (narrow tall, image bottom-left, button bottom-right) */}
//           <div className="col-span-3 bg-gradient-to-b from-[#E17C80] to-[#f3c2c4] text-white rounded-xl p-5 flex flex-col justify-between h-72 relative overflow-hidden">
//             {/* Text Section */}
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold leading-snug">
//                 Work Permit
//               </h2>
//               <p className="text-sm mt-2 leading-relaxed">
//                 Manage and verify site <br />
//                 Work permits.
//               </p>
//             </div>

//             {/* Image Section (to the right, watermark style like EHS) */}
//             <div className="absolute -bottom-5 -right-0 z-0">
//               <img src={WP} alt="WP" className="w-32 h-60 object-contain" />
//             </div>

//             {/* Button (aligned left) */}
//             <button className="relative z-10 bg-white text-red-800 font-medium px-4 py-2 rounded-lg shadow self-start">
//               Check Now
//             </button>
//           </div>

//           {/* Materials (wide short, image bottom-right, button centered below text) */}
//           <div className="col-span-6 bg-gradient-to-r from-[#63B3EC] to-[#cfe7fa] text-white rounded-xl p-5 flex flex-col justify-between h-72 relative overflow-hidden">
//             {/* Text Section */}
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold leading-snug">Materials</h2>
//               <p className="text-sm mt-2 leading-relaxed">
//                 Track inspections to ensure work <br />
//                 meets construction standards.
//               </p>
//             </div>

//             {/* Image Section (to the right, watermark style) */}
//             <div className="absolute bottom-0 -right-1 z-0">
//               <img
//                 src={MAT}
//                 alt="Materials"
//                 className="w-72 h-52 object-contain"
//               />
//             </div>

//             {/* Button (aligned left) */}
//             <button className="relative z-10 bg-white text-blue-800 font-medium px-4 py-2 rounded-lg shadow self-start">
//               Check Now
//             </button>
//           </div>
//         </div>
//         {/* ---------- END CARDS GRID ---------- */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// ---------------- try to make responsive otherwise upper code if perfect for us -----------
// import React from "react";
// import QualityCheck from "../assets/Quality-check.png";
// import NC from "../assets/NC.png";
// import SNAG from "../assets/SNAG.png";
// import EHS from "../assets/EHS.png";
// import WP from "../assets/WP.png";
// import MAT from "../assets/MAT.png";
// import Sidebar from "./Sidebar";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar />
//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-y-auto">
//         <div className="bg-[#EBEEF2]">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-3xl font-bold">Dashboard</h1>
//             <div className="flex items-center">
//               <span className="text-gray-600 mr-2">DLFΔ</span>
//               <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
//             </div>
//           </div>
//           <p className="text-gray-600 mb-6">
//             The Defect Management & Control System utilizes a relational work or
//             site structure <br></br>to ensure the inspection process is
//             comprehensive, with no items missed.
//           </p>
//         </div>

//         {/* ---------- CARDS GRID ---------- */}
//         <div className="grid grid-cols-12 gap-4 mt-10 items-start overflow-hidden">
//           {/* Row 1 */}
//           {/* Quality Check (wide short, badge centered, button centered below) */}

//           <div className="col-span-6 bg-gradient-to-r from-[#548583] to-[#cfe7e6] text-white rounded-xl p-5 flex items-center justify-between h-72">
//             {/* Left Section (Text + Button) */}
//             <div className="flex flex-col justify-between h-full">
//               <div>
//                 <h2 className="text-lg font-semibold text-left">
//                   Quality Check
//                 </h2>
//                 <p className="text-sm text-left leading-relaxed mt-4">
//                   Track inspections to ensure work <br />
//                   meets construction standards.
//                 </p>
//               </div>
//               <button className="bg-white text-teal-800 font-medium px-4 py-2 rounded-lg shadow mt-2 w-fit">
//                 Check Now
//               </button>
//             </div>

//             {/* Right Section (Image) */}
//             <div className="flex items-center justify-center mr-8">
//               <img
//                 src={QualityCheck}
//                 alt="Quality Check Badge"
//                 className="w-40 h-40 rounded-full"
//               />
//             </div>
//           </div>

//           {/* Non-Conformatory (narrow tall, image right, button centered below) */}

//           <div className="col-span-3 bg-[#40627D] text-white rounded-xl p-5 flex flex-col h-72 overflow-hidden">
//             {/* Top Section (Heading + Description) */}
//             <div>
//               <h2 className="text-lg font-semibold leading-snug">
//                 Non- <br />
//                 Conformatory
//               </h2>
//               <p className="text-sm mt-3 leading-relaxed">
//                 Identify work not matching <br />
//                 plans or <br />
//                 quality norms.
//               </p>
//             </div>

//             {/* Bottom Section */}
//             <div className="flex justify-between items-end mt-auto relative">
//               {/* Button Left */}
//               <button className="bg-white text-gray-800 font-medium px-4 py-2 rounded-lg shadow ">
//                 Check Now
//               </button>

//               {/* Image Wrapper (fully controllable) */}
//               <div
//                 className="absolute -right-5 -bottom-5"
//                 // You can adjust top/bottom/left/right here
//               >
//                 <img
//                   src={NC}
//                   alt="NC"
//                   className="h-[200px] w-[100px] object-fit"
//                   // Adjust h-[..] and w-[..] for size
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Snag (narrow tall, image right, button centered below) */}
//           <div className="col-span-3 bg-gradient-to-b from-[#cf976f] to-[#edd1bb] text-white rounded-xl p-5 flex flex-col justify-between h-72 relative overflow-hidden">
//             {/* Text Section */}
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold leading-snug">
//                 SNAG - <br />
//                 Defects
//               </h2>
//               <p className="text-sm mt-2 leading-relaxed">
//                 Log and monitor on-site issues <br />
//                 needing fix
//               </p>
//             </div>

//             {/* Image Section */}
//             <div className="absolute bottom-0 left-12 z-0">
//               <img src={SNAG} alt="SNAG" className="w-60 h-44 object-fit" />
//             </div>

//             {/* Button (aligned left) */}
//             <button className="relative z-10 bg-white text-amber-800 font-medium px-4 py-2 rounded-lg shadow self-start">
//               Check Now
//             </button>
//           </div>

//           {/* Row 2 */}
//           {/* EHS (narrow tall, image bottom-left, button bottom-right) */}
//           <div className="col-span-3 bg-gradient-to-b from-[#38ABC4] to-[#d2f4f9] text-white rounded-xl p-5 flex flex-col justify-between h-72 relative overflow-hidden">
//             {/* Text Section */}
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold leading-snug">EHS</h2>
//               <p className="text-sm mt-2 leading-relaxed">
//                 Environment, <br />
//                 Health & Safety <br />
//                 <br />
//                 Ensure safety health <br />
//                 and environmental <br />
//                 compliance
//               </p>
//             </div>

//             {/* Image Section (to the right, like NC/SNAG style) */}
//             <div className="absolute bottom-12 right-3 z-0">
//               <img src={EHS} alt="EHS" className="w-32 h-32 object-contain" />
//             </div>

//             {/* Button (aligned left) */}
//             <button className="relative z-10 bg-white text-cyan-800 font-medium px-4 py-2 rounded-lg shadow self-start">
//               Check Now
//             </button>
//           </div>

//           {/* Work Permit (narrow tall, image bottom-left, button bottom-right) */}
//           <div className="col-span-3 bg-gradient-to-b from-[#E17C80] to-[#f3c2c4] text-white rounded-xl p-5 flex flex-col justify-between h-72 relative overflow-hidden">
//             {/* Text Section */}
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold leading-snug">
//                 Work Permit
//               </h2>
//               <p className="text-sm mt-2 leading-relaxed">
//                 Manage and verify site <br />
//                 Work permits.
//               </p>
//             </div>

//             {/* Image Section (to the right, watermark style like EHS) */}
//             <div className="absolute -bottom-5 -right-0 z-0">
//               <img src={WP} alt="WP" className="w-32 h-60 object-contain" />
//             </div>

//             {/* Button (aligned left) */}
//             <button className="relative z-10 bg-white text-red-800 font-medium px-4 py-2 rounded-lg shadow self-start">
//               Check Now
//             </button>
//           </div>

//           {/* Materials (wide short, image bottom-right, button centered below text) */}
//           <div className="col-span-6 bg-gradient-to-r from-[#63B3EC] to-[#cfe7fa] text-white rounded-xl p-5 flex flex-col justify-between h-72 relative overflow-hidden">
//             {/* Text Section */}
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold leading-snug">Materials</h2>
//               <p className="text-sm mt-2 leading-relaxed">
//                 Track inspections to ensure work <br />
//                 meets construction standards.
//               </p>
//             </div>

//             {/* Image Section (to the right, watermark style) */}
//             <div className="absolute bottom-0 -right-1 z-0">
//               <img
//                 src={MAT}
//                 alt="Materials"
//                 className="w-72 h-52 object-contain"
//               />
//             </div>

//             {/* Button (aligned left) */}
//             <button className="relative z-10 bg-white text-blue-800 font-medium px-4 py-2 rounded-lg shadow self-start">
//               Check Now
//             </button>
//           </div>
//         </div>
//         {/* ---------- END CARDS GRID ---------- */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// ----------------------want some more improvment  most acurate till now ===============================================================
// import React, { useState } from "react";
// import { Menu, Bell, X } from "lucide-react";
// import QualityCheck from "../assets/Quality-check.png";
// import NC from "../assets/NC.png";
// import SNAG from "../assets/SNAG.png";
// import EHS from "../assets/EHS.png";
// import WP from "../assets/WP.png";
// import MAT from "../assets/MAT.png";
// import Sidebar from "./Sidebar";
// import QcopLogo from "../assets/qcop-logo.png"; // used for mobile header

// const Dashboard = () => {
//   const [search, setSearch] = useState("");

//   return (
//     <>
//       {/* ================= DESKTOP (EXACTLY YOUR ORIGINAL - NO CHANGES) ================= */}
//       <div className="hidden md:block">
//         <div className="flex h-screen bg-gray-100">
//           {/* Sidebar */}
//           <Sidebar />
//           {/* Main Content */}
//           <div className="flex-1 p-6 overflow-y-auto">
//             <div className="bg-[#EBEEF2]">
//               <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-3xl font-bold">Dashboard</h1>
//                 <div className="flex items-center">
//                   <span className="text-gray-600 mr-2">DLFΔ</span>
//                   <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-6">
//                 The Defect Management & Control System utilizes a relational
//                 work or site structure <br></br>to ensure the inspection process
//                 is comprehensive, with no items missed.
//               </p>
//             </div>

//             {/* ---------- CARDS GRID ---------- */}
//             <div className="grid grid-cols-12 gap-4 mt-10 items-start overflow-hidden">
//               {/* Row 1 */}
//               {/* Quality Check (wide short, badge centered, button centered below) */}

//               <div className="col-span-6 bg-gradient-to-r from-[#548583] to-[#cfe7e6] text-white rounded-xl p-5 flex items-center justify-between h-72">
//                 {/* Left Section (Text + Button) */}
//                 <div className="flex flex-col justify-between h-full">
//                   <div>
//                     <h2 className="text-lg font-semibold text-left">
//                       Quality Check
//                     </h2>
//                     <p className="text-sm text-left leading-relaxed mt-4">
//                       Track inspections to ensure work <br />
//                       meets construction standards.
//                     </p>
//                   </div>
//                   <button className="bg-white text-teal-800 font-medium px-4 py-2 rounded-lg shadow mt-2 w-fit">
//                     Check Now
//                   </button>
//                 </div>

//                 {/* Right Section (Image) */}
//                 <div className="flex items-center justify-center mr-8">
//                   <img
//                     src={QualityCheck}
//                     alt="Quality Check Badge"
//                     className="w-40 h-40 rounded-full"
//                   />
//                 </div>
//               </div>

//               {/* Non-Conformatory (narrow tall, image right, button centered below) */}

//               <div className="col-span-3 bg-[#40627D] text-white rounded-xl p-5 flex flex-col h-72 overflow-hidden">
//                 {/* Top Section (Heading + Description) */}
//                 <div>
//                   <h2 className="text-lg font-semibold leading-snug">
//                     Non- <br />
//                     Conformatory
//                   </h2>
//                   <p className="text-sm mt-3 leading-relaxed">
//                     Identify work not matching <br />
//                     plans or <br />
//                     quality norms.
//                   </p>
//                 </div>

//                 {/* Bottom Section */}
//                 <div className="flex justify-between items-end mt-auto relative">
//                   {/* Button Left */}
//                   <button className="bg-white text-gray-800 font-medium px-4 py-2 rounded-lg shadow ">
//                     Check Now
//                   </button>

//                   {/* Image Wrapper (fully controllable) */}
//                   <div
//                     className="absolute -right-5 -bottom-5"
//                     // You can adjust top/bottom/left/right here
//                   >
//                     <img
//                       src={NC}
//                       alt="NC"
//                       className="h-[200px] w-[100px] object-fit"
//                       // Adjust h-[..] and w-[..] for size
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Snag (narrow tall, image right, button centered below) */}
//               <div className="col-span-3 bg-gradient-to-b from-[#cf976f] to-[#edd1bb] text-white rounded-xl p-5 flex flex-col justify-between h-72 relative overflow-hidden">
//                 {/* Text Section */}
//                 <div className="flex-1">
//                   <h2 className="text-lg font-semibold leading-snug">
//                     SNAG - <br />
//                     Defects
//                   </h2>
//                   <p className="text-sm mt-2 leading-relaxed">
//                     Log and monitor on-site issues <br />
//                     needing fix
//                   </p>
//                 </div>

//                 {/* Image Section */}
//                 <div className="absolute bottom-0 left-12 z-0">
//                   <img src={SNAG} alt="SNAG" className="w-60 h-44 object-fit" />
//                 </div>

//                 {/* Button (aligned left) */}
//                 <button className="relative z-10 bg-white text-amber-800 font-medium px-4 py-2 rounded-lg shadow self-start">
//                   Check Now
//                 </button>
//               </div>

//               {/* Row 2 */}
//               {/* EHS (narrow tall, image bottom-left, button bottom-right) */}
//               <div className="col-span-3 bg-gradient-to-b from-[#38ABC4] to-[#d2f4f9] text-white rounded-xl p-5 flex flex-col justify-between h-72 relative overflow-hidden">
//                 {/* Text Section */}
//                 <div className="flex-1">
//                   <h2 className="text-lg font-semibold leading-snug">EHS</h2>
//                   <p className="text-sm mt-2 leading-relaxed">
//                     Environment, <br />
//                     Health & Safety <br />
//                     <br />
//                     Ensure safety health <br />
//                     and environmental <br />
//                     compliance
//                   </p>
//                 </div>

//                 {/* Image Section (to the right, like NC/SNAG style) */}
//                 <div className="absolute bottom-12 right-3 z-0">
//                   <img
//                     src={EHS}
//                     alt="EHS"
//                     className="w-32 h-32 object-contain"
//                   />
//                 </div>

//                 {/* Button (aligned left) */}
//                 <button className="relative z-10 bg-white text-cyan-800 font-medium px-4 py-2 rounded-lg shadow self-start">
//                   Check Now
//                 </button>
//               </div>

//               {/* Work Permit (narrow tall, image bottom-left, button bottom-right) */}
//               <div className="col-span-3 bg-gradient-to-b from-[#E17C80] to-[#f3c2c4] text-white rounded-xl p-5 flex flex-col justify-between h-72 relative overflow-hidden">
//                 {/* Text Section */}
//                 <div className="flex-1">
//                   <h2 className="text-lg font-semibold leading-snug">
//                     Work Permit
//                   </h2>
//                   <p className="text-sm mt-2 leading-relaxed">
//                     Manage and verify site <br />
//                     Work permits.
//                   </p>
//                 </div>

//                 {/* Image Section (to the right, watermark style like EHS) */}
//                 <div className="absolute -bottom-5 -right-0 z-0">
//                   <img src={WP} alt="WP" className="w-32 h-60 object-contain" />
//                 </div>

//                 {/* Button (aligned left) */}
//                 <button className="relative z-10 bg-white text-red-800 font-medium px-4 py-2 rounded-lg shadow self-start">
//                   Check Now
//                 </button>
//               </div>

//               {/* Materials (wide short, image bottom-right, button centered below text) */}
//               <div className="col-span-6 bg-gradient-to-r from-[#63B3EC] to-[#cfe7fa] text-white rounded-xl p-5 flex flex-col justify-between h-72 relative overflow-hidden">
//                 {/* Text Section */}
//                 <div className="flex-1">
//                   <h2 className="text-lg font-semibold leading-snug">
//                     Materials
//                   </h2>
//                   <p className="text-sm mt-2 leading-relaxed">
//                     Track inspections to ensure work <br />
//                     meets construction standards.
//                   </p>
//                 </div>

//                 {/* Image Section (to the right, watermark style) */}
//                 <div className="absolute bottom-0 -right-1 z-0">
//                   <img
//                     src={MAT}
//                     alt="Materials"
//                     className="w-72 h-52 object-contain"
//                   />
//                 </div>

//                 {/* Button (aligned left) */}
//                 <button className="relative z-10 bg-white text-blue-800 font-medium px-4 py-2 rounded-lg shadow self-start">
//                   Check Now
//                 </button>
//               </div>
//             </div>
//             {/* ---------- END CARDS GRID ---------- */}
//           </div>
//         </div>
//       </div>

//       {/* ================= MOBILE (NEW, DOES NOT TOUCH DESKTOP) ================= */}
//       <div className="block md:hidden bg-gray-100 min-h-screen p-4">
//         {/* Top bar (Hamburger - Logo - Bell) */}
//         <div className="flex items-center justify-between mb-4">
//           <button aria-label="open menu">
//             <Menu className="w-6 h-6 text-gray-700" />
//           </button>
//           <img src={QcopLogo} alt="QCOP Logo" className="h-10 object-contain" />
//           <button aria-label="notifications">
//             <Bell className="w-6 h-6 text-gray-700" />
//           </button>
//         </div>

//         {/* Search bar with clear */}
//         <div className="flex items-center bg-white rounded-full px-3 py-2 mb-4 shadow">
//           <input
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search module..."
//             className="flex-1 outline-none text-sm"
//           />
//           {search ? (
//             <button onClick={() => setSearch("")} className="p-1">
//               <X className="w-5 h-5 text-gray-500" />
//             </button>
//           ) : (
//             <button className="p-1">
//               <X className="w-5 h-5 text-gray-300" />
//             </button>
//           )}
//         </div>

//         {/* Mobile Cards arrangement (as you asked) */}
//         <div className="space-y-4">
//           {/* 1) Quality Check - full width */}
//           <div className="bg-gradient-to-r from-[#548583] to-[#cfe7e6] text-white rounded-xl p-4 flex flex-col h-52">
//             <div>
//               <h2 className="text-lg font-semibold">Quality Check</h2>
//               <p className="text-sm mt-2">
//                 Track inspections to ensure work meets standards.
//               </p>
//             </div>
//             <div className="flex-1 flex items-center justify-center">
//               <img
//                 src={QualityCheck}
//                 alt="Quality"
//                 className="max-h-24 rounded-full"
//               />
//             </div>
//           </div>

//           {/* 2) NC + SNAG (same row) */}
//           <div className="grid grid-cols-2 gap-4">
//             <div className="bg-[#40627D] text-white rounded-xl p-4 flex flex-col h-44">
//               <h3 className="text-sm font-semibold">Non- Conformatory</h3>
//               <div className="flex-1 flex items-center justify-center">
//                 <img src={NC} alt="NC" className="max-h-20" />
//               </div>
//             </div>

//             <div className="bg-gradient-to-b from-[#cf976f] to-[#edd1bb] text-white rounded-xl p-4 flex flex-col h-44">
//               <h3 className="text-sm font-semibold">SNAG - Defects</h3>
//               <div className="flex-1 flex items-center justify-center">
//                 <img src={SNAG} alt="SNAG" className="max-h-20" />
//               </div>
//             </div>
//           </div>

//           {/* 3) EHS + Work Permit (same row) */}
//           <div className="grid grid-cols-2 gap-4">
//             <div className="bg-gradient-to-b from-[#38ABC4] to-[#d2f4f9] text-white rounded-xl p-4 flex flex-col h-44">
//               <h3 className="text-sm font-semibold">EHS</h3>
//               <div className="flex-1 flex items-center justify-center">
//                 <img src={EHS} alt="EHS" className="max-h-20" />
//               </div>
//             </div>

//             <div className="bg-gradient-to-b from-[#E17C80] to-[#f3c2c4] text-white rounded-xl p-4 flex flex-col h-44">
//               <h3 className="text-sm font-semibold">Work Permit</h3>
//               <div className="flex-1 flex items-center justify-center">
//                 <img src={WP} alt="WP" className="max-h-20" />
//               </div>
//             </div>
//           </div>

//           {/* 4) Materials - full width */}
//           <div className="bg-gradient-to-r from-[#63B3EC] to-[#cfe7fa] text-white rounded-xl p-4 flex flex-col h-52">
//             <h3 className="text-lg font-semibold">Materials</h3>
//             <div className="flex-1 flex items-center justify-center">
//               <img src={MAT} alt="MAT" className="max-h-24" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

// =============================================================================try to get more updated below dashboard is perfect for us no problem

import React, { useState } from "react";
import { Menu, Bell, X } from "lucide-react";
import QualityCheck from "../assets/Quality-check.png";
import NC from "../assets/NC.png";
import SNAG from "../assets/SNAG.png";
import EHS from "../assets/EHS.png";
import WP from "../assets/WP.png";
import MAT from "../assets/MAT.png";
import Sidebar from "./Sidebar";
import QcopLogo from "../assets/qcop-logo.png"; // used for mobile header
import { motion, AnimatePresence } from "framer-motion";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP (EXACTLY YOUR ORIGINAL - NO CHANGES) ================= */}
      <div className="hidden md:block">
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          {/* <Sidebar /> */}

          {/* Mobile Sidebar */}
          {/* Mobile Sidebar (only shows when isSidebarOpen = true) */}

          {/* Main Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="bg-[#EBEEF2]">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">DLFΔ</span>
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                The Defect Management & Control System utilizes a relational
                work or site structure <br></br>to ensure the inspection process
                is comprehensive, with no items missed.
              </p>
            </div>

            {/* ---------- CARDS GRID ---------- */}
            <div className="grid grid-cols-12 gap-4 mt-10 items-start overflow-hidden">
              {/* Row 1 */}
              {/* Quality Check (wide short, badge centered, button centered below) */}

              <div className="col-span-6 bg-gradient-to-r from-[#548583] to-[#cfe7e6] text-white rounded-xl p-5 flex items-center justify-between h-72">
                {/* Left Section (Text + Button) */}
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-lg font-semibold text-left">
                      Quality Check
                    </h2>
                    <p className="text-sm text-left leading-relaxed mt-4">
                      Track inspections to ensure work <br />
                      meets construction standards.
                    </p>
                  </div>
                  <button className="bg-white text-teal-800 font-medium px-4 py-2 rounded-lg shadow mt-2 w-fit">
                    Check Now
                  </button>
                </div>

                {/* Right Section (Image) */}
                <div className="flex items-center justify-center mr-8">
                  <img
                    src={QualityCheck}
                    alt="Quality Check Badge"
                    className="w-40 h-40 rounded-full"
                  />
                </div>
              </div>

              {/* Non-Conformatory (narrow tall, image right, button centered below) */}

              <div className="col-span-3 bg-[#40627D] text-white rounded-xl p-5 flex flex-col h-72 overflow-hidden">
                {/* Top Section (Heading + Description) */}
                <div>
                  <h2 className="text-lg font-semibold leading-snug">
                    Non- <br />
                    Conformatory
                  </h2>
                  <p className="text-sm mt-3 leading-relaxed">
                    Identify work not matching <br />
                    plans or <br />
                    quality norms.
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-end mt-auto relative">
                  {/* Button Left */}
                  <button className="bg-white text-gray-800 font-medium px-4 py-2 rounded-lg shadow ">
                    Check Now
                  </button>

                  {/* Image Wrapper (fully controllable) */}
                  <div
                    className="absolute -right-5 -bottom-5"
                    // You can adjust top/bottom/left/right here
                  >
                    <img
                      src={NC}
                      alt="NC"
                      className="h-[200px] w-[100px] object-fit"
                      // Adjust h-[..] and w-[..] for size
                    />
                  </div>
                </div>
              </div>

              {/* Snag (narrow tall, image right, button centered below) */}
              <div className="col-span-3 bg-gradient-to-b from-[#cf976f] to-[#edd1bb] text-white rounded-xl p-5 flex flex-col justify-between h-72 relative overflow-hidden">
                {/* Text Section */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold leading-snug">
                    SNAG - <br />
                    Defects
                  </h2>
                  <p className="text-sm mt-2 leading-relaxed">
                    Log and monitor on-site issues <br />
                    needing fix
                  </p>
                </div>

                {/* Image Section */}
                <div className="absolute bottom-0 left-12 z-0">
                  <img src={SNAG} alt="SNAG" className="w-60 h-44 object-fit" />
                </div>

                {/* Button (aligned left) */}
                <button className="relative z-10 bg-white text-amber-800 font-medium px-4 py-2 rounded-lg shadow self-start">
                  Check Now
                </button>
              </div>

              {/* Row 2 */}
              {/* EHS (narrow tall, image bottom-left, button bottom-right) */}
              <div className="col-span-3 bg-gradient-to-b from-[#38ABC4] to-[#d2f4f9] text-white rounded-xl p-5 flex flex-col justify-between h-72 relative overflow-hidden">
                {/* Text Section */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold leading-snug">EHS</h2>
                  <p className="text-sm mt-2 leading-relaxed">
                    Environment, <br />
                    Health & Safety <br />
                    <br />
                    Ensure safety health <br />
                    and environmental <br />
                    compliance
                  </p>
                </div>

                {/* Image Section (to the right, like NC/SNAG style) */}
                <div className="absolute bottom-12 right-3 z-0">
                  <img
                    src={EHS}
                    alt="EHS"
                    className="w-32 h-32 object-contain"
                  />
                </div>

                {/* Button (aligned left) */}
                <button className="relative z-10 bg-white text-cyan-800 font-medium px-4 py-2 rounded-lg shadow self-start">
                  Check Now
                </button>
              </div>

              {/* Work Permit (narrow tall, image bottom-left, button bottom-right) */}
              <div className="col-span-3 bg-gradient-to-b from-[#E17C80] to-[#f3c2c4] text-white rounded-xl p-5 flex flex-col justify-between h-72 relative overflow-hidden">
                {/* Text Section */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold leading-snug">
                    Work Permit
                  </h2>
                  <p className="text-sm mt-2 leading-relaxed">
                    Manage and verify site <br />
                    Work permits.
                  </p>
                </div>

                {/* Image Section (to the right, watermark style like EHS) */}
                <div className="absolute -bottom-5 -right-0 z-0">
                  <img src={WP} alt="WP" className="w-32 h-60 object-contain" />
                </div>

                {/* Button (aligned left) */}
                <button className="relative z-10 bg-white text-red-800 font-medium px-4 py-2 rounded-lg shadow self-start">
                  Check Now
                </button>
              </div>

              {/* Materials (wide short, image bottom-right, button centered below text) */}
              <div className="col-span-6 bg-gradient-to-r from-[#63B3EC] to-[#cfe7fa] text-white rounded-xl p-5 flex flex-col justify-between h-72 relative overflow-hidden">
                {/* Text Section */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold leading-snug">
                    Materials
                  </h2>
                  <p className="text-sm mt-2 leading-relaxed">
                    Track inspections to ensure work <br />
                    meets construction standards.
                  </p>
                </div>

                {/* Image Section (to the right, watermark style) */}
                <div className="absolute bottom-0 -right-1 z-0">
                  <img
                    src={MAT}
                    alt="Materials"
                    className="w-72 h-52 object-contain"
                  />
                </div>

                {/* Button (aligned left) */}
                <button className="relative z-10 bg-white text-blue-800 font-medium px-4 py-2 rounded-lg shadow self-start">
                  Check Now
                </button>
              </div>
            </div>
            {/* ---------- END CARDS GRID ---------- */}
          </div>
        </div>
      </div>

      {/* ================= MOBILE (NEW, DOES NOT TOUCH DESKTOP) ================= */}

      <div className="block md:hidden bg-gray-100 min-h-screen p-4">
        {/* alag alga comment kara hai 3 se 4 bar m  */}
        {/* Top bar (Hamburger - Logo - Bell) */}
        {/* <div className="flex items-center justify-between mb-4">
          <button aria-label="open menu">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setIsSidebarOpen(true)}
          > */}
        {/* you can use lucide-react Menu icon or your current one */}
        {/* <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button> */}
        {/* handle image in phone wihth respective to sidebar */}

        {/* (
          <img src={QcopLogo} alt="QCOP Logo" className="h-10 object-contain" />
          ) */}

        {/* {!isSidebarOpen && (
            <img
              src={QcopLogo}
              alt="QCOP Logo"
              className="h-10 object-contain"
            />
          )}

          <button aria-label="notifications">
            <Bell className="w-6 h-6 text-gray-700" />
          </button>
        </div> */}

        {/* Search bar with clear */}
        {/* <div className="flex items-center bg-white rounded-full px-3 py-2 mb-4 shadow">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search module..."
            className="flex-1 outline-none text-sm"
          />
          {search ? (
            <button onClick={() => setSearch("")} className="p-1">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          ) : (
            <button className="p-1">
              <X className="w-5 h-5 text-gray-300" />
            </button>
          )}
        </div> */}

        {/* ================= MOBILE SIDEBAR OVERLAY ================= */}
        {/* <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 md:hidden"
              onClick={() => setIsSidebarOpen(false)} // Close sidebar on outside click
            >
              Sidebar
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3 }}
                className="relative h-full w-[55%] bg-white shadow-lg"
                onClick={(e) => e.stopPropagation()} // Prevent clicks on sidebar from closing it
              >
                <Sidebar />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence> */}

        {/* Mobile Cards arrangement (as you asked) */}

        <div className="space-y-4">
          {/* 1) Quality Check - full width */}
          <div className="bg-gradient-to-r from-[#548583] to-[#cfe7e6] text-white rounded-xl p-4 flex flex-col h-52">
            <div>
              <h2 className="text-lg font-semibold">Quality Check</h2>
              <p className="text-sm mt-2">
                Track inspections to ensure work meets standards.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={QualityCheck}
                alt="Quality"
                className="max-h-24 rounded-full"
              />
            </div>
          </div>

          {/* 2) NC + SNAG (same row) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#40627D] text-white rounded-xl p-4 flex flex-col h-44">
              <h3 className="text-sm font-semibold">Non- Conformatory</h3>
              <div className="flex-1 flex items-center justify-center">
                <img src={NC} alt="NC" className="max-h-20" />
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#cf976f] to-[#edd1bb] text-white rounded-xl p-4 flex flex-col h-44">
              <h3 className="text-sm font-semibold">SNAG - Defects</h3>
              <div className="flex-1 flex items-center justify-center">
                <img src={SNAG} alt="SNAG" className="max-h-20" />
              </div>
            </div>
          </div>

          {/* 3) EHS + Work Permit (same row) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-b from-[#38ABC4] to-[#d2f4f9] text-white rounded-xl p-4 flex flex-col h-44">
              <h3 className="text-sm font-semibold">EHS</h3>
              <div className="flex-1 flex items-center justify-center">
                <img src={EHS} alt="EHS" className="max-h-20" />
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#E17C80] to-[#f3c2c4] text-white rounded-xl p-4 flex flex-col h-44">
              <h3 className="text-sm font-semibold">Work Permit</h3>
              <div className="flex-1 flex items-center justify-center">
                <img src={WP} alt="WP" className="max-h-20" />
              </div>
            </div>
          </div>

          {/* 4) Materials - full width */}
          <div className="bg-gradient-to-r from-[#63B3EC] to-[#cfe7fa] text-white rounded-xl p-4 flex flex-col h-52">
            <h3 className="text-lg font-semibold">Materials</h3>
            <div className="flex-1 flex items-center justify-center">
              <img src={MAT} alt="MAT" className="max-h-24" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

// ---------------------------------------------
