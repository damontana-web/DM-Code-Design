import { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
  /** Uncontrolled initial state; matches AccordionItem.astro's `first` prop (first item defaults open). */
  defaultOpen?: boolean;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="pb-3 pt-6">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group inline-flex w-full items-center justify-between gap-x-3 text-balance rounded-lg pb-3 text-start font-bold text-neutral-800 outline-hidden ring-zinc-500 transition hover:text-neutral-500 focus-visible:ring-3 dark:text-neutral-200 dark:ring-zinc-200 dark:hover:text-neutral-400 dark:focus:outline-hidden md:text-lg"
      >
        {question}
        <ChevronIcon open={open} />
      </button>
      <div className={open ? "w-full overflow-hidden transition-[height] duration-300" : "hidden"}>
        <p className="text-pretty text-neutral-600 dark:text-neutral-400">{answer}</p>
      </div>
    </div>
  );
}
