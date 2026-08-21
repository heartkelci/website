export const SITE_TITLE: string = "Kelci Heart — F-ing WILD Alchemy";
export const SITE_DESCRIPTION: string =
  "Thrive guide, sacred bodyworker, and intuitive mentor devoted to helping you reclaim your sensual power, self-love, and soul freedom.";

export interface NavItem {
  label: string;
  href: string;
}
export const SITE_NAVIGATION: Array<NavItem> = [
  { label: "Home", href: "/" },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "Heart to Heart", href: "/heart-to-heart" },
];
