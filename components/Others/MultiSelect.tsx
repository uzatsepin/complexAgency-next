import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, selectedOptions, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    if (selectedOptions.includes(value)) {
      onChange(selectedOptions.filter(option => option !== value));
    } else {
      onChange([...selectedOptions, value]);
    }
  };

  return (
    <div className="relative w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="block appearance-none w-full bg-zinc-800 border border-[#ffffff]/20 py-4 px-6 pr-8 rounded-full leading-tight focus:outline-none focus:shadow-outline cursor-pointer hover:border-[#2CEEC2] transition-all duration-300 focus:border-[#2CEEC2] focus:shadow-shadowInput"
      >
        <div className="flex flex-wrap gap-1">
          {selectedOptions.length > 0 ? (
            options
              .filter(option => selectedOptions.includes(option.value))
              .map(option => (
                <span key={option.value} className="bg-[#2CEEC2]/40 text-white px-2 py-1 rounded flex items-center gap-1">
                  {option.label}
                  <Icon icon="material-symbols:check" className="w-5 h-5" />
                </span>
              ))
          ) : (
            <span className="text-gray-500">{placeholder}</span>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-30 mt-1 w-full bg-zinc-800 border border-[#ffffff]/20 rounded-xl shadow-lg py-2 max-h-32 overflow-auto">
          {options.map(option => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="px-4 py-2 cursor-pointer hover:bg-[#2CEEC2]/20 flex justify-between gap-2 items-center"
            >
              {option.label}
              {selectedOptions.includes(option.value) && <Icon icon="material-symbols:check" className="w-6 h-6 text-[#2CEEC2]" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
