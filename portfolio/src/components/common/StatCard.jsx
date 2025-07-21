// src/components/common/StatCard.jsx
import React from "react";
import useCounter from "../../hooks/useCounter";

const StatCard = ({ number, label, suffix = "", isAnimated }) => {
  const count = useCounter(number, 2000, isAnimated);

  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-cyan-400">
        {suffix === "K" ? `$${count}K` : `${count}${suffix}`}
      </div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
};

export default StatCard;
