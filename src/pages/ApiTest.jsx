// import React, { useEffect, useState } from "react";
// import { getTestMessage } from "../api/towerService";

// export default function ApiTest() {
//   const [msg, setMsg] = useState(null);

//   useEffect(() => {
//     getTestMessage()
//       .then(setMsg)
//       .catch((err) => console.error("❌ API Error:", err));
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">🔗 API Connection Test</h1>
//       {msg ? (
//         <pre className="mt-4 bg-gray-100 p-4 rounded">
//           {JSON.stringify(msg, null, 2)}
//         </pre>
//       ) : (
//         <p className="mt-4">Loading...</p>
//       )}
//     </div>
//   );
// }

// ====================================

// import React, { useEffect, useState } from "react";
// import { getTowerStatus } from "../api/towerService";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Legend,
// } from "recharts";

// export default function ApiTest() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     getTowerStatus().then(setData).catch(console.error);
//   }, []);

//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Tower Status Dashboard</h1>

//       {data.length === 0 ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Pie Chart */}
//           <div className="bg-white p-4 rounded shadow">
//             <h2 className="text-xl mb-4">Tower Status Pie</h2>
//             <PieChart width={300} height={300}>
//               <Pie
//                 data={data}
//                 dataKey="count"
//                 nameKey="status"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={80}
//                 fill="#8884d8"
//                 label
//               >
//                 {data.map((entry, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </div>

//           {/* Bar Chart */}
//           <div className="bg-white p-4 rounded shadow">
//             <h2 className="text-xl mb-4">Tower Status Bar</h2>
//             <BarChart width={400} height={300} data={data}>
//               <XAxis dataKey="tower" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="count" fill="#8884d8" />
//             </BarChart>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// -----------------------------------------
// import React, { useEffect, useState } from "react";
// import { getTowerStatus } from "../api/towerService";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Legend,
// } from "recharts";

// export default function ApiTest() {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     getTowerStatus()
//       .then((rows) => {
//         // Transform raw rows into status counts
//         const statusCounts = rows.reduce((acc, row) => {
//           const status = row["Latest Status"]; // your API column
//           acc[status] = (acc[status] || 0) + 1;
//           return acc;
//         }, {});

//         // Format for Recharts
//         const formatted = Object.entries(statusCounts).map(
//           ([status, count]) => ({
//             status,
//             count,
//           })
//         );

//         setChartData(formatted);
//       })
//       .catch(console.error);
//   }, []);

//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0"];

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Tower Status Dashboard</h1>

//       {chartData.length === 0 ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Pie Chart */}
//           <div className="bg-white p-4 rounded shadow">
//             <h2 className="text-xl mb-4">Status Distribution</h2>
//             <PieChart width={300} height={300}>
//               <Pie
//                 data={chartData}
//                 dataKey="count"
//                 nameKey="status"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 fill="#8884d8"
//                 label
//               >
//                 {chartData.map((entry, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </div>

//           {/* Bar Chart */}
//           <div className="bg-white p-4 rounded shadow">
//             <h2 className="text-xl mb-4">Status Bar Chart</h2>
//             <BarChart width={400} height={300} data={chartData}>
//               <XAxis dataKey="status" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="count" fill="#8884d8" />
//             </BarChart>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// ============================================

// import React, { useEffect, useState } from "react";
// import { getTowerStatus } from "../api/towerService";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// export default function ApiTest() {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     getTowerStatus()
//       .then((rows) => {
//         const statusCounts = rows.reduce((acc, row) => {
//           const status = row["Latest Status"];
//           acc[status] = (acc[status] || 0) + 1;
//           return acc;
//         }, {});

//         const formatted = Object.entries(statusCounts).map(
//           ([status, count]) => ({
//             status,
//             count,
//           })
//         );

//         setChartData(formatted);
//       })
//       .catch(console.error);
//   }, []);

//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0"];

//   return (
//     <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
//         Tower Status Dashboard
//       </h1>

