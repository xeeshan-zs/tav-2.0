import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
