import React from "react";

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
  if (items.length === 0) return null; 

  return (
    <div className="relative border-l border-gray-300 pl-6">
      {items.map((item) => (
        <div key={item.id} className="mb-8 relative">
          <span className="absolute -left-[10px] top-2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white" />

          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.institution}</p>
            <p className="text-xs text-gray-400">{item.year}</p>
            {item.description && (
              <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationTimeline;
