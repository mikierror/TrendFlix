
import React from 'react';

const Dropdown = ({ title, options, category }) => {
  function handledata(e){
    category(e.target.value)
    
  }
  return (
    <div className="relative w-48 group">
      <label className="block text-sm text-[#07E2F3] font-semibold mb-1 pl-1">
        {title}
      </label>
      <div className="relative">
        <select
          onChange={(e)=>handledata(e)}
          className="w-full h-11 bg-slate-900 text-white pl-4 pr-10 py-2 rounded-lg border border-zinc-700 hover:border-[#07E2F3] focus:outline-none focus:ring-2 focus:ring-[#07E2F3] transition-all appearance-none"
        >
          {options.map((opt, i) => (
            <option key={i} value={opt} className="bg-slate-900 text-white">
              {opt.toUpperCase()}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#07E2F3]">
          <i className="ri-arrow-down-s-line text-lg"></i>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
