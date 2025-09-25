// import express from "express";
// import cors from "cors";

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// // ✅ Fake API route
// app.get("/api/test", (req, res) => {
//   res.json({
//     message: "Backend is working 🚀",
//     time: new Date().toISOString(),
//   });
// });

// app.listen(PORT, () => {
//   console.log(`✅ Backend running on http://localhost:${PORT}`);
// });

// ===================

// import express from "express";
// import cors from "cors";

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// // Dummy tower status data
// const tableData = [
//   {
//     "Select All": "",
//     "View Detail": "Detail",
//     "Tab Id": 1006,
//     "ChkList ID": 52,
//     Location: "Wing A-> Basement-4-> -> -> ->",
//     Category: "Civil Post Check",
//     "Check List": "Civil Post Check",
//     "Check Point": "Removing provided hook of safety net and working platform",
//     Observation:
//       "?? ?? ???? ????????? ?? ???? ?? ??? ???? ?? ?? ???? ????? ??????? ??? ??",
//     Severity: "Medium",
//     Rectifiable: "N",
//     "Root Cause": "??? ???? ??? ?? ??? ???? ?? ?? ?? ????? ??, ??? ?? ??? ??",
//     Correction: "???? ???? ??? ?? ?????????? ?? ??? ??",
//     "Corrective Action": "xjdj",
//     "Latest Notes": "",
//     Contractor: "",
//     "Latest Status": "New",
//     "Last Chkd By": "Approver QE",
//     "Originated Date": "23-09-2025 16:31:28",
//     "Server Originated Date": "23-09-2025 16:36:14",
//     "Last Updated": "23-09-2025 16:36:41",
//     "Server Last Updated": "23-09-2025 16:36:14",
//   },
//   {
//     "Select All": "",
//     "View Detail": "Detail",
//     "Tab Id": 1139,
//     "ChkList ID": 2,
//     " Location": "Wing A-> Basement-4-> -> -> ->",
//     Category: "Block Work",
//     "Check List": "Block Work",
//     "Check Point": "Surface preparation",
//     Observation: "abc",
//     Severity: "High",
//     Rectifiable: "N",
//     "Root Cause": "abc",
//     Correction: "abc",
//     "Corrective Action": "abc",
//     "Latest Notes": "",
//     Contractor: "Test Contractor",
//     "Latest Status": "Completed",
//     "Last Chkd By": "Bain SK",
//     "Originated Date": "21-09-2025 10:57:09",
//     "Server Originated Date": "21-09-2025 10:57:34",
//     "Last Updated": "23-09-2025 10:59:58",
//     "Server Last Updated": "23-09-2025 12:36:34",
//   },
//   {
//     "Select All": "",
//     "View Detail": "Detail",
//     "Tab Id": 1139,
//     "ChkList ID": 3,
//     Location: "Wing A-> Basement-3-> -> -> ->",
//     Category: "Block Work",
//     "Check List": "Block Work",
//     "Check Point": "Surface preparation",
//     Observation: "test",
//     Severity: "High",
//     Rectifiable: "N",
//     "Root Cause": "abc",
//     Correction: "abc",
//     "Corrective Action": "abc",
//     "Latest Notes": "",
//     Contractor: "Test Contractor",
//     "Latest Status": "New",
//     "Last Chkd By": "Bain Egr",
//     "Originated Date": "23-09-2025 11:45:54",
//     "Server Originated Date": "23-09-2025 11:46:26",
//     "Last Updated": "23-09-2025 11:46:54",
//     "Server Last Updated": "23-09-2025 11:46:26",
//   },
//   {
//     "Select All": "",
//     "View Detail": "Detail",
//     "Tab Id": 1139,
//     "ChkList ID": 1,
//     Location: "Wing A-> Basement-4-> -> -> ->",
//     Category: "Gypsum Plaster",
//     "Check List": "BL Windows",
//     "Check Point":
//       "Allow 24 hrs drying period for bonding agent which will be used on RCC face. Gypsum plastering to be finish within 10 days after application of Bonding agent.",
//     Observation: "abc",
//     Severity: "High",
//     Rectifiable: "N",
//     "Root Cause": "abc",
//     Correction: "ab",
//     "Corrective Action": "abc",
//     "Latest Notes": "test",
//     Contractor: "Test Contractor",
//     "Latest Status": "Closed",
//     "Last Chkd By": "Bain Egr",
//     "Originated Date": "20-07-2025 11:13:15",
//     "Server Originated Date": "20-07-2025 11:42:52",
//     "Last Updated": "23-09-2025 11:30:23",
//     "Server Last Updated": "23-09-2025 11:29:55",
//   },
//   {
//     "Select All": "",
//     "View Detail": "Detail",
//     "Tab Id": 1005,
//     "ChkList ID": 70,
//     Location: "Wing A-> Basement-4-> -> -> ->",
//     Category: "Gypsum Plaster",
//     "Check List": "Slab Final Check",
//     "Check Point":
//       "Ensure RCC surface to be free from any dust or chemical so as to avoid chemical reaction on the surface",
//     Observation: "v",
//     Severity: "Medium",
//     Rectifiable: "N",
//     "Root Cause": "hb",
//     Correction: "gh",
//     "Corrective Action": "vb",
//     "Latest Notes": "",
//     Contractor: "Test Contractor",
//     "Latest Status": "New",
//     "Last Chkd By": "Checker LT",
//     "Originated Date": "21-09-2025 17:43:58",
//     "Server Originated Date": "21-09-2025 17:45:26",
//     "Last Updated": "21-09-2025 17:45:53",
//     "Server Last Updated": "21-09-2025 17:45:26",
//   },
//   {
//     "Select All": "",
//     "View Detail": "Detail",
//     "Tab Id": 1006,
//     "ChkList ID": 52,
//     Location: "Wing A-> Basement-4-> -> -> ->",
//     Category: "Civil Post Check",
//     "Check List": "Civil Post Check",
//     "Check Point": "Removing provided hook of safety net and working platform",
//     Observation:
//       "?? ?? ???? ????????? ?? ???? ?? ??? ???? ?? ?? ???? ????? ??????? ??? ??",
//     Severity: "Medium",
//     Rectifiable: "N",
//     "Root Cause": "??? ???? ??? ?? ??? ???? ?? ?? ?? ????? ??, ??? ?? ??? ??",
//     Correction: "???? ???? ??? ?? ?????????? ?? ??? ??",
//     "Corrective Action": "xjdj",
//     "Latest Notes": "",
//     Contractor: "",
//     "Latest Status": "New",
//     "Last Chkd By": "Approver QE",
//     "Originated Date": "23-09-2025 16:31:28",
//     "Server Originated Date": "23-09-2025 16:36:14",
//     "Last Updated": "23-09-2025 16:36:41",
//     "Server Last Updated": "23-09-2025 16:36:14",
//   },
//   {
//     "Select All": "",
//     "View Detail": "Detail",
//     "Tab Id": 1139,
//     "ChkList ID": 2,
//     " Location": "Wing A-> Basement-4-> -> -> ->",
//     Category: "Block Work",
//     "Check List": "Block Work",
//     "Check Point": "Surface preparation",
//     Observation: "abc",
//     Severity: "High",
//     Rectifiable: "N",
//     "Root Cause": "abc",
//     Correction: "abc",
//     "Corrective Action": "abc",
//     "Latest Notes": "",
//     Contractor: "Test Contractor",
//     "Latest Status": "New",
//     "Last Chkd By": "Bain SK",
//     "Originated Date": "21-09-2025 10:57:09",
//     "Server Originated Date": "21-09-2025 10:57:34",
//     "Last Updated": "23-09-2025 10:59:58",
//     "Server Last Updated": "23-09-2025 12:36:34",
//   },
//   {
//     "Select All": "",
//     "View Detail": "Detail",
//     "Tab Id": 1139,
//     "ChkList ID": 3,
//     Location: "Wing A-> Basement-3-> -> -> ->",
//     Category: "Block Work",
//     "Check List": "Block Work",
//     "Check Point": "Surface preparation",
//     Observation: "test",
//     Severity: "High",
//     Rectifiable: "N",
//     "Root Cause": "abc",
//     Correction: "abc",
//     "Corrective Action": "abc",
//     "Latest Notes": "",
//     Contractor: "Test Contractor",
//     "Latest Status": "Open",
//     "Last Chkd By": "Bain Egr",
//     "Originated Date": "23-09-2025 11:45:54",
//     "Server Originated Date": "23-09-2025 11:46:26",
//     "Last Updated": "23-09-2025 11:46:54",
//     "Server Last Updated": "23-09-2025 11:46:26",
//   },
//   {
//     "Select All": "",
//     "View Detail": "Detail",
//     "Tab Id": 1139,
//     "ChkList ID": 1,
//     Location: "Wing A-> Basement-4-> -> -> ->",
//     Category: "Gypsum Plaster",
//     "Check List": "BL Windows",
//     "Check Point":
//       "Allow 24 hrs drying period for bonding agent which will be used on RCC face. Gypsum plastering to be finish within 10 days after application of Bonding agent.",
//     Observation: "abc",
//     Severity: "High",
//     Rectifiable: "N",
//     "Root Cause": "abc",
//     Correction: "ab",
//     "Corrective Action": "abc",
//     "Latest Notes": "test",
//     Contractor: "Test Contractor",
//     "Latest Status": "Re-Open",
//     "Last Chkd By": "Bain Egr",
//     "Originated Date": "20-07-2025 11:13:15",
//     "Server Originated Date": "20-07-2025 11:42:52",
//     "Last Updated": "23-09-2025 11:30:23",
//     "Server Last Updated": "23-09-2025 11:29:55",
//   },
//   {
//     "Select All": "",
//     "View Detail": "Detail",
//     "Tab Id": 1005,
//     "ChkList ID": 70,
//     Location: "Wing A-> Basement-4-> -> -> ->",
//     Category: "Gypsum Plaster",
//     "Check List": "Slab Final Check",
//     "Check Point":
//       "Ensure RCC surface to be free from any dust or chemical so as to avoid chemical reaction on the surface",
//     Observation: "v",
//     Severity: "Medium",
//     Rectifiable: "N",
//     "Root Cause": "hb",
//     Correction: "gh",
//     "Corrective Action": "vb",
//     "Latest Notes": "",
//     Contractor: "Test Contractor",
//     "Latest Status": "ApproverClosed",
//     "Last Chkd By": "Checker LT",
//     "Originated Date": "21-09-2025 17:43:58",
//     "Server Originated Date": "21-09-2025 17:45:26",
//     "Last Updated": "21-09-2025 17:45:53",
//     "Server Last Updated": "21-09-2025 17:45:26",
//   },
//   {
//     "Select All": "",
//     "View Detail": "Detail",
//     "Tab Id": 1139,
//     "ChkList ID": 3,
//     Location: "Wing A-> Basement-3-> -> -> ->",
//     Category: "Block Work",
//     "Check List": "Block Work",
//     "Check Point": "Surface preparation",
//     Observation: "test",
//     Severity: "High",
//     Rectifiable: "N",
//     "Root Cause": "abc",
//     Correction: "abc",
//     "Corrective Action": "abc",
//     "Latest Notes": "",
//     Contractor: "Test Contractor",
//     "Latest Status": "Open",
//     "Last Chkd By": "Bain Egr",
//     "Originated Date": "23-09-2025 11:45:54",
//     "Server Originated Date": "23-09-2025 11:46:26",
//     "Last Updated": "23-09-2025 11:46:54",
//     "Server Last Updated": "23-09-2025 11:46:26",
//   },
//   {
//     "Select All": "",
//     "View Detail": "Detail",
//     "Tab Id": 1139,
//     "ChkList ID": 1,
//     Location: "Wing A-> Basement-4-> -> -> ->",
//     Category: "Gypsum Plaster",
//     "Check List": "BL Windows",
//     "Check Point":
//       "Allow 24 hrs drying period for bonding agent which will be used on RCC face. Gypsum plastering to be finish within 10 days after application of Bonding agent.",
//     Observation: "abc",
//     Severity: "High",
//     Rectifiable: "N",
//     "Root Cause": "abc",
//     Correction: "ab",
//     "Corrective Action": "abc",
//     "Latest Notes": "test",
//     Contractor: "Test Contractor",
//     "Latest Status": "Re-Open",
//     "Last Chkd By": "Bain Egr",
//     "Originated Date": "20-07-2025 11:13:15",
//     "Server Originated Date": "20-07-2025 11:42:52",
//     "Last Updated": "23-09-2025 11:30:23",
//     "Server Last Updated": "23-09-2025 11:29:55",
//   },
//   {
//     "Select All": "",
//     "View Detail": "Detail",
//     "Tab Id": 1005,
//     "ChkList ID": 70,
//     Location: "Wing A-> Basement-4-> -> -> ->",
//     Category: "Gypsum Plaster",
//     "Check List": "Slab Final Check",
//     "Check Point":
//       "Ensure RCC surface to be free from any dust or chemical so as to avoid chemical reaction on the surface",
//     Observation: "v",
//     Severity: "Medium",
//     Rectifiable: "N",
//     "Root Cause": "hb",
//     Correction: "gh",
//     "Corrective Action": "vb",
//     "Latest Notes": "",
//     Contractor: "Test Contractor",
//     "Latest Status": "ApproverClosed",
//     "Last Chkd By": "Checker LT",
//     "Originated Date": "21-09-2025 17:43:58",
//     "Server Originated Date": "21-09-2025 17:45:26",
//     "Last Updated": "21-09-2025 17:45:53",
//     "Server Last Updated": "21-09-2025 17:45:26",
//   },
//   {
//     "Select All": "",
//     "View Detail": "Detail",
//     "Tab Id": 1139,
//     "ChkList ID": 3,
//     Location: "Wing A-> Basement-3-> -> -> ->",
//     Category: "Block Work",
//     "Check List": "Block Work",
//     "Check Point": "Surface preparation",
//     Observation: "test",
//     Severity: "High",
//     Rectifiable: "N",
//     "Root Cause": "abc",
//     Correction: "abc",
//     "Corrective Action": "abc",
//     "Latest Notes": "",
//     Contractor: "Test Contractor",
//     "Latest Status": "Open",
//     "Last Chkd By": "Bain Egr",
//     "Originated Date": "23-09-2025 11:45:54",
//     "Server Originated Date": "23-09-2025 11:46:26",
//     "Last Updated": "23-09-2025 11:46:54",
//     "Server Last Updated": "23-09-2025 11:46:26",
//   },
//   {
//     "Select All": "",
//     "View Detail": "Detail",
//     "Tab Id": 1139,
//     "ChkList ID": 1,
//     Location: "Wing A-> Basement-4-> -> -> ->",
//     Category: "Gypsum Plaster",
//     "Check List": "BL Windows",
//     "Check Point":
//       "Allow 24 hrs drying period for bonding agent which will be used on RCC face. Gypsum plastering to be finish within 10 days after application of Bonding agent.",
//     Observation: "abc",
//     Severity: "High",
//     Rectifiable: "N",
//     "Root Cause": "abc",
//     Correction: "ab",
//     "Corrective Action": "abc",
//     "Latest Notes": "test",
//     Contractor: "Test Contractor",
//     "Latest Status": "Re-Open",
//     "Last Chkd By": "Bain Egr",
//     "Originated Date": "20-07-2025 11:13:15",
//     "Server Originated Date": "20-07-2025 11:42:52",
//     "Last Updated": "23-09-2025 11:30:23",
//     "Server Last Updated": "23-09-2025 11:29:55",
//   },
//   {
//     "Select All": "",
//     "View Detail": "Detail",
//     "Tab Id": 1005,
//     "ChkList ID": 70,
//     Location: "Wing A-> Basement-4-> -> -> ->",
//     Category: "Gypsum Plaster",
//     "Check List": "Slab Final Check",
//     "Check Point":
//       "Ensure RCC surface to be free from any dust or chemical so as to avoid chemical reaction on the surface",
//     Observation: "v",
//     Severity: "Medium",
//     Rectifiable: "N",
//     "Root Cause": "hb",
//     Correction: "gh",
//     "Corrective Action": "vb",
//     "Latest Notes": "",
//     Contractor: "Test Contractor",
//     "Latest Status": "ApproverClosed",
//     "Last Chkd By": "Checker LT",
//     "Originated Date": "21-09-2025 17:43:58",
//     "Server Originated Date": "21-09-2025 17:45:26",
//     "Last Updated": "21-09-2025 17:45:53",
//     "Server Last Updated": "21-09-2025 17:45:26",
//   },
//   {
//     "Select All": "",
//     "View Detail": "Detail",
//     "Tab Id": 1139,
//     "ChkList ID": 3,
//     Location: "Wing A-> Basement-3-> -> -> ->",
//     Category: "Block Work",
//     "Check List": "Block Work",
//     "Check Point": "Surface preparation",
//     Observation: "test",
//     Severity: "High",
//     Rectifiable: "N",
//     "Root Cause": "abc",
//     Correction: "abc",
//     "Corrective Action": "abc",
//     "Latest Notes": "",
//     Contractor: "Test Contractor",
//     "Latest Status": "Open",
//     "Last Chkd By": "Bain Egr",
//     "Originated Date": "23-09-2025 11:45:54",
//     "Server Originated Date": "23-09-2025 11:46:26",
//     "Last Updated": "23-09-2025 11:46:54",
//     "Server Last Updated": "23-09-2025 11:46:26",
//   },
//   {
//     "Select All": "",
//     "View Detail": "Detail",
//     "Tab Id": 1139,
//     "ChkList ID": 1,
//     Location: "Wing A-> Basement-4-> -> -> ->",
//     Category: "Gypsum Plaster",
//     "Check List": "BL Windows",
//     "Check Point":
//       "Allow 24 hrs drying period for bonding agent which will be used on RCC face. Gypsum plastering to be finish within 10 days after application of Bonding agent.",
//     Observation: "abc",
//     Severity: "High",
//     Rectifiable: "N",
//     "Root Cause": "abc",
//     Correction: "ab",
//     "Corrective Action": "abc",
//     "Latest Notes": "test",
//     Contractor: "Test Contractor",
//     "Latest Status": "Re-Open",
//     "Last Chkd By": "Bain Egr",
//     "Originated Date": "20-07-2025 11:13:15",
//     "Server Originated Date": "20-07-2025 11:42:52",
//     "Last Updated": "23-09-2025 11:30:23",
//     "Server Last Updated": "23-09-2025 11:29:55",
//   },
//   {
//     "Select All": "",
//     "View Detail": "Detail",
//     "Tab Id": 1005,
//     "ChkList ID": 70,
//     Location: "Wing A-> Basement-4-> -> -> ->",
//     Category: "Gypsum Plaster",
//     "Check List": "Slab Final Check",
//     "Check Point":
//       "Ensure RCC surface to be free from any dust or chemical so as to avoid chemical reaction on the surface",
//     Observation: "v",
//     Severity: "Medium",
//     Rectifiable: "N",
//     "Root Cause": "hb",
//     Correction: "gh",
//     "Corrective Action": "vb",
//     "Latest Notes": "",
//     Contractor: "Test Contractor",
//     "Latest Status": "ApproverClosed",
//     "Last Chkd By": "Checker LT",
//     "Originated Date": "21-09-2025 17:43:58",
//     "Server Originated Date": "21-09-2025 17:45:26",
//     "Last Updated": "21-09-2025 17:45:53",
//     "Server Last Updated": "21-09-2025 17:45:26",
//   },
// ];

