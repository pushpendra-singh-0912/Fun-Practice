// --------------------------------------- agian doing wiht quote and proper spacing now final is this

// import React, { useEffect, useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ResetPassword from "./ResetPassword";
// import UpdatePassword from "./UpdatePassword";
// import QcopLogo from "../assets/Qcop-logo.png";
// import BuildingImage from "../assets/Building-image.png";
// import SuccessModal from "../components/SuccessMsg/SuccessModal";

// // -------- Captcha helpers --------
// function generateCaptcha(length = 6) {
//   const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
//   let out = "";
//   for (let i = 0; i < length; i++)
//     out += chars[Math.floor(Math.random() * chars.length)];
//   return out;
// }

// function drawCaptcha(text) {
//   const canvas = document.createElement("canvas");
//   const width = 380;
//   const height = 70;
//   canvas.width = width;
//   canvas.height = height;
//   const ctx = canvas.getContext("2d");
//   if (!ctx) return "";

//   const grd = ctx.createLinearGradient(0, 0, width, height);
//   grd.addColorStop(0, "#f4f7ff");
//   grd.addColorStop(1, "#e9f7ff");
//   ctx.fillStyle = grd;
//   ctx.fillRect(0, 0, width, height);

//   for (let i = 0; i < 6; i++) {
//     ctx.strokeStyle = `rgba(0,0,0,${0.2 + Math.random() * 0.2})`;
//     ctx.lineWidth = 1 + Math.random() * 1.5;
//     ctx.beginPath();
//     ctx.moveTo(Math.random() * width, Math.random() * height);
//     ctx.lineTo(Math.random() * width, Math.random() * height);
//     ctx.stroke();
//   }

//   ctx.font = "bold 38px ui-sans-serif, system-ui";
//   ctx.textBaseline = "middle";
//   const spacing = width / (text.length + 2);
//   for (let i = 0; i < text.length; i++) {
//     const ch = text[i];
//     const angle = (Math.random() - 0.5) * 0.6;
//     ctx.save();
//     ctx.translate(spacing * (i + 1.2), height / 2);
//     ctx.rotate(angle);
//     ctx.fillStyle = `rgba(0,0,0,${0.75 + Math.random() * 0.25})`;
//     ctx.fillText(ch, 0, 0);
//     ctx.restore();
//   }

//   for (let i = 0; i < 80; i++) {
//     ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.15})`;
//     ctx.beginPath();
//     ctx.arc(
//       Math.random() * width,
//       Math.random() * height,
//       Math.random() * 2,
//       0,
//       Math.PI * 2
//     );
//     ctx.fill();
//   }

//   return canvas.toDataURL("image/png");
// }

// // -------- Mock login (replace with real API) --------
// async function fakeLogin({ userId, password }) {
//   await new Promise((r) => setTimeout(r, 900));
//   if (userId === "679532" && password === "Password@123") {
//     return {
//       ok: true,
//       token: "demo-token-123",
//       user: { id: userId, name: "QCOP User" },
//     };
//   }
//   return {
//     ok: false,
//     error:
//       userId !== "679532" ? "Your user ID is incorrect" : "Incorrect password",
//   };
// }

// // -------- Small inline SVG icons --------
// const Icon = {
//   Alert: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
//       <line x1="12" y1="9" x2="12" y2="13" />
//       <line x1="12" y1="17" x2="12.01" y2="17" />
//     </svg>
//   ),
//   ArrowRight: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <path d="M5 12h14" />
//       <path d="M12 5l7 7-7 7" />
//     </svg>
//   ),
//   Eye: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   ),
//   EyeOff: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <path d="M17.94 17.94A10.94 10.94 0 0112 20C5 20 1 12 1 12a21.71 21.71 0 015.06-6.94" />
//       <path d="M10.58 10.58A3 3 0 0112 9a3 3 0 013 3 3 3 0 01-1.58 2.63" />
//       <line x1="1" y1="1" x2="23" y2="23" />
//     </svg>
//   ),
//   Volume: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
//       <path d="M19.07 4.93a10 10 0 010 14.14" />
//       <path d="M15.54 8.46a5 5 0 010 7.07" />
//     </svg>
//   ),
//   Refresh: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <polyline points="23 4 23 10 17 10" />
//       <polyline points="1 20 1 14 7 14" />
//       <path d="M3.51 9a9 9 0 0114.13-3.36L23 10" />
//       <path d="M20.49 15a9 9 0 01-14.13 3.36L1 14" />
//     </svg>
//   ),
//   Spinner: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       className={`animate-spin ${props.className || ""}`}
//     >
//       <circle
//         cx="12"
//         cy="12"
//         r="10"
//         stroke="currentColor"
//         strokeOpacity="0.25"
//         strokeWidth="4"
//         fill="none"
//       />
//       <path
//         d="M22 12a10 10 0 00-10-10"
//         stroke="currentColor"
//         strokeWidth="4"
//         fill="none"
//       />
//     </svg>
//   ),
// };

// export default function QCOPLoginPage() {
//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [remember, setRemember] = useState(false);
//   const [captcha, setCaptcha] = useState(generateCaptcha());
//   const [captchaInput, setCaptchaInput] = useState("");
//   const [captchaImg, setCaptchaImg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [isResetOpen, setIsResetOpen] = useState(false);
//   const [isUpdatedOpen, setIsUpdatedOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setCaptchaImg(drawCaptcha(captcha));
//   }, [captcha]);

//   useEffect(() => {
//     const saved = localStorage.getItem("qcop.remember");
//     if (saved) {
//       const data = JSON.parse(saved);
//       setUserId(data.userId || "");
//       setRemember(true);
//     }
//   }, []);

//   const speakCaptcha = () => {
//     const utter = new SpeechSynthesisUtterance(captcha.split("").join(" "));
//     window.speechSynthesis.speak(utter);
//   };

//   const canSubmit = userId.trim() && password && captchaInput && !loading;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!userId.trim()) return setError("Please enter your User ID");
//     if (!password) return setError("Please enter your password");
//     if (!captchaInput) return setError("Please solve the captcha");
//     if (captchaInput.trim().toLowerCase() !== captcha.toLowerCase()) {
//       setError("Captcha does not match");
//       setCaptcha(generateCaptcha());
//       setCaptchaInput("");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fakeLogin({ userId: userId.trim(), password });
//       if (!res.ok) {
//         setError(res.error || "Unable to sign in");
//         setCaptcha(generateCaptcha());
//         setCaptchaInput("");
//       } else {
//         sessionStorage.setItem("qcop.token", res.token);
//         if (remember)
//           localStorage.setItem("qcop.remember", JSON.stringify({ userId }));
//         else localStorage.removeItem("qcop.remember");
//         navigate("/dashboard");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const quote = useMemo(
//     () => ({
//       text: "Success doesn’t come from what you do occasionally. It comes from what you do consistently.",
//       author: "Marie Forleo",
//       role: "Principal At HQ",
//     }),
//     []
//   );

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-sky-50">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Right column – image + quote */}
//         <div className="relative order-1 lg:order-2">
//           <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl">
//             <img
//               src={BuildingImage}
//               alt="Construction site"
//               className="h-48 sm:h-64 md:h-80 lg:h-[680px] w-full object-cover"
//             />
//             {/* Quote card stays on image */}
//             <div className="absolute inset-x-2 sm:inset-x-4 bottom-2 sm:bottom-4 lg:bottom-auto lg:top-1/2 lg:translate-y-1/2">
//               <div className="max-w-xl rounded-2xl bg-white/40 backdrop-blur-xl p-3 sm:p-6 shadow-lg">
//                 <p className="text-base sm:text-lg md:text-2xl font-semibold leading-snug">
//                   “{quote.text}”
//                 </p>
//                 <div className="mt-1 sm:mt-2">
//                   <p className="font-medium text-sm sm:text-base">
//                     {quote.author}
//                   </p>
//                   <p className="text-xs sm:text-sm text-slate-700">
//                     {quote.role}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Left column – form */}
//         <div className="flex flex-col order-2 lg:order-1">
//           {/* Desktop: Logo on top-left */}
//           <div className="hidden lg:flex items-center gap-2 px-4 pt-2">
//             <img src={QcopLogo} alt="QCOP Logo" className="w-36 h-auto" />
//           </div>

//           {/* Mobile: Logo below image */}
//           <div className="lg:hidden flex justify-center mt-4 mb-6">
//             <img src={QcopLogo} alt="QCOP Logo" className="w-32 h-auto" />
//           </div>

//           {/* Welcome text */}
//           <div className="text-center mb-6 lg:mb-4">
//             <h1 className="text-2xl sm:text-3xl font-semibold">Welcome Back</h1>
//             <p className="mt-1 sm:mt-2 text-sm sm:text-base text-slate-500">
//               Enter your details to continue
//             </p>
//           </div>

