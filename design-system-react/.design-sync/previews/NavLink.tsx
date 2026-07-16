import { NavLink } from "@damontana/design-system-react";

export const Default = () => <NavLink href="/services">Services</NavLink>;

export const Active = () => (
  <NavLink href="/about" active>
    About
  </NavLink>
);
