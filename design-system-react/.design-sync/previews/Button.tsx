import { Button } from "@damontana/design-system-react";

export const Primary = () => <Button href="/contact">Book a call</Button>;

export const Secondary = () => (
  <Button variant="secondary" href="/portfolio">
    See my work
  </Button>
);

export const NoArrow = () => (
  <Button href="/about" arrow={false}>
    Learn more
  </Button>
);

export const Disabled = () => <Button disabled>Book a call</Button>;
