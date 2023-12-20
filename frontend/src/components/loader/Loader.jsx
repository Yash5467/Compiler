import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader ease-linear rounded-full border-[5px] border-t-5 border-gray-400 border-t-blue-500 h-20 w-20 animate-spin"></div>
    </div>
  );
};

export default Loader;