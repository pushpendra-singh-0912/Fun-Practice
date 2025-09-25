

// =============================

// src/components/UserMang/StatsCard.jsx
import { Users, UserPlus, UserCheck, Ban } from "lucide-react";

const icons = {
  users: Users,
  add: UserPlus,
  active: UserCheck,
  banned: Ban,
};

export default function StatsCard({ title, value, icon, color }) {
  const Icon = icons[icon];

  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between bg-${color}-100 border-l-4 border-${color}-500 text-${color}-800 p-4 sm:p-5 rounded-2xl shadow-sm`}
    >
      <div className="text-center sm:text-left mb-2 sm:mb-0">
        <h3 className="text-sm sm:text-base font-medium">{title}</h3>
        <p className="text-xl sm:text-2xl font-bold">{value}</p>
      </div>
      <div className={`p-3 bg-${color}-200 rounded-full`}>
        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
    </div>
  );
}