//           {/* Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="mt-0 sm:mt-2 max-w-md w-full space-y-4 sm:space-y-5 mx-auto px-2 sm:px-0"
//           >
//             {/* User ID */}
//             <div>
//               <label
//                 htmlFor="userId"
//                 className="block text-sm font-medium text-slate-900"
//               >
//                 User ID
//               </label>
//               <input
//                 id="userId"
//                 value={userId}
//                 onChange={(e) => setUserId(e.target.value)}
//                 className="mt-1 w-full h-10 sm:h-12 rounded-lg border border-slate-300 px-2 sm:px-3 text-sm sm:text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
//                 placeholder="Enter your User ID"
//                 autoComplete="username"
//                 // inputMode="numeric"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-slate-900"
//               >
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="mt-1 w-full h-10 sm:h-12 rounded-lg border border-slate-300 px-2 sm:px-3 pr-10 text-sm sm:text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
//                   placeholder="••••••••"
//                   autoComplete="current-password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword((s) => !s)}
//                   className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-slate-700"
//                 >
//                   {showPassword ? (
//                     <Icon.EyeOff className="h-4 sm:h-5 w-4 sm:w-5" />
//                   ) : (
//                     <Icon.Eye className="h-4 sm:h-5 w-4 sm:w-5" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Remember + Reset */}
//             <div className="flex items-center justify-between text-xs sm:text-sm">
//               <label className="inline-flex items-center gap-1 sm:gap-2 select-none">
//                 <input
//                   type="checkbox"
//                   className="h-3 w-3 sm:h-4 sm:w-4 rounded border-slate-300"
//                   checked={remember}
//                   onChange={(e) => setRemember(e.target.checked)}
//                 />
//                 <span className="text-slate-700">Remember me</span>
//               </label>
//               <a
//                 href="#!"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setIsResetOpen(true);
//                 }}
//                 className="text-sky-600 hover:underline"
//               >
//                 Forgot password?
//               </a>
//             </div>

//             {/* Captcha */}
//             <div className="flex items-center gap-3">
//               <img
//                 src={captchaImg}
//                 alt="captcha"
//                 className="h-12 sm:h-14 rounded-lg border border-slate-300"
//               />
//               <button
//                 type="button"
//                 onClick={() => setCaptcha(generateCaptcha())}
//                 className="p-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100"
//               >
//                 <Icon.Refresh className="h-4 w-4" />
//               </button>
//               <button
//                 type="button"
//                 onClick={speakCaptcha}
//                 className="p-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100"
//               >
//                 <Icon.Volume className="h-4 w-4" />
//               </button>
//             </div>
//             <input
//               value={captchaInput}
//               onChange={(e) => setCaptchaInput(e.target.value)}
//               className="mt-1 w-full h-10 sm:h-12 rounded-lg border border-slate-300 px-2 sm:px-3 text-sm sm:text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
//               placeholder="Enter captcha"
//             />

//             {error && <p className="text-red-600 text-sm">{error}</p>}

//             {/* Submit */}
//             <button
//               type="submit"
//               onClick={() => navigate("/dashboard")}
//               disabled={!canSubmit}
//               className={`w-full flex justify-center items-center gap-2 bg-sky-600 text-white rounded-lg px-3 py-2 sm:py-3 font-semibold hover:bg-sky-700 disabled:opacity-50`}
//             >
//               {loading ? <Icon.Spinner className="h-5 w-5" /> : "Sign in"}
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Modals */}
//       <ResetPassword
//         open={isResetOpen}
//         onClose={() => setIsResetOpen(false)}
//         onSuccess={() => setIsUpdatedOpen(true)}
//       />
//       {/* <UpdatePassword
//         open={isUpdatedOpen}
//         onClose={() => setIsUpdatedOpen(false)}
//       /> */}

//       <SuccessModal
//         open={isUpdatedOpen}
//         onClose={() => setIsUpdatedOpen(false)}
//         // onClose={onClose}
//         title="Password Updated!"
//         message="Your new password has been updated successfully."
//         buttonText="Back to Login"
//       />
//     </div>
//   );
// }

// ===========================
// import React, { useEffect, useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ResetPassword from "./ResetPassword";
// import UpdatePassword from "./UpdatePassword";
// import QcopLogo from "../assets/Qcop-logo.png";
// import BuildingImage from "../assets/Building-image.png";
// import SuccessModal from "../components/SuccessMsg/SuccessModal";
// import { loginApi } from "../api/authApi"; // ✅ import API

// // -------- Captcha helpers --------
// function generateCaptcha(length = 6) {
//   const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
//   let out = "";
//   for (let i = 0; i < length; i++)
//     out += chars[Math.floor(Math.random() * chars.length)];
//   return out;
// }

// function drawCaptcha(text) {
//   const canvas = document.createElement("canvas");
//   const width = 380;
//   const height = 70;
//   canvas.width = width;
//   canvas.height = height;
//   const ctx = canvas.getContext("2d");
//   if (!ctx) return "";

//   const grd = ctx.createLinearGradient(0, 0, width, height);
//   grd.addColorStop(0, "#f4f7ff");
//   grd.addColorStop(1, "#e9f7ff");
//   ctx.fillStyle = grd;
//   ctx.fillRect(0, 0, width, height);

//   for (let i = 0; i < 6; i++) {
//     ctx.strokeStyle = `rgba(0,0,0,${0.2 + Math.random() * 0.2})`;
//     ctx.lineWidth = 1 + Math.random() * 1.5;
//     ctx.beginPath();
//     ctx.moveTo(Math.random() * width, Math.random() * height);
//     ctx.lineTo(Math.random() * width, Math.random() * height);
//     ctx.stroke();
//   }

//   ctx.font = "bold 38px ui-sans-serif, system-ui";
//   ctx.textBaseline = "middle";
//   const spacing = width / (text.length + 2);
//   for (let i = 0; i < text.length; i++) {
//     const ch = text[i];
//     const angle = (Math.random() - 0.5) * 0.6;
//     ctx.save();
//     ctx.translate(spacing * (i + 1.2), height / 2);
//     ctx.rotate(angle);
//     ctx.fillStyle = `rgba(0,0,0,${0.75 + Math.random() * 0.25})`;
//     ctx.fillText(ch, 0, 0);
//     ctx.restore();
//   }

//   for (let i = 0; i < 80; i++) {
//     ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.15})`;
//     ctx.beginPath();
//     ctx.arc(
//       Math.random() * width,
//       Math.random() * height,
//       Math.random() * 2,
//       0,
//       Math.PI * 2
//     );
//     ctx.fill();
//   }

//   return canvas.toDataURL("image/png");
// }

// // -------- Small inline SVG icons --------
// const Icon = {
//   Alert: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
//       <line x1="12" y1="9" x2="12" y2="13" />
//       <line x1="12" y1="17" x2="12.01" y2="17" />
//     </svg>
//   ),
//   ArrowRight: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <path d="M5 12h14" />
//       <path d="M12 5l7 7-7 7" />
//     </svg>
//   ),
//   Eye: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   ),
//   EyeOff: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <path d="M17.94 17.94A10.94 10.94 0 0112 20C5 20 1 12 1 12a21.71 21.71 0 015.06-6.94" />
//       <path d="M10.58 10.58A3 3 0 0112 9a3 3 0 013 3 3 3 0 01-1.58 2.63" />
//       <line x1="1" y1="1" x2="23" y2="23" />
//     </svg>
//   ),
//   Volume: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
//       <path d="M19.07 4.93a10 10 0 010 14.14" />
//       <path d="M15.54 8.46a5 5 0 010 7.07" />
//     </svg>
//   ),
//   Refresh: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <polyline points="23 4 23 10 17 10" />
//       <polyline points="1 20 1 14 7 14" />
//       <path d="M3.51 9a9 9 0 0114.13-3.36L23 10" />
//       <path d="M20.49 15a9 9 0 01-14.13 3.36L1 14" />
//     </svg>
//   ),
//   Spinner: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       className={`animate-spin ${props.className || ""}`}
//     >
//       <circle
//         cx="12"
//         cy="12"
//         r="10"
//         stroke="currentColor"
//         strokeOpacity="0.25"
//         strokeWidth="4"
//         fill="none"
//       />
//       <path
//         d="M22 12a10 10 0 00-10-10"
//         stroke="currentColor"
//         strokeWidth="4"
//         fill="none"
//       />
//     </svg>
//   ),
// };

// export default function QCOPLoginPage() {
//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [remember, setRemember] = useState(false);
//   const [captcha, setCaptcha] = useState(generateCaptcha());
//   const [captchaInput, setCaptchaInput] = useState("");
//   const [captchaImg, setCaptchaImg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [isResetOpen, setIsResetOpen] = useState(false);
//   const [isUpdatedOpen, setIsUpdatedOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setCaptchaImg(drawCaptcha(captcha));
//   }, [captcha]);

