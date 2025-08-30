export default function StatusBadge({ status }) {
  const statusColors = {
    CONFIRMED: "bg-green-500 text-white",
    REJECTED: "bg-red-500 text-white",
    NEW: "bg-blue-500 text-white",
    "RE-OPEN": "bg-yellow-400 text-black",
  };

  return (
    <span
      className={`px-3 py-1 rounded-md text-xs font-semibold ${
        statusColors[status] || "bg-gray-300"
      }`}
    >
      {status}
    </span>
  );
}
