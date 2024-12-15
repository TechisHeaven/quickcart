export const getSlidesToShow = (
  options = { large: 3, medium: 2, small: 1 }
) => {
  const windowWidth = window.innerWidth;
  const largeBreakpoint = 1280;
  const mediumBreakpoint = 720;

  if (windowWidth >= largeBreakpoint) {
    return options.large; // If width >= 1280px, return the large value
  } else if (windowWidth >= mediumBreakpoint) {
    return options.medium; // If width >= 720px, return the medium value
  } else {
    return options.small; // Otherwise, return the small value
  }
};
