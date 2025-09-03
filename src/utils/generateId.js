// utils/generateId.js
export function generateId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID(); // ✅ modern browsers
  }

  // Fallback for older browsers
  return "id-" + Math.random().toString(36).substr(2, 9);
}
