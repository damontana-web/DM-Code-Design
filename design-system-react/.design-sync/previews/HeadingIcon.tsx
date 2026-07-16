import { HeadingIcon } from "@damontana/design-system-react";

// Checkmark-in-circle — a stand-in brand icon path (Pixelarticons-style usage).
const CHECK_D = "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.2 14.4-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7Z";

export const Inline = () => (
  <p style={{ fontSize: "1.5rem", fontWeight: 500, color: "#374151" }}>
    <HeadingIcon d={CHECK_D} />
    What I Do
  </p>
);

export const FlexAlign = () => (
  <div style={{ display: "flex", alignItems: "center", fontSize: "1.5rem", fontWeight: 500, color: "#374151" }}>
    <HeadingIcon d={CHECK_D} layout="flexAlign" />
    <span style={{ marginLeft: "0.5rem" }}>Fast turnaround</span>
  </div>
);

export const Centered = () => (
  <div style={{ textAlign: "center", fontWeight: 700 }}>
    <HeadingIcon d={CHECK_D} size="2rem" layout="centered" color="#1A468E" />
    Starter plan
  </div>
);
