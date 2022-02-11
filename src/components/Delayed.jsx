import { useState, useEffect } from "react";

const Delayed = ({ children, delay, loader }) => {
 
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    var timer = setTimeout(() => {
      setIsShown(true);
    }, delay);

    return () => {clearTimeout(timer);}

  }, [delay]);

  return isShown ? children : loader;
}

export default Delayed