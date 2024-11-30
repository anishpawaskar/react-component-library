import { useEffect, useState } from "react";

export const useGetScreenSize = () => {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleScreenSize = () => {
    setScreen((prevScreenSize) => ({
      ...prevScreenSize,
      width: window.innerWidth,
      height: window.innerHeight,
    }));
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenSize);

    handleScreenSize();
    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  return screen;
};