//   useEffect(() => {
//     const saved = localStorage.getItem("qcop.remember");
//     if (saved) {
//       const data = JSON.parse(saved);
//       setUserId(data.userId || "");
//       setRemember(true);
//     }
//   }, []);

//   const speakCaptcha = () => {
//     const utter = new SpeechSynthesisUtterance(captcha.split("").join(" "));
//     window.speechSynthesis.speak(utter);
//   };

//   const canSubmit = userId.trim() && password && captchaInput && !loading;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!userId.trim()) return setError("Please enter your User ID");
//     if (!password) return setError("Please enter your password");
//     if (!captchaInput) return setError("Please solve the captcha");
//     if (captchaInput.trim().toLowerCase() !== captcha.toLowerCase()) {
//       setError("Captcha does not match");
//       setCaptcha(generateCaptcha());
//       setCaptchaInput("");
//       return;
//     }

//     setLoading(true);
//     try {
//       // ✅ use imported loginApi instead of inline fakeLogin
//       const res = await loginApi({ userId: userId.trim(), password });
//       if (!res.ok) {
//         setError(res.error || "Unable to sign in");
//         setCaptcha(generateCaptcha());
//         setCaptchaInput("");
//       } else {
//         sessionStorage.setItem("qcop.token", res.token);
//         localStorage.setItem("qcop.user", JSON.stringify(res.user));
//         if (remember)
//           localStorage.setItem("qcop.remember", JSON.stringify({ userId }));
//         else localStorage.removeItem("qcop.remember");
//         navigate("/dashboard");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const quote = useMemo(
//     () => ({
//       text: "Success doesn’t come from what you do occasionally. It comes from what you do consistently.",
//       author: "Marie Forleo",
//       role: "Principal At HQ",
//     }),
//     []
//   );

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-sky-50">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Right column – image + quote */}
//         <div className="relative order-1 lg:order-2">
//           <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl">
//             <img
//               src={BuildingImage}
//               alt="Construction site"
//               className="h-48 sm:h-64 md:h-80 lg:h-[680px] w-full object-cover"
//             />
//             {/* Quote card stays on image */}
//             <div className="absolute inset-x-2 sm:inset-x-4 bottom-2 sm:bottom-4 lg:bottom-auto lg:top-1/2 lg:translate-y-1/2">
//               <div className="max-w-xl rounded-2xl bg-white/40 backdrop-blur-xl p-3 sm:p-6 shadow-lg">
//                 <p className="text-base sm:text-lg md:text-2xl font-semibold leading-snug">
//                   “{quote.text}”
//                 </p>
//                 <div className="mt-1 sm:mt-2">
//                   <p className="font-medium text-sm sm:text-base">
//                     {quote.author}
//                   </p>
//                   <p className="text-xs sm:text-sm text-slate-700">
//                     {quote.role}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Left column – form */}
//         <div className="flex flex-col order-2 lg:order-1">
//           {/* Desktop: Logo on top-left */}
//           <div className="hidden lg:flex items-center gap-2 px-4 pt-2">
//             <img src={QcopLogo} alt="QCOP Logo" className="w-36 h-auto" />
//           </div>

//           {/* Mobile: Logo below image */}
//           <div className="lg:hidden flex justify-center mt-4 mb-6">
//             <img src={QcopLogo} alt="QCOP Logo" className="w-32 h-auto" />
//           </div>

//           {/* Welcome text */}
//           <div className="text-center mb-6 lg:mb-4">
//             <h1 className="text-2xl sm:text-3xl font-semibold">Welcome Back</h1>
//             <p className="mt-1 sm:mt-2 text-sm sm:text-base text-slate-500">
//               Enter your details to continue
//             </p>
//           </div>

//           {/* Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="mt-0 sm:mt-2 max-w-md w-full space-y-4 sm:space-y-5 mx-auto px-2 sm:px-0"
//           >
//             {/* User ID */}
//             <div>
//               <label
//                 htmlFor="userId"
//                 className="block text-sm font-medium text-slate-900"
//               >
//                 User ID
//               </label>
//               <input
//                 id="userId"
//                 value={userId}
//                 onChange={(e) => setUserId(e.target.value)}
//                 className="mt-1 w-full h-10 sm:h-12 rounded-lg border border-slate-300 px-2 sm:px-3 text-sm sm:text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
//                 placeholder="Enter your User ID"
//                 autoComplete="username"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-slate-900"
//               >
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="mt-1 w-full h-10 sm:h-12 rounded-lg border border-slate-300 px-2 sm:px-3 pr-10 text-sm sm:text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
//                   placeholder="••••••••"
//                   autoComplete="current-password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword((s) => !s)}
//                   className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-slate-700"
//                 >
//                   {showPassword ? (
//                     <Icon.EyeOff className="h-4 sm:h-5 w-4 sm:w-5" />
//                   ) : (
//                     <Icon.Eye className="h-4 sm:h-5 w-4 sm:w-5" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Remember + Reset */}
//             <div className="flex items-center justify-between text-xs sm:text-sm">
//               <label className="inline-flex items-center gap-1 sm:gap-2 select-none">
//                 <input
//                   type="checkbox"
//                   className="h-3 w-3 sm:h-4 sm:w-4 rounded border-slate-300"
//                   checked={remember}
//                   onChange={(e) => setRemember(e.target.checked)}
//                 />
//                 <span className="text-slate-700">Remember me</span>
//               </label>
//               <a
//                 href="#!"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setIsResetOpen(true);
//                 }}
//                 className="text-sky-600 hover:underline"
//               >
//                 Forgot password?
//               </a>
//             </div>

//             {/* Captcha */}
//             <div className="flex items-center gap-3">
//               <img
//                 src={captchaImg}
//                 alt="captcha"
//                 className="h-12 sm:h-14 rounded-lg border border-slate-300"
//               />
//               <button
//                 type="button"
//                 onClick={() => setCaptcha(generateCaptcha())}
//                 className="p-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100"
//               >
//                 <Icon.Refresh className="h-4 w-4" />
//               </button>
//               <button
//                 type="button"
//                 onClick={speakCaptcha}
//                 className="p-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100"
//               >
//                 <Icon.Volume className="h-4 w-4" />
//               </button>
//             </div>
//             <input
//               value={captchaInput}
//               onChange={(e) => setCaptchaInput(e.target.value)}
//               className="mt-1 w-full h-10 sm:h-12 rounded-lg border border-slate-300 px-2 sm:px-3 text-sm sm:text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
//               placeholder="Enter captcha"
//             />

//             {error && <p className="text-red-600 text-sm">{error}</p>}

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={!canSubmit}
//               className="w-full flex justify-center items-center gap-2 bg-sky-600 text-white rounded-lg px-3 py-2 sm:py-3 font-semibold hover:bg-sky-700 disabled:opacity-50"
//             >
//               {loading ? <Icon.Spinner className="h-5 w-5" /> : "Sign in"}
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Modals */}
//       <ResetPassword
//         open={isResetOpen}
//         onClose={() => setIsResetOpen(false)}
//         onSuccess={() => setIsUpdatedOpen(true)}
//       />
//       <SuccessModal
//         open={isUpdatedOpen}
//         onClose={() => setIsUpdatedOpen(false)}
//         title="Password Updated!"
//         message="Your new password has been updated successfully."
//         buttonText="Back to Login"
//       />
//     </div>
//   );
// }

// ==========================upper code is perf

// import React, { useEffect, useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ResetPassword from "./ResetPassword";
// import UpdatePassword from "./UpdatePassword";
// import QcopLogo from "../assets/Qcop-logo.png";
// import BuildingImage from "../assets/Building-image.png";
// import SuccessModal from "../components/SuccessMsg/SuccessModal";
// import { loginApi } from "../api/authApi"; // ✅ import API

// // -------- Captcha helpers --------
// function generateCaptcha(length = 6) {
//   const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
//   let out = "";
//   for (let i = 0; i < length; i++)
//     out += chars[Math.floor(Math.random() * chars.length)];
//   return out;
// }

// function drawCaptcha(text) {
//   const canvas = document.createElement("canvas");
//   const width = 380;
//   const height = 70;
//   canvas.width = width;
//   canvas.height = height;
//   const ctx = canvas.getContext("2d");
//   if (!ctx) return "";

//   const grd = ctx.createLinearGradient(0, 0, width, height);
//   grd.addColorStop(0, "#f4f7ff");
//   grd.addColorStop(1, "#e9f7ff");
//   ctx.fillStyle = grd;
//   ctx.fillRect(0, 0, width, height);