//       {chartData.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg">Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Pie Chart Card */}
//           <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
//             <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
//               Status Distribution
//             </h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={chartData}
//                   dataKey="count"
//                   nameKey="status"
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={80}
//                   fill="#8884d8"
//                   label={({ name, percent }) =>
//                     `${name} ${(percent * 100).toFixed(0)}%`
//                   }
//                 >
//                   {chartData.map((entry, index) => (
//                     <Cell
//                       key={`cell-${index}`}
//                       fill={COLORS[index % COLORS.length]}
//                     />
//                   ))}
//                 </Pie>
//                 <Tooltip
//                   contentStyle={{ backgroundColor: "#f9fafb", borderRadius: 8 }}
//                 />
//                 <Legend verticalAlign="bottom" height={36} />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Bar Chart Card */}
//           <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
//             <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
//               Status Bar Chart
//             </h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart
//                 data={chartData}
//                 margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
//               >
//                 <XAxis dataKey="status" tick={{ fill: "#555" }} />
//                 <YAxis tick={{ fill: "#555" }} />
//                 <Tooltip
//                   contentStyle={{ backgroundColor: "#f9fafb", borderRadius: 8 }}
//                 />
//                 <Legend verticalAlign="top" height={36} />
//                 <Bar dataKey="count" fill="#8884d8" radius={[6, 6, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// ============================================================

// import React, { useEffect, useState } from "react";
// import Chart from "react-apexcharts";
// import { getTowerStatus } from "../api/towerService";

// export default function ApiTest() {
//   const [chartData, setChartData] = useState([]);
//   const [selectedStatus, setSelectedStatus] = useState(null);

//   useEffect(() => {
//     getTowerStatus()
//       .then((rows) => {
//         const statusCounts = rows.reduce((acc, row) => {
//           const status = row["Latest Status"];
//           acc[status] = (acc[status] || 0) + 1;
//           return acc;
//         }, {});

//         const formatted = Object.entries(statusCounts).map(
//           ([status, count]) => ({
//             status,
//             count,
//           })
//         );

//         setChartData(formatted);
//       })
//       .catch(console.error);
//   }, []);

//   const pieOptions = {
//     chart: {
//       type: "pie",
//       animations: { enabled: true, easing: "easeinout", speed: 800 },
//       toolbar: { show: true },
//       events: {
//         dataPointSelection: (event, chartContext, config) => {
//           // Set selected status on slice click
//           const clickedStatus = chartData[config.dataPointIndex].status;
//           setSelectedStatus(clickedStatus);
//         },
//       },
//     },
//     labels: chartData.map((d) => d.status),
//     legend: { position: "bottom" },
//     tooltip: {
//       y: {
//         formatter: (val) => `${val} records`,
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 768,
//         options: {
//           chart: { width: "100%" },
//           legend: { position: "bottom" },
//         },
//       },
//     ],
//   };

//   const barOptions = {
//     chart: {
//       type: "bar",
//       animations: { enabled: true, easing: "easeinout", speed: 800 },
//       toolbar: { show: true },
//     },
//     plotOptions: { bar: { borderRadius: 6 } },
//     xaxis: { categories: chartData.map((d) => d.status) },
//     tooltip: {
//       y: { formatter: (val) => `${val} records` },
//     },
//     responsive: [
//       {
//         breakpoint: 768,
//         options: {
//           chart: { width: "100%" },
//           plotOptions: { bar: { borderRadius: 4 } },
//         },
//       },
//     ],
//   };

//   return (
//     <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
//         Tower Status Dashboard
//       </h1>

//       {chartData.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg">Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Pie Chart Card */}
//           <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
//             <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
//               Status Distribution
//             </h2>
//             <Chart
//               options={pieOptions}
//               series={chartData.map((d) => d.count)}
//               type="pie"
//               width="100%"
//               height={300}
//             />
//             {selectedStatus && (
//               <p className="mt-4 text-gray-600 font-medium">
//                 Selected Status:{" "}
//                 <span className="font-bold">{selectedStatus}</span>
//               </p>
//             )}
//           </div>

//           {/* Bar Chart Card */}
//           <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
//             <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
//               Status Bar Chart
//             </h2>
//             <Chart
//               options={barOptions}
//               series={[
//                 { name: "Records", data: chartData.map((d) => d.count) },
//               ]}
//               type="bar"
//               width="100%"
//               height={300}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// ==============upper code is one of the best

// import React, { useEffect, useState } from "react";
// import Chart from "react-apexcharts";
// import { getTowerStatus } from "../api/towerService";

// export default function ApiTest() {
//   const [chartData, setChartData] = useState([]);
//   const [selectedStatus, setSelectedStatus] = useState(null);

//   useEffect(() => {
//     getTowerStatus()
//       .then((rows) => {
//         const statusCounts = rows.reduce((acc, row) => {
//           const status = row["Latest Status"];
//           acc[status] = (acc[status] || 0) + 1;
//           return acc;
//         }, {});

