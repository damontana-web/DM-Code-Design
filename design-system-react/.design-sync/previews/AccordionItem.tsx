import { AccordionItem } from "@damontana/design-system-react";

export const Collapsed = () => (
  <AccordionItem
    question="How long does a typical project take?"
    answer="Most sites ship in 4-6 weeks, depending on scope."
  />
);

export const OpenByDefault = () => (
  <AccordionItem
    defaultOpen
    question="Do you work with clients outside the US?"
    answer="Yes — most of my work is fully remote, across time zones."
  />
);
