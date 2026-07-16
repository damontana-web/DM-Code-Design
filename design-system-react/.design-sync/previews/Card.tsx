import { Card } from "@damontana/design-system-react";

const IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%232A3A8F'/%3E%3C/svg%3E";
const AVATAR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Crect width='100%25' height='100%25' fill='%23EA2295'/%3E%3C/svg%3E";

export const PortfolioSmall = () => (
  <Card
    variant="portfolioSmall"
    href="#"
    imageSrc={IMG}
    imageAlt="E-commerce platform screenshot"
    description="E-commerce platform redesign"
  />
);

export const PortfolioWide = () => (
  <Card
    variant="portfolioWide"
    href="#"
    imageSrc={IMG}
    imageAlt="SaaS dashboard screenshot"
    description="SaaS dashboard overhaul"
  />
);

export const Blog = () => (
  <Card
    variant="blog"
    href="#"
    imageSrc={IMG}
    imageAlt="Blog post cover"
    title="Why fast websites still lose customers"
    description="Speed isn't the whole story — here's what actually moves conversion."
    authorName="David Montana"
    authorImageSrc={AVATAR}
    readTimeMinutes={6}
  />
);

export const Insight = () => (
  <Card
    variant="insight"
    href="#"
    imageSrc={IMG}
    imageAlt="Insight cover"
    title="Design systems pay for themselves"
    description="A short case for investing early, before the rebuild you didn't budget for."
  />
);

export const Related = () => (
  <Card variant="related" href="#" imageSrc={IMG} imageAlt="Related post cover" title="Five signs your site needs a rebuild" />
);

export const BlogFeatured = () => (
  <Card
    variant="blogFeatured"
    href="#"
    imageSrc={IMG}
    imageAlt="Featured post cover"
    title="Why fast websites still lose customers"
    authorName="David Montana"
    authorImageSrc={AVATAR}
    ctaLabel="Book a call"
    ctaHref="/contact"
  />
);
