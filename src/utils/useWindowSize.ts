export function useWindowSize() {
  if (typeof window === "undefined") {
    return { width: 0, height: 0 }; // Default for server-side rendering.
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}
