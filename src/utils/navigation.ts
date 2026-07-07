// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Work",
    links: [
      { name: "Portfolio", url: "/products" },
      { name: "Services", url: "/services" },
      { name: "Blog", url: "/blog" },
    ],
  },
  {
    section: "Get in touch",
    links: [
      { name: "Contact", url: "/contact" },
      { name: "About", url: "#" },
    ],
  },
];

export default {
  navBarLinks,
  footerLinks,
};
