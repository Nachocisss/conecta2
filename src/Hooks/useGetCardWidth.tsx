import { useState, useEffect } from "react";

function useGetCardSize() {
  const cardOnRight = window.screen.width > 768;
  const marginCards = 3 * 2 * 7;
  const marginTotal = cardOnRight ? marginCards + 260 : marginCards + 360;

  const [cardSize, setCardSize] = useState({
    isWidth: false,
    width: window.screen.width / 7,
    height: window.screen.height / 7,
  });

  useEffect(() => {
    const updateCardSize = () => {
      setCardSize({
        isWidth: cardSize.width < cardSize.height,
        width: window.screen.width / 7,
        height: window.screen.height / 7,
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
