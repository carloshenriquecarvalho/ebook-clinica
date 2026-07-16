import Link from "next/link";
import React from "react";

const CHECKOUT_URL = "https://pay.kiwify.com.br/apX4xXO";

interface CtaButtonProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function CtaButton({ children, className = "", id }: CtaButtonProps) {
  return (
    <Link
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      id={id}
      className={`
        inline-flex items-center justify-center gap-2
        bg-[#F04F9B] hover:bg-[#D63384]
        text-white font-bold text-base md:text-lg
        px-8 py-4 rounded-full
        shadow-lg shadow-[#F04F9B]/40
        transform transition-all duration-200
        hover:scale-105 hover:shadow-xl hover:shadow-[#F04F9B]/50
        active:scale-100
        tracking-wide uppercase
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