//         const formatted = Object.entries(statusCounts).map(
//           ([status, count]) => ({
//             status,
//             count,
//           })
//         );

//         setChartData(formatted);
//       })
//       .catch(console.error);
//   }, []);

//   // Filter chart data if a status is selected
//   const filteredData = selectedStatus
//     ? chartData.filter((d) => d.status === selectedStatus)
//     : chartData;

//   // Gradient Colors
//   const gradientColors = [
//     "#0088FE",
//     "#00C49F",
//     "#FFBB28",
//     "#FF8042",
//     "#A020F0",
//     "#FF6F61",
//     "#6A5ACD",
//   ];

//   // Pie Chart Options
//   const pieOptions = {
//     chart: {
//       type: "pie",
//       animations: { enabled: true, easing: "easeinout", speed: 800 },
//       toolbar: { show: true },
//       events: {
//         dataPointSelection: (event, chartContext, config) => {
//           const clickedStatus = filteredData[config.dataPointIndex].status;
//           setSelectedStatus(
//             clickedStatus === selectedStatus ? null : clickedStatus
//           );
//         },
//       },
//     },
//     labels: filteredData.map((d) => d.status),
//     legend: { position: "bottom", fontSize: "14px" },
//     tooltip: {
//       y: {
//         formatter: (val) => `${val} records`,
//       },
//     },
//     fill: {
//       type: "gradient",
//       gradient: {
//         shade: "light",
//         type: "vertical",
//         gradientToColors: gradientColors,
//         stops: [0, 100],
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 768,
//         options: {
//           chart: { width: "100%" },
//           legend: { position: "bottom" },
//         },
//       },
//     ],
//   };

//   // Bar Chart Options
//   const barOptions = {
//     chart: {
//       type: "bar",
//       animations: { enabled: true, easing: "easeinout", speed: 800 },
//       toolbar: { show: true },
//       events: {
//         dataPointSelection: (event, chartContext, config) => {
//           const clickedStatus = filteredData[config.dataPointIndex].status;
//           setSelectedStatus(
//             clickedStatus === selectedStatus ? null : clickedStatus
//           );
//         },
//       },
//     },
//     plotOptions: { bar: { borderRadius: 6 } },
//     xaxis: {
//       categories: filteredData.map((d) => d.status),
//       labels: { rotate: -45 },
//     },
//     tooltip: { y: { formatter: (val) => `${val} records` } },
//     fill: {
//       type: "gradient",
//       gradient: {
//         shade: "light",
//         type: "vertical",
//         gradientToColors: gradientColors,
//         stops: [0, 100],
//       },
//     },
//     legend: { position: "top" },
//     responsive: [
//       {
//         breakpoint: 768,
//         options: {
//           chart: { width: "100%" },
//           plotOptions: { bar: { borderRadius: 4 } },
//         },
//       },
//     ],
//   };

//   return (
//     <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
//         Tower Status Dashboard
//       </h1>

//       {chartData.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg">Loading...</p>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Pie Chart */}
//             <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
//               <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
//                 Status Distribution
//               </h2>
//               <Chart
//                 options={pieOptions}
//                 series={filteredData.map((d) => d.count)}
//                 type="pie"
//                 width="100%"
//                 height={300}
//               />
//               {selectedStatus && (
//                 <p className="mt-4 text-gray-600 font-medium">
//                   Selected Status:{" "}
//                   <span className="font-bold text-blue-600">
//                     {selectedStatus}
//                   </span>
//                 </p>
//               )}
//             </div>

//             {/* Bar Chart */}
//             <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
//               <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
//                 Status Bar Chart
//               </h2>
//               <Chart
//                 options={barOptions}
//                 series={[
//                   { name: "Records", data: filteredData.map((d) => d.count) },
//                 ]}
//                 type="bar"
//                 width="100%"
//                 height={300}
//               />
//             </div>
//           </div>

//           {/* Optional Filtered Table */}
//           <div className="mt-8 bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
//             <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
//               Tower Status Table
//             </h2>
//             <table className="min-w-full table-auto border-collapse">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-4 py-2 border">Status</th>
//                   <th className="px-4 py-2 border">Count</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredData.map((row, idx) => (
//                   <tr
//                     key={idx}
//                     className="hover:bg-gray-100 transition-colors duration-200"
//                   >
//                     <td className="px-4 py-2 border">{row.status}</td>
//                     <td className="px-4 py-2 border">{row.count}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// =================without shimmer ======================================

