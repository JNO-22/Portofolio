import { useEffect, useState } from "react";

export const useScrollDirection = (threshold = 100, debounceDelay = 100) => {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let timeoutId:  number;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) return;

      const newDirection = scrollY > lastScrollY ? "down" : "up";
      setScrollDir(newDirection);
      setLastScrollY(scrollY);
    };

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateScrollDirection, debounceDelay);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, threshold, debounceDelay]);

  return scrollDir;
};