//   for (let i = 0; i < 6; i++) {
//     ctx.strokeStyle = `rgba(0,0,0,${0.2 + Math.random() * 0.2})`;
//     ctx.lineWidth = 1 + Math.random() * 1.5;
//     ctx.beginPath();
//     ctx.moveTo(Math.random() * width, Math.random() * height);
//     ctx.lineTo(Math.random() * width, Math.random() * height);
//     ctx.stroke();
//   }

//   ctx.font = "bold 38px ui-sans-serif, system-ui";
//   ctx.textBaseline = "middle";
//   const spacing = width / (text.length + 2);
//   for (let i = 0; i < text.length; i++) {
//     const ch = text[i];
//     const angle = (Math.random() - 0.5) * 0.6;
//     ctx.save();
//     ctx.translate(spacing * (i + 1.2), height / 2);
//     ctx.rotate(angle);
//     ctx.fillStyle = `rgba(0,0,0,${0.75 + Math.random() * 0.25})`;
//     ctx.fillText(ch, 0, 0);
//     ctx.restore();
//   }

//   for (let i = 0; i < 80; i++) {
//     ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.15})`;
//     ctx.beginPath();
//     ctx.arc(
//       Math.random() * width,
//       Math.random() * height,
//       Math.random() * 2,
//       0,
//       Math.PI * 2
//     );
//     ctx.fill();
//   }

//   return canvas.toDataURL("image/png");
// }

// // -------- Small inline SVG icons --------
// const Icon = {
//   Alert: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
//       <line x1="12" y1="9" x2="12" y2="13" />
//       <line x1="12" y1="17" x2="12.01" y2="17" />
//     </svg>
//   ),
//   ArrowRight: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <path d="M5 12h14" />
//       <path d="M12 5l7 7-7 7" />
//     </svg>
//   ),
//   Eye: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   ),
//   EyeOff: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <path d="M17.94 17.94A10.94 10.94 0 0112 20C5 20 1 12 1 12a21.71 21.71 0 015.06-6.94" />
//       <path d="M10.58 10.58A3 3 0 0112 9a3 3 0 013 3 3 3 0 01-1.58 2.63" />
//       <line x1="1" y1="1" x2="23" y2="23" />
//     </svg>
//   ),
//   Volume: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
//       <path d="M19.07 4.93a10 10 0 010 14.14" />
//       <path d="M15.54 8.46a5 5 0 010 7.07" />
//     </svg>
//   ),
//   Refresh: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       {...props}
//     >
//       <polyline points="23 4 23 10 17 10" />
//       <polyline points="1 20 1 14 7 14" />
//       <path d="M3.51 9a9 9 0 0114.13-3.36L23 10" />
//       <path d="M20.49 15a9 9 0 01-14.13 3.36L1 14" />
//     </svg>
//   ),
//   Spinner: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       className={`animate-spin ${props.className || ""}`}
//     >
//       <circle
//         cx="12"
//         cy="12"
//         r="10"
//         stroke="currentColor"
//         strokeOpacity="0.25"
//         strokeWidth="4"
//         fill="none"
//       />
//       <path
//         d="M22 12a10 10 0 00-10-10"
//         stroke="currentColor"
//         strokeWidth="4"
//         fill="none"
//       />
//     </svg>
//   ),
// };

// export default function QCOPLoginPage() {
//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [remember, setRemember] = useState(false);
//   const [captcha, setCaptcha] = useState(generateCaptcha());
//   const [captchaInput, setCaptchaInput] = useState("");
//   const [captchaImg, setCaptchaImg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [isResetOpen, setIsResetOpen] = useState(false);
//   const [isUpdatedOpen, setIsUpdatedOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setCaptchaImg(drawCaptcha(captcha));
//   }, [captcha]);

//   useEffect(() => {
//     const saved = localStorage.getItem("qcop.remember");
//     if (saved) {
//       const data = JSON.parse(saved);
//       setUserId(data.userId || "");
//       setRemember(true);
//     }
//   }, []);

//   const speakCaptcha = () => {
//     const utter = new SpeechSynthesisUtterance(captcha.split("").join(" "));
//     window.speechSynthesis.speak(utter);
//   };

//   const canSubmit = userId.trim() && password && captchaInput && !loading;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!userId.trim()) return setError("Please enter your User ID");
//     if (!password) return setError("Please enter your password");
//     if (!captchaInput) return setError("Please solve the captcha");
//     if (captchaInput.trim().toLowerCase() !== captcha.toLowerCase()) {
//       setError("Captcha does not match");
//       setCaptcha(generateCaptcha());
//       setCaptchaInput("");
//       return;
//     }

//     setLoading(true);
//     try {
//       // ✅ use imported loginApi instead of inline fakeLogin
//       const res = await loginApi({ userId: userId.trim(), password });
//       if (!res.ok) {
//         setError(res.error || "Unable to sign in");
//         setCaptcha(generateCaptcha());
//         setCaptchaInput("");
//       } else {
//         sessionStorage.setItem("qcop.token", res.token);
//         localStorage.setItem("qcop.user", JSON.stringify(res.user));
//         if (remember)
//           localStorage.setItem("qcop.remember", JSON.stringify({ userId }));
//         else localStorage.removeItem("qcop.remember");
//         navigate("/dashboard");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const quote = useMemo(
//     () => ({
//       text: "Success doesn’t come from what you do occasionally. It comes from what you do consistently.",
//       author: "Marie Forleo",
//       role: "Principal At HQ",
//     }),
//     []
//   );

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-sky-50">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Right column – image + quote */}
//         <div className="relative order-1 lg:order-2">
//           <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl">
//             <img
//               src={BuildingImage}
//               alt="Construction site"
//               className="h-48 sm:h-64 md:h-80 lg:h-[680px] w-full object-cover"
//             />
//             {/* Quote card stays on image */}
//             <div className="absolute inset-x-2 sm:inset-x-4 bottom-2 sm:bottom-4 lg:bottom-auto lg:top-1/2 lg:translate-y-1/2">
//               <div className="max-w-xl rounded-2xl bg-white/40 backdrop-blur-xl p-3 sm:p-6 shadow-lg">
//                 <p className="text-base sm:text-lg md:text-2xl font-semibold leading-snug">
//                   “{quote.text}”
//                 </p>
//                 <div className="mt-1 sm:mt-2">
//                   <p className="font-medium text-sm sm:text-base">
//                     {quote.author}
//                   </p>
//                   <p className="text-xs sm:text-sm text-slate-700">
//                     {quote.role}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Left column – form */}
//         <div className="flex flex-col order-2 lg:order-1">
//           {/* Desktop: Logo on top-left */}
//           <div className="hidden lg:flex items-center gap-2 px-4 pt-2">
//             <img src={QcopLogo} alt="QCOP Logo" className="w-36 h-auto" />
//           </div>

//           {/* Mobile: Logo below image */}
//           <div className="lg:hidden flex justify-center mt-4 mb-6">
//             <img src={QcopLogo} alt="QCOP Logo" className="w-32 h-auto" />
//           </div>

//           {/* Welcome text */}
//           <div className="text-center mb-6 lg:mb-4">
//             <h1 className="text-2xl sm:text-3xl font-semibold">Welcome Back</h1>
//             <p className="mt-1 sm:mt-2 text-sm sm:text-base text-slate-500">
//               Enter your details to continue
//             </p>
//           </div>

//           {/* Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="mt-0 sm:mt-2 max-w-md w-full space-y-4 sm:space-y-5 mx-auto px-2 sm:px-0"
//           >
//             {/* User ID */}
//             <div>
//               <label
//                 htmlFor="userId"
//                 className="block text-sm font-medium text-slate-900"
//               >
//                 User ID
//               </label>
//               <input
//                 id="userId"
//                 value={userId}
//                 onChange={(e) => setUserId(e.target.value)}
//                 className="mt-1 w-full h-10 sm:h-12 rounded-lg border border-slate-300 px-2 sm:px-3 text-sm sm:text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
//                 placeholder="Enter your User ID"
//                 autoComplete="username"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-slate-900"
//               >
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="mt-1 w-full h-10 sm:h-12 rounded-lg border border-slate-300 px-2 sm:px-3 pr-10 text-sm sm:text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
//                   placeholder="••••••••"
//                   autoComplete="current-password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword((s) => !s)}
//                   className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-slate-700"
//                 >
//                   {showPassword ? (
//                     <Icon.EyeOff className="h-4 sm:h-5 w-4 sm:w-5" />
//                   ) : (
//                     <Icon.Eye className="h-4 sm:h-5 w-4 sm:w-5" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Remember + Reset */}
//             <div className="flex items-center justify-between text-xs sm:text-sm">
//               <label className="inline-flex items-center gap-1 sm:gap-2 select-none">
//                 <input
//                   type="checkbox"
//                   className="h-3 w-3 sm:h-4 sm:w-4 rounded border-slate-300"
//                   checked={remember}
//                   onChange={(e) => setRemember(e.target.checked)}
//                 />
//                 <span className="text-slate-700">Remember me</span>
//               </label>
//               <a
//                 href="#!"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setIsResetOpen(true);
//                 }}
//                 className="text-sky-600 hover:underline"
//               >
//                 Forgot password?
//               </a>
//             </div>

