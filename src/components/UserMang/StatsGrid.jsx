

// src/components/UserMang/StatsGrid.jsx
import StatsCard from "./StatsCard";

export default function StatsGrid() {
  const stats = [
    { title: "Total Users", value: "9", icon: "users", color: "blue" },
    { title: "New Users", value: "4", icon: "add", color: "green" },
    { title: "Active Users", value: "6", icon: "active", color: "purple" },
    { title: "Inactive Users", value: "3", icon: "banned", color: "red" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 py-4 sm:py-6">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
}
