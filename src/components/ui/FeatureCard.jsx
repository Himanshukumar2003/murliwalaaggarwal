import { ReactNode } from "react";

const FeatureCard = ({
  icon,
  title,
  description,
  subdescription,
  delay = 0,
}) => {
  return (
    <div
      className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-green-300 transition-all duration-500 hover:shadow-lg hover:shadow-green-100 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Decorative gradient background */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Icon container */}
        <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6 animate-float">
          <div className="text-green-700">{icon}</div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-2">{description}</p>
        <p className="text-sm text-gray-500 leading-relaxed">
          {subdescription}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
