import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TYPED_STRINGS = [
  "I'm a Software Developer with<br/>a strong background in mathematics and<br/>a passion for AI.",
];

export function useTyped() {
  const typedRef = useRef(null);

  useEffect(() => {
    if (!typedRef.current) return undefined;

    const typed = new Typed(typedRef.current, {
      strings: TYPED_STRINGS,
      typeSpeed: 20,
      backSpeed: 10,
      loop: false,
      backDelay: 1000,
      contentType: 'html',
    });

    return () => typed.destroy();
  }, []);

  return typedRef;
}