//             {/* Captcha */}
//             <div className="flex items-center gap-3">
//               <img
//                 src={captchaImg}
//                 alt="captcha"
//                 className="h-12 sm:h-14 rounded-lg border border-slate-300"
//               />
//               <button
//                 type="button"
//                 onClick={() => setCaptcha(generateCaptcha())}
//                 className="p-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100"
//               >
//                 <Icon.Refresh className="h-4 w-4" />
//               </button>
//               <button
//                 type="button"
//                 onClick={speakCaptcha}
//                 className="p-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100"
//               >
//                 <Icon.Volume className="h-4 w-4" />
//               </button>
//             </div>
//             <input
//               value={captchaInput}
//               onChange={(e) => setCaptchaInput(e.target.value)}
//               className="mt-1 w-full h-10 sm:h-12 rounded-lg border border-slate-300 px-2 sm:px-3 text-sm sm:text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
//               placeholder="Enter captcha"
//             />

//             {error && <p className="text-red-600 text-sm">{error}</p>}

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={!canSubmit}
//               className="w-full flex justify-center items-center gap-2 bg-sky-600 text-white rounded-lg px-3 py-2 sm:py-3 font-semibold hover:bg-sky-700 disabled:opacity-50"
//             >
//               {loading ? <Icon.Spinner className="h-5 w-5" /> : "Sign in"}
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Modals */}
//       <ResetPassword
//         open={isResetOpen}
//         onClose={() => setIsResetOpen(false)}
//         onSuccess={() => setIsUpdatedOpen(true)}
//       />
//       <SuccessModal
//         open={isUpdatedOpen}
//         onClose={() => setIsUpdatedOpen(false)}
//         title="Password Updated!"
//         message="Your new password has been updated successfully."
//         buttonText="Back to Login"
//       />
//     </div>
//   );
// }

// =========================

// import React, { useEffect, useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ResetPassword from "./ResetPassword";
// import UpdatePassword from "./UpdatePassword";
// import QcopLogo from "../assets/Qcop-logo.png";
// import BuildingImage from "../assets/Building-image.png";
// import SuccessModal from "../components/SuccessMsg/SuccessModal";
// import { loginApi } from "../api/authApi";

// // -------- Captcha helpers --------
// function generateCaptcha(length = 6) {
//   const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
//   let out = "";
//   for (let i = 0; i < length; i++)
//     out += chars[Math.floor(Math.random() * chars.length)];
//   return out;
// }

// function drawCaptcha(text) {
//   const canvas = document.createElement("canvas");
//   const width = 380;
//   const height = 70;
//   canvas.width = width;
//   canvas.height = height;
//   const ctx = canvas.getContext("2d");
//   if (!ctx) return "";

//   const grd = ctx.createLinearGradient(0, 0, width, height);
//   grd.addColorStop(0, "#f4f7ff");
//   grd.addColorStop(1, "#e9f7ff");
//   ctx.fillStyle = grd;
//   ctx.fillRect(0, 0, width, height);

//   for (let i = 0; i < 6; i++) {
//     ctx.strokeStyle = `rgba(0,0,0,${0.2 + Math.random() * 0.2})`;
//     ctx.lineWidth = 1 + Math.random() * 1.5;
//     ctx.beginPath();
//     ctx.moveTo(Math.random() * width, Math.random() * height);
//     ctx.lineTo(Math.random() * width, Math.random() * height);
//     ctx.stroke();
//   }

//   ctx.font = "bold 38px ui-sans-serif, system-ui";
//   ctx.textBaseline = "middle";
//   const spacing = width / (text.length + 2);
//   for (let i = 0; i < text.length; i++) {
//     const ch = text[i];
//     const angle = (Math.random() - 0.5) * 0.6;
//     ctx.save();
//     ctx.translate(spacing * (i + 1.2), height / 2);
//     ctx.rotate(angle);
//     ctx.fillStyle = `rgba(0,0,0,${0.75 + Math.random() * 0.25})`;
//     ctx.fillText(ch, 0, 0);
//     ctx.restore();
//   }

//   for (let i = 0; i < 80; i++) {
//     ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.15})`;
//     ctx.beginPath();
//     ctx.arc(
//       Math.random() * width,
//       Math.random() * height,
//       Math.random() * 2,
//       0,
//       Math.PI * 2
//     );
//     ctx.fill();
//   }

//   return canvas.toDataURL("image/png");
// }

// // -------- Icons --------
// const Icon = {
//   Eye: (props) => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
//       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   ),
//   EyeOff: (props) => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
//       <path d="M17.94 17.94A10.94 10.94 0 0112 20C5 20 1 12 1 12a21.71 21.71 0 015.06-6.94" />
//       <path d="M10.58 10.58A3 3 0 0112 9a3 3 0 013 3 3 3 0 01-1.58 2.63" />
//       <line x1="1" y1="1" x2="23" y2="23" />
//     </svg>
//   ),
//   Volume: (props) => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
//       <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
//       <path d="M19.07 4.93a10 10 0 010 14.14" />
//       <path d="M15.54 8.46a5 5 0 010 7.07" />
//     </svg>
//   ),
//   Refresh: (props) => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
//       <polyline points="23 4 23 10 17 10" />
//       <polyline points="1 20 1 14 7 14" />
//       <path d="M3.51 9a9 9 0 0114.13-3.36L23 10" />
//       <path d="M20.49 15a9 9 0 01-14.13 3.36L1 14" />
//     </svg>
//   ),
//   Spinner: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       className={`animate-spin ${props.className || ""}`}
//     >
//       <circle
//         cx="12"
//         cy="12"
//         r="10"
//         stroke="currentColor"
//         strokeOpacity="0.25"
//         strokeWidth="4"
//         fill="none"
//       />
//       <path
//         d="M22 12a10 10 0 00-10-10"
//         stroke="currentColor"
//         strokeWidth="4"
//         fill="none"
//       />
//     </svg>
//   ),
// };

// export default function QCOPLoginPage() {
//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [remember, setRemember] = useState(false);
//   const [captcha, setCaptcha] = useState(generateCaptcha());
//   const [captchaInput, setCaptchaInput] = useState("");
//   const [captchaImg, setCaptchaImg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [isResetOpen, setIsResetOpen] = useState(false);
//   const [isUpdatedOpen, setIsUpdatedOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setCaptchaImg(drawCaptcha(captcha));
//   }, [captcha]);

//   useEffect(() => {
//     const saved = localStorage.getItem("qcop.remember");
//     if (saved) {
//       const data = JSON.parse(saved);
//       setUserId(data.userId || "");
//       setRemember(true);
//     }
//   }, []);

//   const speakCaptcha = () => {
//     const utter = new SpeechSynthesisUtterance(captcha.split("").join(" "));
//     window.speechSynthesis.speak(utter);
//   };

//   const canSubmit = userId.trim() && password && captchaInput && !loading;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!userId.trim()) return setError("Please enter your User ID");
//     if (!password) return setError("Please enter your password");
//     if (!captchaInput) return setError("Please solve the captcha");
//     if (captchaInput.trim().toLowerCase() !== captcha.toLowerCase()) {
//       setError("Captcha does not match");
//       setCaptcha(generateCaptcha());
//       setCaptchaInput("");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await loginApi({ userId: userId.trim(), password });
//       if (!res.ok) {
//         setError(res.error || "Unable to sign in");
//         setCaptcha(generateCaptcha());
//         setCaptchaInput("");
//       } else {
//         sessionStorage.setItem("qcop.token", res.token);
//         localStorage.setItem("qcop.user", JSON.stringify(res.user));
//         if (remember)
//           localStorage.setItem("qcop.remember", JSON.stringify({ userId }));
//         else localStorage.removeItem("qcop.remember");
//         navigate("/dashboard");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const quote = useMemo(
//     () => ({
//       text: "Success doesn’t come from what you do occasionally. It comes from what you do consistently.",
//       author: "Marie Forleo",
//       role: "Principal At HQ",
//     }),
//     []
//   );

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-sky-50 flex items-center">
//       <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Right column – image + quote */}
//         <div className="relative order-1 lg:order-2 flex items-center">
//           <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl">
//             <img
//               src={BuildingImage}
//               alt="Construction site"
//               className="h-48 sm:h-64 md:h-96 lg:h-[680px] w-full object-cover"
//             />
//             <div className="absolute inset-x-2 sm:inset-x-4 bottom-2 sm:bottom-4 lg:bottom-auto lg:top-1/2 lg:translate-y-1/2">
//               <div className="max-w-xl rounded-2xl bg-white/40 backdrop-blur-xl p-3 sm:p-6 shadow-lg">
//                 <p className="text-base sm:text-lg md:text-2xl font-semibold leading-snug">
//                   “{quote.text}”
//                 </p>
//                 <div className="mt-1 sm:mt-2">
//                   <p className="font-medium text-sm sm:text-base">
//                     {quote.author}
//                   </p>
//                   <p className="text-xs sm:text-sm text-slate-700">
//                     {quote.role}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Left column – form */}
//         <div className="flex flex-col justify-center order-2 lg:order-1">
//           <div className="hidden lg:flex items-center gap-2 px-4 pt-2">
//             <img src={QcopLogo} alt="QCOP Logo" className="w-36 h-auto" />
//           </div>

