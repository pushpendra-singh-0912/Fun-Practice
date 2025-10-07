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

// --------------------Get all users-------------------------------

app.get("/api/users", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users ORDER BY id ASC");
    res.json(rows);
  } catch (error) {
    console.error("DB fetch error by pushpendra:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// ✅ POST (add new user) --------------------------------------------------
// app.post("/api/users", async (req, res) => {
//   try {
//     const {
//       first_name,
//       last_name,
//       email,
//       access_right,
//       designation,
//       project,
//       contractor,
//       login_name,
//       phone_no,
//       device_id,
//       status,
//     } = req.body;

//     if (
//       !first_name ||
//       !last_name ||
//       !email ||
//       !access_right ||
//       !designation ||
//       !project ||
//       !login_name ||
//       !phone_no ||
//       !device_id ||
//       !status
//     ) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     const sql = `
//       INSERT INTO users
//       (first_name, last_name, email, access_right, designation, project, contractor, login_name, phone_no, device_id, status, created_at, updated_at)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
//     `;

//     const values = [
//       first_name,
//       last_name,
//       email,
//       access_right,
//       designation,
//       project,
//       contractor,
//       login_name,
//       phone_no,
//       device_id,
//       status,
//     ];

//     const [result] = await pool.query(sql, values);
//     res.status(201).json({
//       message: "✅ User created successfully",
//       id: result.insertId,
//     });
//   } catch (error) {
//     console.error("❌ Error inserting user:", error);
//     res.status(500).json({ error: "Failed to insert user" });
//   }
// });

app.post("/api/users", async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      access_right,
      designation,
      project,
      contractor,
      login_name,
      phone_no,
      device_id,
      status,
    } = req.body;

    // Insert new user
    const [result] = await pool.query(
      `
      INSERT INTO users 
      (first_name, last_name, email, access_right, designation, project, contractor, login_name, phone_no, device_id, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
    `,
      [
        first_name,
        last_name,
        email,
        access_right,
        designation,
        project,
        contractor,
        login_name,
        phone_no,
        device_id,
        status,
      ]
    );

    const newUserId = result.insertId;

    // Fetch the full newly created user
    const [rows] = await pool.query(
      `
      SELECT id, first_name, last_name, email, access_right, designation, project, contractor, login_name, phone_no, status
      FROM users
      WHERE id = ?
    `,
      [newUserId]
    );

    res.json(rows[0]); // <-- Return full user object
  } catch (err) {
    console.error("Error inserting user:", err);
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(400).json({ error: "Email already exists" });
    }
    res.status(500).json({ error: "Server error" });
  }
});

// -----------------------------------------------------------------------------------------------------------------------------

// ---------------- GET ALL NC REPORTS ----------------
app.get("/api/nc-reports", async (req, res) => {
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
app.get("/api/nc-reports/stats", async (req, res) => {
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
// app.listen(PORT, () => {
//   console.log(`✅ Backend running on http://localhost:${PORT}`);
// });

// app.use((req, res, next) => {
//   console.log("Incoming:", req.method, req.url);
//   next();
// });

// ---------------- START SERVER ----------------

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
  console.log(`✅ Also accessible at http://192.168.0.103:${PORT}`);
});
