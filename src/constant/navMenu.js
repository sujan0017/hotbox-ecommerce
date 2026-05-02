import { ABOUT_ROUTE, CONTACT_ROUTE, HOME_ROUTE, PRODUCT_ROUTE } from "./route";

const navMenu = [
  {
    title: "Home",
    href: `${HOME_ROUTE}`,
  },
  {
    title: "Products",
    href: `/${PRODUCT_ROUTE}`,
  },

  {
    title: "About",
    href: `/${ABOUT_ROUTE}`,
  },
  {
    title: "Contact",
    href: `/${CONTACT_ROUTE}`,
  },

];

export { navMenu };