//           <div className="lg:hidden flex justify-center mt-4 mb-6">
//             <img src={QcopLogo} alt="QCOP Logo" className="w-32 h-auto" />
//           </div>

//           <div className="text-center mb-6 lg:mb-4">
//             <h1 className="text-2xl sm:text-3xl font-semibold">Welcome Back</h1>
//             <p className="mt-1 sm:mt-2 text-sm sm:text-base text-slate-500">
//               Enter your details to continue
//             </p>
//           </div>

//           <form
//             onSubmit={handleSubmit}
//             className="mt-0 sm:mt-2 max-w-md w-full space-y-4 sm:space-y-5 mx-auto px-2 sm:px-0"
//           >
//             {/* User ID */}
//             <div>
//               <label
//                 htmlFor="userId"
//                 className="block text-sm font-medium text-slate-900"
//               >
//                 User ID
//               </label>
//               <input
//                 id="userId"
//                 value={userId}
//                 onChange={(e) => setUserId(e.target.value)}
//                 className="mt-1 w-full h-10 sm:h-12 rounded-lg border border-slate-300 px-2 sm:px-3 text-sm sm:text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
//                 placeholder="Enter your User ID"
//                 autoComplete="username"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-slate-900"
//               >
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="mt-1 w-full h-10 sm:h-12 rounded-lg border border-slate-300 px-2 sm:px-3 pr-10 text-sm sm:text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
//                   placeholder="••••••••"
//                   autoComplete="current-password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword((s) => !s)}
//                   className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-slate-700"
//                 >
//                   {showPassword ? (
//                     <Icon.EyeOff className="h-4 sm:h-5 w-4 sm:w-5" />
//                   ) : (
//                     <Icon.Eye className="h-4 sm:h-5 w-4 sm:w-5" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Remember + Reset */}
//             <div className="flex items-center justify-between text-xs sm:text-sm">
//               <label className="inline-flex items-center gap-1 sm:gap-2 select-none">
//                 <input
//                   type="checkbox"
//                   className="h-3 w-3 sm:h-4 sm:w-4 rounded border-slate-300"
//                   checked={remember}
//                   onChange={(e) => setRemember(e.target.checked)}
//                 />
//                 <span className="text-slate-700">Remember me</span>
//               </label>
//               <a
//                 href="#!"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setIsResetOpen(true);
//                 }}
//                 className="text-sky-600 hover:underline"
//               >
//                 Forgot password?
//               </a>
//             </div>

//             {/* Captcha */}
//             <div className="flex items-center gap-3 flex-wrap">
//               <img
//                 src={captchaImg}
//                 alt="captcha"
//                 className="h-12 sm:h-14 rounded-lg border border-slate-300"
//               />
//               <div className="flex gap-2">
//                 <button
//                   type="button"
//                   onClick={() => setCaptcha(generateCaptcha())}
//                   className="p-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100"
//                 >
//                   <Icon.Refresh className="h-4 w-4" />
//                 </button>
//                 <button
//                   type="button"
//                   onClick={speakCaptcha}
//                   className="p-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100"
//                 >
//                   <Icon.Volume className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>
//             <input
//               value={captchaInput}
//               onChange={(e) => setCaptchaInput(e.target.value)}
//               className="mt-1 w-full h-10 sm:h-12 rounded-lg border border-slate-300 px-2 sm:px-3 text-sm sm:text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
//               placeholder="Enter captcha"
//             />

//             {error && <p className="text-red-600 text-sm">{error}</p>}

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={!canSubmit}
//               className="w-full flex justify-center items-center gap-2 bg-sky-600 text-white rounded-lg px-3 py-2 sm:py-3 font-semibold hover:bg-sky-700 disabled:opacity-50"
//             >
//               {loading ? <Icon.Spinner className="h-5 w-5" /> : "Sign in"}
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Modals */}
//       <ResetPassword
//         open={isResetOpen}
//         onClose={() => setIsResetOpen(false)}
//         onSuccess={() => setIsUpdatedOpen(true)}
//       />
//       <SuccessModal
//         open={isUpdatedOpen}
//         onClose={() => setIsUpdatedOpen(false)}
//         title="Password Updated!"
//         message="Your new password has been updated successfully."
//         buttonText="Back to Login"
//       />
//     </div>
//   );
// }

// ==================================================

// import React, { useEffect, useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ResetPassword from "./ResetPassword";
// import UpdatePassword from "./UpdatePassword";
// import QcopLogo from "../assets/Qcop-logo.png";
// import BuildingImage from "../assets/Building-image.png";
// import SuccessModal from "../components/SuccessMsg/SuccessModal";
// import { loginApi } from "../api/authApi";

// // -------- Captcha helpers --------
// function generateCaptcha(length = 6) {
//   const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
//   let out = "";
//   for (let i = 0; i < length; i++)
//     out += chars[Math.floor(Math.random() * chars.length)];
//   return out;
// }

// function drawCaptcha(text) {
//   const canvas = document.createElement("canvas");
//   const width = 380;
//   const height = 70;
//   canvas.width = width;
//   canvas.height = height;
//   const ctx = canvas.getContext("2d");
//   if (!ctx) return "";

//   const grd = ctx.createLinearGradient(0, 0, width, height);
//   grd.addColorStop(0, "#f4f7ff");
//   grd.addColorStop(1, "#e9f7ff");
//   ctx.fillStyle = grd;
//   ctx.fillRect(0, 0, width, height);

//   for (let i = 0; i < 6; i++) {
//     ctx.strokeStyle = `rgba(0,0,0,${0.2 + Math.random() * 0.2})`;
//     ctx.lineWidth = 1 + Math.random() * 1.5;
//     ctx.beginPath();
//     ctx.moveTo(Math.random() * width, Math.random() * height);
//     ctx.lineTo(Math.random() * width, Math.random() * height);
//     ctx.stroke();
//   }

//   ctx.font = "bold 38px ui-sans-serif, system-ui";
//   ctx.textBaseline = "middle";
//   const spacing = width / (text.length + 2);
//   for (let i = 0; i < text.length; i++) {
//     const ch = text[i];
//     const angle = (Math.random() - 0.5) * 0.6;
//     ctx.save();
//     ctx.translate(spacing * (i + 1.2), height / 2);
//     ctx.rotate(angle);
//     ctx.fillStyle = `rgba(0,0,0,${0.75 + Math.random() * 0.25})`;
//     ctx.fillText(ch, 0, 0);
//     ctx.restore();
//   }

//   for (let i = 0; i < 80; i++) {
//     ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.15})`;
//     ctx.beginPath();
//     ctx.arc(
//       Math.random() * width,
//       Math.random() * height,
//       Math.random() * 2,
//       0,
//       Math.PI * 2
//     );
//     ctx.fill();
//   }

//   return canvas.toDataURL("image/png");
// }

// // -------- Icons --------
// const Icon = {
//   Eye: (props) => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
//       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   ),
//   EyeOff: (props) => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
//       <path d="M17.94 17.94A10.94 10.94 0 0112 20C5 20 1 12 1 12a21.71 21.71 0 015.06-6.94" />
//       <path d="M10.58 10.58A3 3 0 0112 9a3 3 0 013 3 3 3 0 01-1.58 2.63" />
//       <line x1="1" y1="1" x2="23" y2="23" />
//     </svg>
//   ),
//   Volume: (props) => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
//       <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
//       <path d="M19.07 4.93a10 10 0 010 14.14" />
//       <path d="M15.54 8.46a5 5 0 010 7.07" />
//     </svg>
//   ),
//   Refresh: (props) => (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
//       <polyline points="23 4 23 10 17 10" />
//       <polyline points="1 20 1 14 7 14" />
//       <path d="M3.51 9a9 9 0 0114.13-3.36L23 10" />
//       <path d="M20.49 15a9 9 0 01-14.13 3.36L1 14" />
//     </svg>
//   ),
//   Spinner: (props) => (
//     <svg
//       viewBox="0 0 24 24"
//       className={`animate-spin ${props.className || ""}`}
//     >
//       <circle
//         cx="12"
//         cy="12"
//         r="10"
//         stroke="currentColor"
//         strokeOpacity="0.25"
//         strokeWidth="4"
//         fill="none"
//       />
//       <path
//         d="M22 12a10 10 0 00-10-10"
//         stroke="currentColor"
//         strokeWidth="4"
//         fill="none"
//       />
//     </svg>
//   ),
// };