// import React, { useEffect, useState } from "react";
// import Chart from "react-apexcharts";
// import { getTowerStatus } from "../api/towerService";

// export default function ApiTest() {
//   const [chartData, setChartData] = useState([]);
//   const [selectedStatus, setSelectedStatus] = useState(null);

//   useEffect(() => {
//     getTowerStatus()
//       .then((rows) => {
//         const statusCounts = rows.reduce((acc, row) => {
//           const status = row["Latest Status"];
//           acc[status] = (acc[status] || 0) + 1;
//           return acc;
//         }, {});

//         const formatted = Object.entries(statusCounts).map(
//           ([status, count]) => ({
//             status,
//             count,
//           })
//         );

//         setChartData(formatted);
//       })
//       .catch(console.error);
//   }, []);

//   const filteredData = selectedStatus
//     ? chartData.filter((d) => d.status === selectedStatus)
//     : chartData;

//   const gradientColors = [
//     "#0088FE",
//     "#00C49F",
//     "#FFBB28",
//     "#FF8042",
//     "#A020F0",
//     "#FF6F61",
//     "#6A5ACD",
//   ];

//   const pieOptions = {
//     chart: {
//       type: "pie",
//       animations: { enabled: true, easing: "easeinout", speed: 800 },
//       toolbar: { show: true },
//       events: {
//         dataPointSelection: (event, chartContext, config) => {
//           const clickedStatus = filteredData[config.dataPointIndex].status;
//           setSelectedStatus(
//             clickedStatus === selectedStatus ? null : clickedStatus
//           );
//         },
//       },
//     },
//     labels: filteredData.map((d) => d.status),
//     legend: { position: "bottom", fontSize: "14px" },
//     tooltip: {
//       y: {
//         formatter: (val) => `${val} records`,
//       },
//     },
//     fill: {
//       type: "gradient",
//       gradient: {
//         shade: "light",
//         type: "vertical",
//         gradientToColors: gradientColors,
//         stops: [0, 100],
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 768,
//         options: { chart: { width: "100%" }, legend: { position: "bottom" } },
//       },
//     ],
//   };

//   const barOptions = {
//     chart: {
//       type: "bar",
//       animations: { enabled: true, easing: "easeinout", speed: 800 },
//       toolbar: { show: true },
//       events: {
//         dataPointSelection: (event, chartContext, config) => {
//           const clickedStatus = filteredData[config.dataPointIndex].status;
//           setSelectedStatus(
//             clickedStatus === selectedStatus ? null : clickedStatus
//           );
//         },
//       },
//     },
//     plotOptions: { bar: { borderRadius: 6 } },
//     xaxis: {
//       categories: filteredData.map((d) => d.status),
//       labels: { rotate: -45 },
//     },
//     tooltip: { y: { formatter: (val) => `${val} records` } },
//     fill: {
//       type: "gradient",
//       gradient: {
//         shade: "light",
//         type: "vertical",
//         gradientToColors: gradientColors,
//         stops: [0, 100],
//       },
//     },
//     legend: { position: "top" },
//     responsive: [
//       {
//         breakpoint: 768,
//         options: {
//           chart: { width: "100%" },
//           plotOptions: { bar: { borderRadius: 4 } },
//         },
//       },
//     ],
//   };

//   // Shimmer loader component
//   const ShimmerCard = ({ height = 300 }) => (
//     <div
//       className={`bg-gray-200 animate-pulse rounded-xl w-full`}
//       style={{ height }}
//     ></div>
//   );

//   return (
//     <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
//         Tower Status Dashboard
//       </h1>

//       {chartData.length === 0 ? (
//         // Shimmer Effect While Loading
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <ShimmerCard />
//           <ShimmerCard />
//         </div>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Pie Chart */}
//             <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
//               <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
//                 Status Wise
//               </h2>
//               <Chart
//                 options={pieOptions}
//                 series={filteredData.map((d) => d.count)}
//                 type="pie"
//                 width="100%"
//                 height={300}
//               />
//               {selectedStatus && (
//                 <p className="mt-4 text-gray-600 font-medium">
//                   Selected Status:{" "}
//                   <span className="font-bold text-blue-600">
//                     {selectedStatus}
//                   </span>
//                 </p>
//               )}
//             </div>

//             {/* Bar Chart */}
//             <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
//               <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
//                 Status Wise
//               </h2>
//               <Chart
//                 options={barOptions}
//                 series={[
//                   { name: "Records", data: filteredData.map((d) => d.count) },
//                 ]}
//                 type="bar"
//                 width="100%"
//                 height={300}
//               />
//             </div>
//           </div>

