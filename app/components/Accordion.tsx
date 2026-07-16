"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white border border-[#F7A8C8]/40 rounded-2xl overflow-hidden shadow-sm"
        >
          <button
            id={`faq-item-${i}`}
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group cursor-pointer"
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-[#2F2F2F] text-base md:text-lg leading-snug">
              {item.question}
            </span>
            <span
              className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#F4F4F6] flex items-center justify-center transition-transform duration-300 ${
                openIndex === i ? "rotate-45 bg-[#F04F9B] text-white" : "text-[#D63384]"
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3v10M3 8h10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="px-6 pb-5 text-[#2F2F2F]/80 leading-relaxed text-sm md:text-base">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
