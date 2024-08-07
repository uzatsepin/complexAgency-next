import React from 'react';
import { Icon } from "@iconify/react";

function AccordionItem({ title, content, isOpen, toggleAccordion }: {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  toggleAccordion: () => void;
}) {
  return (
    <div className="border border-[#2EEEC2] rounded-3xl mb-2 overflow-hidden p-2 lg:p-4">
      <div
        className="p-2 cursor-pointer flex justify-between items-center text-gray transition-colors duration-300"
        onClick={toggleAccordion}
      >
        <h2 className={`text-md lg:text-xl ${isOpen ? 'font-bold text-[#2EEEC2]': 'font-normal'}`}>{title}</h2>
        <Icon
          icon="raphael:arrowup"
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-2 text-lg">{content}</div>
      </div>
    </div>
  );
}

export default AccordionItem;