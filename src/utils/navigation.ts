// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Portfolio", url: "/products" },
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
// An object of links for social icons
const socialLinks = {
  behance: "https://www.behance.net/damontana",
  instagram: "https://www.instagram.com/damontana.ideas",
  dribbble: "https://dribbble.com/damontana",
  linkedin: "https://www.linkedin.com/in/damontana/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
