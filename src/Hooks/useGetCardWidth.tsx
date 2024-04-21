import { useState, useEffect } from "react";
const CARDS_ON_ROW = 7;

function useGetCardSize() {
  const cardOnRight = window.screen.width > 768;

  const [cardSize, setCardSize] = useState({
    cardOnRight: false,
    width: window.screen.width / CARDS_ON_ROW,
    height: window.screen.height / CARDS_ON_ROW,
  });

  useEffect(() => {
    const updateCardSize = () => {
      setCardSize({
        cardOnRight: window.screen.width < 768,
        width: window.screen.width / CARDS_ON_ROW,
        height: window.screen.height / CARDS_ON_ROW,
      });
    };
    window.addEventListener("resize", updateCardSize);
    return () => {
      window.removeEventListener("resize", updateCardSize);
    };
  }, []);
  console.log(window.screen.height, "card", cardSize);

  return cardSize;
}

export default useGetCardSize;
