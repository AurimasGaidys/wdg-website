"use client";

import { useState } from "react";

interface FaqCellProps {
  question: string;
  answers: string[];
}

export const FaqCell = ({ question, answers }: FaqCellProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <h2 className="flex justify-center w-full">
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-[#2E2924] my-[10px] border border-[#BFBFBF] gap-3 max-w-[790px] hover:bg-gray-100"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
        >
          <span>{question}</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={open ? "w-full max-w-[790px]" : "hidden"}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-5 border border-gray-200">
          {answers.map((answer, index) => (
            <p key={index} className="mb-2 text-[#2E2924]">
              {answer}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
