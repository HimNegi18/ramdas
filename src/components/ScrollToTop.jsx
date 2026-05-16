import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This scrolls the window to the top-left corner
    window.scrollTo(0, 0);
  }, [pathname]); // This runs every time the path changes

  return null;
};

export default ScrollToTop;