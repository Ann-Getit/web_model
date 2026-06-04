import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") return;
    if (!location.hash) return;

    const el = document.querySelector(location.hash);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location.pathname, location.hash]);

  return null;
}