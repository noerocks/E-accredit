import { useCallback, useRef } from "react";

export function useDebounceCallback(
  fn: (...args: any[]) => void,
  delay: number
) {
  const ref = useRef<NodeJS.Timeout | null>(null);
  const debouncedCallback = useCallback(
    (...args: any[]) => {
      if (ref.current) clearTimeout(ref.current);
      ref.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [fn, delay]
  );
  return debouncedCallback;
}
