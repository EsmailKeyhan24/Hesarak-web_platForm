
import React from "react";

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <Icon className="w-9 h-9 text-DarkGray mb-3" />
      <h3 className="text-md font-ShabnamMedium mb-1 ">{title}</h3>
      <p className="text-gray-600 text-sm font-ShabnamLight">{description}</p>
    </div>
  );
}
