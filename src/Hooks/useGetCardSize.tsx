import { useState, useEffect } from "react";
const CARDS_ON_ROW = 7;

function useGetCardSize() {
  const cardOnRight = window.screen.width > 768;

  const [cardSize, setCardSize] = useState({
    width: window.screen.width / CARDS_ON_ROW,
    height: window.screen.height / CARDS_ON_ROW,
  });

  useEffect(() => {
    const updateCardSize = () => {
      setCardSize({
        width: window.screen.width / CARDS_ON_ROW,
        height: window.screen.height / CARDS_ON_ROW,
      });
    };
    window.addEventListener("resize", updateCardSize);
    return () => {
      window.removeEventListener("resize", updateCardSize);
    };
  }, []);
  return cardSize;
}

export default useGetCardSize;