// export default function QCOPLoginPage() {
//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [remember, setRemember] = useState(false);
//   const [captcha, setCaptcha] = useState(generateCaptcha());
//   const [captchaInput, setCaptchaInput] = useState("");
//   const [captchaImg, setCaptchaImg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [isResetOpen, setIsResetOpen] = useState(false);
//   const [isUpdatedOpen, setIsUpdatedOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setCaptchaImg(drawCaptcha(captcha));
//   }, [captcha]);

//   useEffect(() => {
//     const saved = localStorage.getItem("qcop.remember");
//     if (saved) {
//       const data = JSON.parse(saved);
//       setUserId(data.userId || "");
//       setRemember(true);
//     }
//   }, []);

//   const speakCaptcha = () => {
//     const utter = new SpeechSynthesisUtterance(captcha.split("").join(" "));
//     window.speechSynthesis.speak(utter);
//   };

//   const canSubmit = userId.trim() && password && captchaInput && !loading;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!userId.trim()) return setError("Please enter your User ID");
//     if (!password) return setError("Please enter your password");
//     if (!captchaInput) return setError("Please solve the captcha");
//     if (captchaInput.trim().toLowerCase() !== captcha.toLowerCase()) {
//       setError("Captcha does not match");
//       setCaptcha(generateCaptcha());
//       setCaptchaInput("");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await loginApi({ userId: userId.trim(), password });
//       if (!res.ok) {
//         setError(res.error || "Unable to sign in");
//         setCaptcha(generateCaptcha());
//         setCaptchaInput("");
//       } else {
//         // ✅ Store token for ProtectedRoute
//         sessionStorage.setItem("qcop.token", res.token);
//         localStorage.setItem("qcop.user", JSON.stringify(res.user));

//         if (remember)
//           localStorage.setItem("qcop.remember", JSON.stringify({ userId }));
//         else localStorage.removeItem("qcop.remember");

//         navigate("/dashboard");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const quote = useMemo(
//     () => ({
//       text: "Success doesn’t come from what you do occasionally. It comes from what you do consistently.",
//       author: "Marie Forleo",
//       role: "Principal At HQ",
//     }),
//     []
//   );

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-sky-50 flex items-center overflow-x-hidden">
//       {/* ✅ overflow-x-hidden prevents iPhone screen shift */}
//       <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Right column – image + quote */}
//         <div className="relative order-1 lg:order-2 flex items-center">
//           <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl">
//             <img
//               src={BuildingImage}
//               alt="Construction site"
//               className="h-48 sm:h-64 md:h-96 lg:h-[680px] w-full object-cover"
//             />
//             <div className="absolute inset-x-2 sm:inset-x-4 bottom-2 sm:bottom-4 lg:bottom-auto lg:top-1/2 lg:translate-y-1/2">
//               <div className="max-w-xl rounded-2xl bg-white/40 backdrop-blur-xl p-3 sm:p-6 shadow-lg">
//                 <p className="text-base sm:text-lg md:text-2xl font-semibold leading-snug">
//                   “{quote.text}”
//                 </p>
//                 <div className="mt-1 sm:mt-2">
//                   <p className="font-medium text-sm sm:text-base">
//                     {quote.author}
//                   </p>
//                   <p className="text-xs sm:text-sm text-slate-700">
//                     {quote.role}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Left column – form */}
//         <div className="flex flex-col justify-items order-2 lg:order-1">
//           <div className="hidden lg:flex items-center gap-2 px- pt-">
//             <img src={QcopLogo} alt="QCOP Logo" className="w-36 h-auto" />
//           </div>

//           <div className="lg:hidden flex justify-center mt-4 mb-6">
//             <img src={QcopLogo} alt="QCOP Logo" className="w-32 h-auto" />
//           </div>

//           <div className="text-center mt-2 mb-6 lg:mb-4">
//             <h1 className="text-2xl sm:text-3xl font-semibold">Welcome Back</h1>
//             <p className="mt-1 sm:mt-2 text-sm sm:text-base text-slate-500">
//               Enter your details to continue
//             </p>
//           </div>

//           <form
//             onSubmit={handleSubmit}
//             className="mt-0 sm:mt-2 max-w-md w-full space-y-4 sm:space-y-5 mx-auto px-2 sm:px-0"
//           >
//             {/* User ID */}
//             <div>
//               <label
//                 htmlFor="userId"
//                 className="block text-sm font-medium text-slate-900"
//               >
//                 User ID
//               </label>
//               <input
//                 id="userId"
//                 value={userId}
//                 onChange={(e) => setUserId(e.target.value)}
//                 className="mt-1 w-full h-10 sm:h-12 rounded-lg border border-slate-300 px-2 sm:px-3 text-sm sm:text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
//                 placeholder="Enter your User ID"
//                 autoComplete="username"
//                 inputMode="text"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-slate-900"
//               >
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="mt-1 w-full h-10 sm:h-12 rounded-lg border border-slate-300 px-2 sm:px-3 pr-10 text-sm sm:text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
//                   placeholder="••••••••"
//                   autoComplete="current-password"
//                   inputMode="text"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword((s) => !s)}
//                   className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-slate-700"
//                 >
//                   {showPassword ? (
//                     <Icon.EyeOff className="h-4 sm:h-5 w-4 sm:w-5" />
//                   ) : (
//                     <Icon.Eye className="h-4 sm:h-5 w-4 sm:w-5" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Remember + Reset */}
//             <div className="flex items-center justify-between text-xs sm:text-sm">
//               <label className="inline-flex items-center gap-1 sm:gap-2 select-none">
//                 <input
//                   type="checkbox"
//                   className="h-3 w-3 sm:h-4 sm:w-4 rounded border-slate-300"
//                   checked={remember}
//                   onChange={(e) => setRemember(e.target.checked)}
//                 />
//                 <span className="text-slate-700">Remember me</span>
//               </label>
//               <a
//                 href="#!"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setIsResetOpen(true);
//                 }}
//                 className="text-sky-600 hover:underline"
//               >
//                 Forgot password?
//               </a>
//             </div>

//             {/* Captcha */}
//             <div className="flex items-center gap-3 flex-wrap">
//               <img
//                 src={captchaImg}
//                 alt="captcha"
//                 className="h-12 sm:h-14 rounded-lg border border-slate-300"
//               />
//               <div className="flex gap-2">
//                 <button
//                   type="button"
//                   onClick={() => setCaptcha(generateCaptcha())}
//                   className="p-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100"
//                 >
//                   <Icon.Refresh className="h-4 w-4" />
//                 </button>
//                 <button
//                   type="button"
//                   onClick={speakCaptcha}
//                   className="p-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100"
//                 >
//                   <Icon.Volume className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>
//             <input
//               value={captchaInput}
//               onChange={(e) => setCaptchaInput(e.target.value)}
//               className="mt-1 w-full h-10 sm:h-12 rounded-lg border border-slate-300 px-2 sm:px-3 text-sm sm:text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
//               placeholder="Enter captcha"
//             />

//             {error && <p className="text-red-600 text-sm">{error}</p>}

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={!canSubmit}
//               className="w-full flex justify-center items-center gap-2 bg-sky-600 text-white rounded-lg px-3 py-2 sm:py-3 font-semibold hover:bg-sky-700 disabled:opacity-50"
//             >
//               {loading ? <Icon.Spinner className="h-5 w-5" /> : "Sign in"}
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Modals */}
//       <ResetPassword
//         open={isResetOpen}
//         onClose={() => setIsResetOpen(false)}
//         onSuccess={() => setIsUpdatedOpen(true)}
//       />
//       <SuccessModal
//         open={isUpdatedOpen}
//         onClose={() => setIsUpdatedOpen(false)}
//         title="Password Updated!"
//         message="Your new password has been updated successfully."
//         buttonText="Back to Login"
//       />
//     </div>
//   );
// }

// ========================================

import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResetPassword from "./ResetPassword";
import UpdatePassword from "./UpdatePassword";
import QcopLogo from "../assets/Qcop-logo.png";
import BuildingImage from "../assets/Building-image.png";
import SuccessModal from "../components/SuccessMsg/SuccessModal";
import { loginApi } from "../api/authApi";