// // API to return dummy tower status
// app.get("/tower-status", (req, res) => {
//   res.json(tableData);
// });

// app.listen(PORT, () =>
//   console.log(`✅ Backend running on http://localhost:${PORT}`)
// );

// --------------------------------

import express from "express";
import cors from "cors";
import mysql from "mysql2/promise"; // promise-based MySQL

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ---------------- MySQL Connection Pool ----------------
const pool = mysql.createPool({
  host: "localhost", // your MySQL host
  user: "root", // your MySQL user
  password: "mysql@123", // replace with your MySQL password
  database: "qcop", // database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// ---------------- GET ALL NC REPORTS ----------------
app.get("/nc-reports", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM nc_reports ORDER BY originated_date DESC"
    );
    res.json(rows);
  } catch (error) {
    console.error("DB fetch error:", error);
    res.status(500).json({ error: "Failed to fetch NC reports" });
  }
});

// ---------------- GET STATS FOR GRAPHS ----------------
app.get("/nc-reports/stats", async (req, res) => {
  try {
    const [statusCounts] = await pool.query(
      "SELECT latest_status, COUNT(*) AS count FROM nc_reports GROUP BY latest_status"
    );
    const [severityCounts] = await pool.query(
      "SELECT severity, COUNT(*) AS count FROM nc_reports GROUP BY severity"
    );
    const [contractorCounts] = await pool.query(
      "SELECT contractor, COUNT(*) AS count FROM nc_reports GROUP BY contractor"
    );

    res.json({
      statusCounts,
      severityCounts,
      contractorCounts,
    });
  } catch (error) {
    console.error("DB stats error:", error);
    res.status(500).json({ error: "Failed to fetch NC report stats" });
  }
});

// ---------------- START SERVER ----------------
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
