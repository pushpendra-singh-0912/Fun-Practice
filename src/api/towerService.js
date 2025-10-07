// import axios from "axios";

// export const getTestMessage = async () => {
//   try {
//     const res = await axios.get("http://localhost:5000/api/test");
//     return res.data;
//   } catch (err) {
//     console.error("❌ API Error:", err.message);
//     throw err;
//   }
// };

// =====================

// import axios from "axios";

// export const getTowerStatus = async () => {
//   try {
//     const res = await axios.get("http://localhost:5000/tower-status");
//     return res.data;
//   } catch (err) {
//     console.error("❌ API Error:", err);
//     throw err;
//   }
// };

// -------------------------
// import axios from "axios";

// // Fetch NC report stats for graphs
// export const getNcReportStats = async () => {
//   try {
//     const res = await axios.get("http://localhost:5000/nc-reports/stats");
//     // res.data contains: { statusCounts, severityCounts, contractorCounts }
//     return res.data;
//   } catch (err) {
//     console.error("❌ API Error fetching NC report stats:", err);
//     throw err;
//   }
// };

// -------------------------------------

// import axios from "axios";

// // Make sure the API URL matches your backend
// export const getTowerStatus = async () => {
//   try {
//     const res = await axios.get("http://localhost:5000/api/nc-reports/stats");
//     return res.data;
//   } catch (err) {
//     console.error("❌ API Error:", err);
//     throw err;
//   }
// };

// -------------------------------------------

import axios from "axios";

// Use relative path so Vite proxy forwards it to backend
export const getTowerStatus = async () => {
  try {
    const res = await axios.get("/api/nc-reports/stats"); // <-- removed localhost
    return res.data;
  } catch (err) {
    console.error("❌ API Error:", err);
    throw err;
  }
};
