import { useEffect, useRef } from "react";

export let useClickOutside = (handle) => {
  let menuRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        document.body.style.overflow = "scroll";
        handle();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return menuRef;
};
