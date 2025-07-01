"use client";

import { useState } from "react";

const GroupSizeStep = ({ groupData, updateGroupData, nextStep }) => {
  const [selectedSize, setSelectedSize] = useState(groupData.groupSize || 2);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    const clients = Array.from({ length: size }, (_, index) => ({
      id: index + 1,
      name: `Person ${index + 1}`,
      services: [],
      staff: null,
    }));

    updateGroupData({
      groupSize: size,
      clients: clients,
      sameServices: null,
    });
  };

  const handleNext = () => {
    nextStep();
  };

  return (
    <div className="text-center">
      <h2 className="text-xl sm:text-2xl font-bold mb-2">Select Group Size</h2>
      <p className="text-gray-800 mb-6">
        Choose how many people will be in your group
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        {[2, 3, 4, 5].map((size) => (
          <button
            key={size}
            onClick={() => handleSizeSelect(size)}
            className={`
        px-4 py-5 rounded-xl border-2 text-center transition-all duration-200
        ${
          selectedSize === size
            ? "border-cream bg-cream text-cream-700"
            : "border-gray-200 hover:border-cream-300 text-gray-700"
        }
      `}
          >
            <div className="text-xl sm:text-2xl font-bold mb-1">{size}</div>
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="bg-cream-600 hover:bg-cream-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 mt-3"
      >
        Continue with {selectedSize} People
      </button>
    </div>
  );
};

export default GroupSizeStep;