//           {/* Optional Filtered Table */}
//           <div className="mt-8 bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
//             <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
//               Tower Status Table
//             </h2>
//             <table className="min-w-full table-auto border-collapse">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-4 py-2 border">Status</th>
//                   <th className="px-4 py-2 border">Count</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredData.map((row, idx) => (
//                   <tr
//                     key={idx}
//                     className="hover:bg-gray-100 transition-colors duration-200"
//                   >
//                     <td className="px-4 py-2 border">{row.status}</td>
//                     <td className="px-4 py-2 border">{row.count}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// ================================

// import React, { useEffect, useState } from "react";
// import Chart from "react-apexcharts";
// import axios from "axios";

// export default function ApiTest() {
//   const [chartData, setChartData] = useState([]);
//   const [selectedStatus, setSelectedStatus] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/nc-reports/stats")
//       .then((res) => {
//         console.log("API Data:", res.data);

//         // Extract the statusCounts array from API response
//         const rows = res.data.statusCounts || [];

//         // Format data for charts
//         const formatted = rows.map((row) => ({
//           status: row.latest_status,
//           count: row.count,
//         }));

//         setChartData(formatted);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("API Error:", err);
//         setLoading(false);
//       });
//   }, []);

//   const filteredData = selectedStatus
//     ? chartData.filter((d) => d.status === selectedStatus)
//     : chartData;

//   const gradientColors = [
//     "#0088FE",
//     "#00C49F",
//     "#FFBB28",
//     "#FF8042",
//     "#A020F0",
//     "#FF6F61",
//     "#6A5ACD",
//   ];

//   const pieOptions = {
//     chart: {
//       type: "pie",
//       animations: { enabled: true, easing: "easeinout", speed: 800 },
//       toolbar: { show: true },
//       events: {
//         dataPointSelection: (event, chartContext, config) => {
//           const clickedStatus = filteredData[config.dataPointIndex].status;
//           setSelectedStatus(
//             clickedStatus === selectedStatus ? null : clickedStatus
//           );
//         },
//       },
//     },
//     labels: filteredData.map((d) => d.status),
//     legend: { position: "bottom", fontSize: "14px" },
//     tooltip: {
//       y: {
//         formatter: (val) => `${val} records`,
//       },
//     },
//     fill: {
//       type: "gradient",
//       gradient: {
//         shade: "light",
//         type: "vertical",
//         gradientToColors: gradientColors,
//         stops: [0, 100],
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 768,
//         options: { chart: { width: "100%" }, legend: { position: "bottom" } },
//       },
//     ],
//   };

//   const barOptions = {
//     chart: {
//       type: "bar",
//       animations: { enabled: true, easing: "easeinout", speed: 800 },
//       toolbar: { show: true },
//       events: {
//         dataPointSelection: (event, chartContext, config) => {
//           const clickedStatus = filteredData[config.dataPointIndex].status;
//           setSelectedStatus(
//             clickedStatus === selectedStatus ? null : clickedStatus
//           );
//         },
//       },
//     },
//     plotOptions: { bar: { borderRadius: 6 } },
//     xaxis: {
//       categories: filteredData.map((d) => d.status),
//       labels: { rotate: -45 },
//     },
//     tooltip: { y: { formatter: (val) => `${val} records` } },
//     fill: {
//       type: "gradient",
//       gradient: {
//         shade: "light",
//         type: "vertical",
//         gradientToColors: gradientColors,
//         stops: [0, 100],
//       },
//     },
//     legend: { position: "top" },
//     responsive: [
//       {
//         breakpoint: 768,
//         options: {
//           chart: { width: "100%" },
//           plotOptions: { bar: { borderRadius: 4 } },
//         },
//       },
//     ],
//   };

//   const ShimmerCard = ({ height = 300 }) => (
//     <div
//       className="bg-gray-200 animate-pulse rounded-xl w-full"
//       style={{ height }}
//     ></div>
//   );

//   return (
//     <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
//         NC Report Dashboard
//       </h1>

