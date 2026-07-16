import type { ReactNode } from "react";
import { AnnouncementBanner } from "@damontana/design-system-react";

const AVATAR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Crect width='100%25' height='100%25' fill='%23EA2295'/%3E%3C/svg%3E";

// AnnouncementBanner is `position: fixed` (it's a viewport-docked bottom pill in
// the real site). A `transform` on this wrapper gives fixed descendants a local
// containing block instead, so the capture actually sees it in the card.
const Viewport = ({ children }: { children: ReactNode }) => (
  <div style={{ position: "relative", width: 600, height: 300, overflow: "hidden", transform: "scale(1)", background: "#111" }}>
    {children}
  </div>
);

export const Default = () => (
  <Viewport>
    <AnnouncementBanner
      title="Currently booking new projects for Q3."
      buttonLabel="Book a call"
      href="/contact"
      avatarSrc={AVATAR}
      avatarAlt="David Montana"
    />
  </Viewport>
);

export const NoTitle = () => (
  <Viewport>
    <AnnouncementBanner buttonLabel="Get in touch" href="/contact" avatarSrc={AVATAR} avatarAlt="David Montana" />
  </Viewport>
);
