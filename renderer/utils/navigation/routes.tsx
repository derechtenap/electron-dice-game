type NavRoute = {
  label: string;
  href: string;
};

const ROUTES: NavRoute[] = [
  {
    label: "route.play",
    href: "/playing",
  },
  {
    label: "route.settings",
    href: "/settings",
  },
];

export default ROUTES;