//       {loading ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <ShimmerCard />
//           <ShimmerCard />
//         </div>
//       ) : chartData.length === 0 ? (
//         <p className="text-center text-gray-600 font-medium">
//           No data available
//         </p>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Pie Chart */}
//             <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
//               <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
//                 Status Wise (Pie)
//               </h2>
//               <Chart
//                 options={pieOptions}
//                 series={filteredData.map((d) => d.count)}
//                 type="pie"
//                 width="100%"
//                 height={300}
//               />
//               {selectedStatus && (
//                 <p className="mt-4 text-gray-600 font-medium">
//                   Selected Status:{" "}
//                   <span className="font-bold text-blue-600">
//                     {selectedStatus}
//                   </span>
//                 </p>
//               )}
//             </div>

//             {/* Bar Chart */}
//             <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
//               <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
//                 Status Wise (Bar)
//               </h2>
//               <Chart
//                 options={barOptions}
//                 series={[
//                   { name: "Records", data: filteredData.map((d) => d.count) },
//                 ]}
//                 type="bar"
//                 width="100%"
//                 height={300}
//               />
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// ================================================================

// import React, { useEffect, useState } from "react";
// import Chart from "react-apexcharts";
// import axios from "axios";

// export default function ApiTest() {
//   const [chartData, setChartData] = useState([]);
//   const [selectedStatus, setSelectedStatus] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Colors for statuses
//   const statusColors = {
//     New: "#0088FE",
//     Completed: "#00C49F",
//     ApproverClosed: "#FFBB28",
//     ReOpen: "#FF8042",
//     Open: "#A020F0",
//   };

//   // useEffect(() => {
//   //   axios
//   //     .get("http://localhost:5000/api/nc-reports/stats")
//   //     .then((res) => {
//   //       console.log("API Data:", res.data);
//   //       const rows = res.data.statusCounts || [];

//   //       const formatted = rows.map((row) => ({
//   //         status: row.latest_status,
//   //         count: row.count,
//   //         color: statusColors[row.latest_status] || "#6A5ACD",
//   //       }));

//   //       setChartData(formatted);
//   //       setLoading(false);
//   //     })
//   //     .catch((err) => {
//   //       console.error("API Error:", err);
//   //       setLoading(false);
//   //     });
//   // }, []);

//   // vite proxy on phone

//   useEffect(() => {
//     axios
//       .get("/api/nc-reports/stats") // <-- use relative path
//       .then((res) => {
//         console.log("API Data:", res.data);

//         const rows = res.data.statusCounts || [];

//         const formatted = rows.map((row) => ({
//           status: row.latest_status,
//           count: row.count,
//           color: statusColors[row.latest_status] || "#6A5ACD",
//         }));

//         setChartData(formatted);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("API Error:", err);
//         setLoading(false);
//       });
//   }, []);

//   const filteredData = selectedStatus
//     ? chartData.filter((d) => d.status === selectedStatus)
//     : chartData;

//   const pieOptions = {
//     chart: {
//       type: "pie",
//       animations: { enabled: true, easing: "easeinout", speed: 800 },
//       toolbar: { show: true },
//       events: {
//         dataPointSelection: (event, chartContext, config) => {
//           const clickedStatus = filteredData[config.dataPointIndex].status;
//           setSelectedStatus(
//             clickedStatus === selectedStatus ? null : clickedStatus
//           );
//         },
//       },
//     },
//     labels: filteredData.map((d) => d.status),
//     legend: { position: "bottom", fontSize: "14px" },
//     tooltip: {
//       y: {
//         formatter: (val, opts) => {
//           const total = filteredData.reduce((sum, d) => sum + d.count, 0);
//           const percent = ((val / total) * 100).toFixed(1);
//           return `${val} records (${percent}%)`;
//         },
//       },
//     },
//     colors: filteredData.map((d) => d.color),
//     responsive: [
//       {
//         breakpoint: 768,
//         options: { chart: { width: "100%" }, legend: { position: "bottom" } },
//       },
//     ],
//   };

//   const barOptions = {
//     chart: {
//       type: "bar",
//       animations: { enabled: true, easing: "easeinout", speed: 800 },
//       toolbar: { show: true },
//       events: {
//         dataPointSelection: (event, chartContext, config) => {
//           const clickedStatus = filteredData[config.dataPointIndex].status;
//           setSelectedStatus(
//             clickedStatus === selectedStatus ? null : clickedStatus
//           );
//         },
//       },
//     },
//     plotOptions: { bar: { borderRadius: 6, distributed: true } },
//     xaxis: {
//       categories: filteredData.map((d) => d.status),
//       labels: { rotate: -45 },
//     },
//     tooltip: {
//       y: {
//         formatter: (val) => `${val} records`,
//       },
//     },
//     colors: filteredData.map((d) => d.color),
//     legend: { show: false },
//     responsive: [
//       {
//         breakpoint: 768,
//         options: {
//           chart: { width: "100%" },
//           plotOptions: { bar: { borderRadius: 4 } },
//         },
//       },
//     ],
//   };

