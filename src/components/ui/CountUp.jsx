import { useEffect, useState } from "react";

export default function AnimatedCountUp({
  end,
  duration = 2000,
  suffix = "",
  decimals = 0,
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setValue(start);
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}