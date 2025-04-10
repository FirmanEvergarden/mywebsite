import React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  isError?: boolean;
  isSuccess?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  children, 
  language = 'javascript',
  isError = false,
  isSuccess = false
}) => {
  let bgClass = 'bg-black text-gray-300 border border-gray-700';
  
  if (isError) {
    bgClass = 'bg-red-900/50 text-red-200 border border-red-700';
  } else if (isSuccess) {
    bgClass = 'bg-green-900/50 text-green-200 border border-green-700';
  }
  
  return (
    <div className={`code-block ${bgClass} p-4 rounded-lg font-mono text-sm overflow-x-auto max-w-full`}>
      <div className="break-all whitespace-pre-wrap">{children}</div>
    </div>
  );
};

export default CodeBlock;