//   const ShimmerCard = ({ height = 300 }) => (
//     <div
//       className="bg-gray-200 animate-pulse rounded-xl w-full"
//       style={{ height }}
//     ></div>
//   );

//   return (
//     <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
//         NC Report Dashboard
//       </h1>

//       {loading ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <ShimmerCard />
//           <ShimmerCard />
//         </div>
//       ) : chartData.length === 0 ? (
//         <p className="text-center text-gray-600 font-medium">
//           No data available
//         </p>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Pie Chart */}
//             <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
//               <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
//                 Status Wise (Pie)
//               </h2>
//               <Chart
//                 options={pieOptions}
//                 series={filteredData.map((d) => d.count)}
//                 type="pie"
//                 width="100%"
//                 height={300}
//               />
//               {selectedStatus && (
//                 <p className="mt-4 text-gray-600 font-medium">
//                   Selected Status:{" "}
//                   <span
//                     className="font-bold"
//                     style={{ color: statusColors[selectedStatus] }}
//                   >
//                     {selectedStatus}
//                   </span>
//                 </p>
//               )}
//             </div>

//             {/* Bar Chart */}
//             <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
//               <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
//                 Status Wise (Bar)
//               </h2>
//               <Chart
//                 options={barOptions}
//                 series={[
//                   { name: "Records", data: filteredData.map((d) => d.count) },
//                 ]}
//                 type="bar"
//                 width="100%"
//                 height={300}
//               />
//             </div>
//           </div>

//           {/* Status Table */}
//           <div className="mt-8 bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
//             <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
//               Status Summary
//             </h2>
//             <table className="min-w-full table-auto border-collapse">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-4 py-2 border">Status</th>
//                   <th className="px-4 py-2 border">Count</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredData.map((row, idx) => (
//                   <tr
//                     key={idx}
//                     className="hover:bg-gray-100 transition-colors duration-200"
//                   >
//                     <td className="px-4 py-2 border">{row.status}</td>
//                     <td className="px-4 py-2 border">{row.count}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </>
//       )}
//     </div>
//   );

// }

// =============================upper code is 100

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

