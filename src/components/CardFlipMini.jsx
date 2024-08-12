import { useState } from "react";
import { motion } from "framer-motion";

const CardFlipMini = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      className="flip-card w-[75px] h-[100px] rounded-md"
      onClick={handleFlip}
    >
      <motion.div
        className="flip-card-inner w-[100%] h-[100%]"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-gray-600 rounded-lg p-4"
          style={{ backgroundImage: `url(${item.frontImage})` }}
        >
        </div>

        <div
          className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-gray-600 rounded-lg p-4"
          style={{ backgroundImage: `url(${item.backImage})` }}
        >

        </div>
      </motion.div>
    </div>
  );
};

export default CardFlipMini;
