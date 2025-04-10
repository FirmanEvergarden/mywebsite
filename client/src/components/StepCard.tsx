import React from 'react';

interface StepCardProps {
  number: number;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, children, className = '' }) => {
  return (
    <div className={`bg-gray-800 rounded-xl shadow-sm hover:shadow-md p-6 step-card section-content border border-gray-700 hover:border-primary ${className}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold mr-4">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
};

export default StepCard;
