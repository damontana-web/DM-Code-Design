import { Avatar } from "@damontana/design-system-react";

const AVATAR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Crect width='100%25' height='100%25' fill='%23EA2295'/%3E%3C/svg%3E";

export const Ring = () => <Avatar style="ring" src={AVATAR} alt="Reviewer avatar" />;

export const Border = () => <Avatar style="border" src={AVATAR} alt="David Montana" />;

export const PlainCompact = () => <Avatar style="plain" size="compact" src={AVATAR} alt="Client avatar" />;

export const PlainLarge = () => <Avatar style="plain" size="large" src={AVATAR} alt="David Montana" />;
