import React from "react";
import { educationData } from "../constants/Ulity";

type TimelineItem = {
  id: number;
  title: string;
  institution: string;
  year: string;
  description?: string;
};

interface EducationTimelineProps {
  items?: TimelineItem[];
}

const EducationTimeline: React.FC<EducationTimelineProps> = ({ items = [] }) => {
  if (items.length === 0) items = educationData;

  return (
    <>
      <h2>Education TimeLine</h2>
      <div className="relative border-l-0 py-6">
        <div className="relative mx-auto w-full max-w-3xl">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2" />

          {items.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={item.id}
                className={`mb-8 flex w-full items-center justify-${isLeft ? "start" : "end"} relative`}
              >
                <span className="absolute left-1/2 top-3 w-4 h-4 rounded-full bg-blue-500 border-2 border-white transform -translate-x-1/2" />

                <div
                  className={`w-5/12 ${isLeft ? "text-right pr-6" : "text-left pl-6"}`}
                >
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.institution}</p>
                  <p className="text-xs text-gray-400">{item.year}</p>
                  {item.description && (
                    <p className="mt-1 text-gray-600 text-sm">{item.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EducationTimeline;
