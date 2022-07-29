import { useLayoutEffect, useState } from "react";

const useBreakpointValue = (args) => {
  const [value, setValue] = useState(args.base);

  useLayoutEffect(() => {
    const updateValue = () => {
      const width = window.innerWidth;
      if (Object.hasOwn(args, "mobile")) {
        setValue(width < 768 ? args.mobile : args.base);
      } else if (Object.hasOwn(args, "tablet")) {
        setValue(768 <= width && width < 1024 ? args.tablet : args.base);
      } else if (Object.hasOwn(args, "desktop")) {
        setValue(width >= 1024 ? args.desktop : args.base);
      }
    };

    updateValue();
    window.addEventListener("resize", updateValue);
    return () => window.removeEventListener("resize", updateValue);
  }, [args]);

  return value;
};

export default useBreakpointValue;
