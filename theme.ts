import { buildLegacyTheme } from "sanity";

const props = {
  "--lt-white": "#FFFFFF",
  "--lt-black": "#101112",
  "--lt-gtu-color": "#A31E23",
  "--lt-red": "#d03e2f",
  "--lt-yellow": "#fbd024",
  "--lt-green": "#0F9D58",
};

export const ltTheme=buildLegacyTheme({
  "--black": props["--lt-black"],
  "--white": props["--lt-white"],

  "--gray": "#8690a0",
  "--gray-base": "#8690a0",

  "--component-bg": props["--lt-black"],
  "--component-text-color": props["--lt-white"],

  "--brand-primary": props["--lt-gtu-color"],

  "--default-button-color": "#8690a0",
  "--default-button-primary-color": props["--lt-gtu-color"],
  "--default-button-success-color": props["--lt-green"],
  "--default-button-warning-color": props["--lt-yellow"],
  "--default-button-danger-color": props["--lt-red"],

  "--state-info-color": props["--lt-gtu-color"],
  "--state-success-color": props["--lt-green"],
  "--state-warning-color": props["--lt-yellow"],
  "--state-danger-color": props["--lt-red"],

  "--main-navigation-color": props["--lt-black"],
  "--main-navigation-color--inverted": props["--lt-white"],

  "--focus-color": props["--lt-gtu-color"],
});