export default function ApiTest() {
  const [allRecords, setAllRecords] = useState([]); // all NC records
  const [chartData, setChartData] = useState([]); // chart counts
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  const statusColors = {
    New: "#0088FE",
    Completed: "#00C49F",
    ApproverClosed: "#FFBB28",
    ReOpen: "#FF8042",
    Open: "#A020F0",
  };

  // Fetch all records and generate chart data
  useEffect(() => {
    axios
      .get("/api/nc-reports") // vite proxy handles backend
      .then((res) => {
        const records = res.data || [];
        setAllRecords(records);

        // Aggregate counts per status
        const counts = records.reduce((acc, record) => {
          const status = record.latest_status;
          if (!acc[status]) acc[status] = 0;
          acc[status] += 1;
          return acc;
        }, {});

        const formatted = Object.entries(counts).map(([status, count]) => ({
          status,
          count,
          color: statusColors[status] || "#6A5ACD",
        }));

        setChartData(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  // Filter records by selected status
  const filteredRecords = selectedStatus
    ? allRecords.filter((r) => r.latest_status === selectedStatus)
    : [];

  // Pie chart options
  const pieOptions = {
    chart: {
      type: "pie",
      animations: { enabled: true, easing: "easeinout", speed: 800 },
      toolbar: { show: true },
      events: {
        dataPointSelection: (event, chartContext, config) => {
          const clickedStatus = chartData[config.dataPointIndex].status;
          setSelectedStatus(
            clickedStatus === selectedStatus ? null : clickedStatus
          );
        },
      },
    },
    labels: chartData.map((d) => d.status),
    legend: { position: "bottom", fontSize: "14px" },
    tooltip: {
      y: {
        formatter: (val) => {
          const total = chartData.reduce((sum, d) => sum + d.count, 0);
          const percent = ((val / total) * 100).toFixed(1);
          return `${val} records (${percent}%)`;
        },
      },
    },
    colors: chartData.map((d) => d.color),
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: { width: "100%" },
          legend: { position: "bottom" },
        },
      },
    ],
  };

  // Bar chart options
  const barOptions = {
    chart: {
      type: "bar",
      animations: { enabled: true, easing: "easeinout", speed: 800 },
      toolbar: { show: true },
      events: {
        dataPointSelection: (event, chartContext, config) => {
          const clickedStatus = chartData[config.dataPointIndex].status;
          setSelectedStatus(
            clickedStatus === selectedStatus ? null : clickedStatus
          );
        },
      },
    },
    plotOptions: { bar: { borderRadius: 6, distributed: true } },
    xaxis: {
      categories: chartData.map((d) => d.status),
      labels: { rotate: -45 },
    },
    tooltip: {
      y: { formatter: (val) => `${val} records` },
    },
    colors: chartData.map((d) => d.color),
    legend: { show: false },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: { width: "100%" },
          plotOptions: { bar: { borderRadius: 4 } },
        },
      },
    ],
  };

  // Shimmer loader
  const ShimmerCard = ({ height = 300 }) => (
    <div
      className="bg-gray-200 animate-pulse rounded-xl w-full"
      style={{ height }}
    ></div>
  );

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        NC Report Dashboard
      </h1>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ShimmerCard />
          <ShimmerCard />
        </div>
      ) : chartData.length === 0 ? (
        <p className="text-center text-gray-600 font-medium">
          No data available
        </p>
      ) : (
        <>
          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
                Status Wise (Pie)
              </h2>
              <Chart
                options={pieOptions}
                series={chartData.map((d) => d.count)}
                type="pie"
                width="100%"
                height={300}
              />
              {selectedStatus && (
                <p className="mt-4 text-gray-600 font-medium">
                  Selected Status:{" "}
                  <span
                    className="font-bold"
                    style={{ color: statusColors[selectedStatus] }}
                  >
                    {selectedStatus}
                  </span>
                </p>
              )}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
                Status Wise (Bar)
              </h2>
              <Chart
                options={barOptions}
                series={[
                  { name: "Records", data: chartData.map((d) => d.count) },
                ]}
                type="bar"
                width="100%"
                height={300}
              />
            </div>
          </div>

          {/* Chart Table */}
          {/* Status Summary Cards */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {chartData.map((row, idx) => {
              const total = chartData.reduce((sum, d) => sum + d.count, 0);
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl shadow-md cursor-pointer flex flex-col items-center justify-center transition-transform transform hover:scale-105 ${
                    selectedStatus === row.status ? "ring-4 ring-blue-400" : ""
                  }`}
                  style={{ backgroundColor: row.color + "20" }} // light transparent color
                  title={`${row.count} records (${(
                    (row.count / total) *
                    100
                  ).toFixed(1)}%)`}
                  onClick={() =>
                    setSelectedStatus(
                      row.status === selectedStatus ? null : row.status
                    )
                  }
                >
                  <div
                    className="w-3 h-3 rounded-full mb-2"
                    style={{ backgroundColor: row.color }}
                  ></div>
                  <p className="text-gray-700 font-medium text-center">
                    {row.status}
                  </p>
                  <p className="text-gray-900 font-bold text-xl">{row.count}</p>
                </div>
              );
            })}
          </div>

          {/* Detailed Records */}
          {selectedStatus && filteredRecords.length > 0 && (
            <div className="mt-6 bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Records with status:{" "}
                <span style={{ color: statusColors[selectedStatus] }}>
                  {selectedStatus}
                </span>
              </h2>
              <table className="min-w-full table-auto border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 border">Location</th>
                    <th className="px-4 py-2 border">Category</th>
                    <th className="px-4 py-2 border">Checklist</th>
                    <th className="px-4 py-2 border">Checkpoint</th>
                    <th className="px-4 py-2 border">Observation</th>
                    <th className="px-4 py-2 border">Contractor</th>
                    <th className="px-4 py-2 border">Originated Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.map((r) => (
                    <tr
                      key={r.tab_id}
                      className="hover:bg-gray-100 transition-colors"
                    >
                      <td className="px-4 py-2 border">{r.location}</td>
                      <td className="px-4 py-2 border">{r.category}</td>
                      <td className="px-4 py-2 border">{r.check_list}</td>
                      <td className="px-4 py-2 border">{r.check_point}</td>
                      <td className="px-4 py-2 border">{r.observation}</td>
                      <td className="px-4 py-2 border">{r.contractor}</td>
                      <td className="px-4 py-2 border">
                        {new Date(r.originated_date).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}
