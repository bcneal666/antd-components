import { useEffect, useState } from "react";

const useWideScreen = (screenNum:number) => {

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > screenNum);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > screenNum);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenNum]);


  return {
    isWideScreen
  }
};

export { useWideScreen };
