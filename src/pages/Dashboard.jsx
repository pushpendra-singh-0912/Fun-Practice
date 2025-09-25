

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
