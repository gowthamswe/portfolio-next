"use client";

import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";

interface Props {
  email: string;
}

export default function CopyEmailButton({ email }: Props) {
  const [tooltipText, setTooltipText] = useState(email);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setTooltipText("Email copied!");
    } catch {
      setTooltipText("Copy failed — " + email);
    }
    setTimeout(() => setTooltipText(email), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy email address ${email}`}
      className="relative group flex items-center text-[#b3b3b3] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
    >
      <AiOutlineMail size={24} />
      <span
        role="tooltip"
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity pointer-events-none"
      >
        {tooltipText}
      </span>
    </button>
  );
}