// -------- Captcha helpers --------
function generateCaptcha(length = 6) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
  let out = "";
  for (let i = 0; i < length; i++)
    out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

function drawCaptcha(text) {
  const canvas = document.createElement("canvas");
  const width = 380;
  const height = 70;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  const grd = ctx.createLinearGradient(0, 0, width, height);
  grd.addColorStop(0, "#f4f7ff");
  grd.addColorStop(1, "#e9f7ff");
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < 6; i++) {
    ctx.strokeStyle = `rgba(0,0,0,${0.2 + Math.random() * 0.2})`;
    ctx.lineWidth = 1 + Math.random() * 1.5;
    ctx.beginPath();
    ctx.moveTo(Math.random() * width, Math.random() * height);
    ctx.lineTo(Math.random() * width, Math.random() * height);
    ctx.stroke();
  }

  ctx.font = "bold 38px ui-sans-serif, system-ui";
  ctx.textBaseline = "middle";
  const spacing = width / (text.length + 2);
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const angle = (Math.random() - 0.5) * 0.6;
    ctx.save();
    ctx.translate(spacing * (i + 1.2), height / 2);
    ctx.rotate(angle);
    ctx.fillStyle = `rgba(0,0,0,${0.75 + Math.random() * 0.25})`;
    ctx.fillText(ch, 0, 0);
    ctx.restore();
  }

  for (let i = 0; i < 80; i++) {
    ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.15})`;
    ctx.beginPath();
    ctx.arc(
      Math.random() * width,
      Math.random() * height,
      Math.random() * 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }

  return canvas.toDataURL("image/png");
}

// -------- Icons --------
const Icon = {
  Eye: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  EyeOff: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M17.94 17.94A10.94 10.94 0 0112 20C5 20 1 12 1 12a21.71 21.71 0 015.06-6.94" />
      <path d="M10.58 10.58A3 3 0 0112 9a3 3 0 013 3 3 3 0 01-1.58 2.63" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ),
  Volume: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 010 14.14" />
      <path d="M15.54 8.46a5 5 0 010 7.07" />
    </svg>
  ),
  Refresh: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0114.13-3.36L23 10" />
      <path d="M20.49 15a9 9 0 01-14.13 3.36L1 14" />
    </svg>
  ),
  Spinner: (props) => (
    <svg
      viewBox="0 0 24 24"
      className={`animate-spin ${props.className || ""}`}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="4"
        fill="none"
      />
      <path
        d="M22 12a10 10 0 00-10-10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  ),
};

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaImg, setCaptchaImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isResetOpen, setIsResetOpen] = useState(false);
  const [isUpdatedOpen, setIsUpdatedOpen] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = sessionStorage.getItem("qcop.token");
  //   if (token) {
  //     navigate("/dashboard");
  //   }
  // }, [navigate]);

  useEffect(() => {
    setCaptchaImg(drawCaptcha(captcha));
  }, [captcha]);

  useEffect(() => {
    const saved = localStorage.getItem("qcop.remember");
    if (saved) {
      const data = JSON.parse(saved);
      setUserId(data.userId || "");
      setRemember(true);
    }
  }, []);

  const speakCaptcha = () => {
    const utter = new SpeechSynthesisUtterance(captcha.split("").join(" "));
    window.speechSynthesis.speak(utter);
  };

  const canSubmit = userId.trim() && password && captchaInput && !loading;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!userId.trim()) return setError("Please enter your User ID");
    if (!password) return setError("Please enter your password");
    if (!captchaInput) return setError("Please solve the captcha");
    if (captchaInput.trim().toLowerCase() !== captcha.toLowerCase()) {
      setError("Captcha does not match");
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
      return;
    }

    setLoading(true);
    try {
      const res = await loginApi({ userId: userId.trim(), password });

      if (res.ok && res.token) {
        sessionStorage.setItem("qcop.token", res.token);
        localStorage.setItem("qcop.user", JSON.stringify(res.user));

        if (remember)
          localStorage.setItem("qcop.remember", JSON.stringify({ userId }));
        else localStorage.removeItem("qcop.remember");

        navigate("/dashboard");
      } else {
        setError(res.error || "Unable to sign in");
        setCaptcha(generateCaptcha());
        setCaptchaInput("");
        sessionStorage.removeItem("qcop.token"); // ❌ clear invalid token
      }
    } catch {
      setError("Server error, please try again");
      sessionStorage.removeItem("qcop.token");
    } finally {
      setLoading(false);
    }
  };

  const quote = useMemo(
    () => ({
      text: "Success doesn’t come from what you do occasionally. It comes from what you do consistently.",
      author: "Marie Forleo",
      role: "Principal At HQ",
    }),
    []
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-sky-50 flex items-center overflow-x-hidden pb-safe">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Right column – image + quote */}
        <div className="relative order-1 lg:order-2 flex items-center">
          <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={BuildingImage}
              alt="Construction site"
              className="h-48 sm:h-64 md:h-96 lg:h-[680px] w-full object-cover"
            />
            <div className="absolute inset-x-2 sm:inset-x-4 bottom-2 sm:bottom-4 lg:bottom-auto lg:top-1/2 lg:translate-y-1/2">
              <div className="max-w-xl rounded-2xl bg-white/40 backdrop-blur-xl p-3 sm:p-6 shadow-lg">
                <p className="text-base sm:text-lg md:text-2xl font-semibold leading-snug">
                  “{quote.text}”
                </p>
                <div className="mt-1 sm:mt-2">
                  <p className="font-medium text-sm sm:text-base">
                    {quote.author}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700">
                    {quote.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Left column – form */}
        <div className="flex flex-col order-2 lg:order-1">
          <div className="hidden lg:flex items-center gap-2">
            <img src={QcopLogo} alt="QCOP Logo" className="w-36 h-auto" />
          </div>

          <div className="lg:hidden flex justify-center mt-4 mb-6">
            <img src={QcopLogo} alt="QCOP Logo" className="w-32 h-auto" />
          </div>

          <div className="text-center mt-2 mb-6 lg:mb-4">
            <h1 className="text-2xl sm:text-3xl font-semibold">Welcome Back</h1>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-slate-500">
              Enter your details to continue
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-0 sm:mt-2 max-w-md w-full space-y-4 sm:space-y-5 mx-auto px-2 sm:px-0"
          >
            {/* User ID */}
            <div>
              <label
                htmlFor="userId"
                className="block text-sm font-medium text-slate-900"
              >
                User ID
              </label>
              <input
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                onFocus={(e) =>
                  e.target.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  })
                }
                className="mt-1 w-full h-11 sm:h-12 rounded-lg border border-slate-300 px-3 text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Enter your User ID"
                autoComplete="username"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-900"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={(e) =>
                    e.target.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }
                  className="mt-1 w-full h-11 sm:h-12 rounded-lg border border-slate-300 px-3 pr-10 text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 min-w-[44px] min-h-[44px]"
                >
                  {showPassword ? (
                    <Icon.EyeOff className="h-5 w-5 text-slate-600" />
                  ) : (
                    <Icon.Eye className="h-5 w-5 text-slate-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember + Reset */}
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <label className="inline-flex items-center gap-2 select-none">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span className="text-slate-700">Remember me</span>
              </label>
              <a
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  setIsResetOpen(true);
                }}
                className="text-sky-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Captcha */}
            <div className="flex items-center gap-3 flex-wrap">
              <img
                src={captchaImg}
                alt="captcha"
                className="h-12 sm:h-14 rounded-lg border border-slate-300"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setCaptcha(generateCaptcha())}
                  className="p-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100"
                >
                  <Icon.Refresh className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={speakCaptcha}
                  className="p-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100"
                >
                  <Icon.Volume className="h-4 w-4" />
                </button>
              </div>
            </div>

            <input
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              onFocus={(e) =>
                e.target.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                })
              }
              className="mt-1 w-full h-11 sm:h-12 rounded-lg border border-slate-300 px-3 text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Enter captcha"
            />

            {error && <p className="text-red-600 text-sm">{error}</p>}

            {/* Submit */}
            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full flex justify-center items-center gap-2 bg-sky-600 text-white rounded-lg px-3 py-3 font-semibold hover:bg-sky-700 disabled:opacity-50 min-h-[44px]"
            >
              {loading ? <Icon.Spinner className="h-5 w-5" /> : "Sign in"}
            </button>
          </form>
        </div>
      </div>

      {/* Modals */}
      <ResetPassword
        open={isResetOpen}
        onClose={() => setIsResetOpen(false)}
        onSuccess={() => setIsUpdatedOpen(true)}
      />
      <SuccessModal
        open={isUpdatedOpen}
        onClose={() => setIsUpdatedOpen(false)}
        title="Password Updated!"
        message="Your new password has been updated successfully."
        buttonText="Back to Login"
      />
    </div>
  );
}
