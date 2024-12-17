"use client";

import React, { useState } from "react";

type FilterState = "neutral" | "include" | "exclude";

export default function FilterRow() {
  // Manage the final state (included/excluded/neutral)
  const [filters, setFilters] = useState<FilterState[]>(
    Array(10).fill("neutral"),
  );

  // Manage the hover color
  const [hoverColor, setHoverColor] = useState<FilterState[]>(
    Array(10).fill("neutral"),
  );

  // Update final filter state on click
  const handleClick = (index: number, state: FilterState) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter, i) => (i === index ? state : filter)),
    );
  };

  // Update hover color when hovering the left or right side
  const handleMouseEnter = (index: number, type: FilterState) => {
    setHoverColor((prev) => prev.map((val, i) => (i === index ? type : val)));
  };
  // Reset hover color on mouse leave
  const handleMouseLeave = (index: number) => {
    setHoverColor((prev) =>
      prev.map((val, i) => (i === index ? "neutral" : val)),
    );
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex gap-4">
        {filters.map((filterState, index) => {
          // Determine background color based on hover
          let bgColor = "bg-gray-200";
          if (hoverColor[index] === "include") {
            bgColor = "bg-green-300";
          } else if (hoverColor[index] === "exclude") {
            bgColor = "bg-red-300";
          }

          return (
            <div
              key={index}
              className={`relative flex h-8 w-16 items-center justify-center rounded-full 
                transition-[width] duration-300 ease-in-out hover:w-32 ${bgColor}`}
            >
              {/* Label */}
              <span className="absolute text-black">Filter</span>

              {/* Left Half Overlay (Exclude) */}
              <div
                className="absolute left-0 top-0 h-full w-1/2"
                onMouseEnter={() => handleMouseEnter(index, "exclude")}
                onMouseLeave={() => handleMouseLeave(index)}
              ></div>

              {/* Right Half Overlay (Include) */}
              <div
                className="absolute right-0 top-0 h-full w-1/2"
                onMouseEnter={() => handleMouseEnter(index, "include")}
                onMouseLeave={() => handleMouseLeave(index)}
              ></div>

              {/* Actual Buttons */}
              <div className="absolute left-0 right-0 flex justify-between opacity-0 transition-opacity duration-300 hover:opacity-100">
                {/* Minus Button (Click sets exclude) */}
                <button
                  onClick={() => handleClick(index, "exclude")}
                  className="flex h-8 w-8 items-center justify-center rounded-l-full text-black hover:bg-red-200"
                >
                  −
                </button>

                {/* Plus Button (Click sets include) */}
                <button
                  onClick={() => handleClick(index, "include")}
                  className="flex h-8 w-8 items-center justify-center rounded-r-full text-black hover:bg-green-200"
                >
                  +
                </button>
              </div>

              {/* Current State Feedback */}
              {filterState !== "neutral" && (
                <span
                  className={`absolute -bottom-6 text-sm font-medium ${
                    filterState === "include"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {filterState === "include" ? "Included" : "Excluded"}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
