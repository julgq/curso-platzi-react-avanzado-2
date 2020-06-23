import { useEffect, useState, useRef } from "react";

export function useNearScreen() {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    });
  });

  // el show nos dice si tenemos que mostrar si es que esta en el viewport y el segundo es la referencia.
  return [show, element];
}
