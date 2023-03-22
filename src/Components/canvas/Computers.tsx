import { useEffect, useState } from "react";
import { pc } from "../../Assets";
import { motion } from "framer-motion";
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:450px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <motion.div
        initial={{
          opacity: 1,
          transform: "scale(0)",
        }}
        whileInView={{
          opacity: 1,
          transform: "scale(1)",
          transition: {
            type: "spring",
            stiffness: 50,
            damping: 10,
            delay: 0.1,
            duration: 5,
          },
        }}
      style={{
        // transform: isMobile ? "scale(6)" : "",
        //   marginTop: isMobile ? "4vh" : "2vw",
        //   marginLeft: isMobile ? "0vh" : "7vw",
        display: isMobile ? "content" : "flex",
        width: isMobile ? "90%" : "",
        left: isMobile ? "1rem" : "",
      }}
    >
      <motion.img
        initial={{
          opacity: 1,
          // transform: "scale(0)",
        }}
        animate={{
          // opacity: 1,
          y: [0, 10, 0],
          scale: [1, 0.98, 1],
          transition: {
            type: "spring",
            duration: 4,
            stiffness: 100,
            damping: 12,
            repeat: Infinity,
          },
        }}
        alt="pc"
        style={{
          // transform: isMobile ? "scale(6)" : "",
          //   marginTop: isMobile ? "4vh" : "2vw",
            marginLeft: isMobile ? "0vh" : "3vw",
          position: isMobile ? "absolute" : "relative",
          width: isMobile ? "90%" : "90%",
          left: isMobile ? "1rem" : "",
        }}
        src={pc}
      />
    </motion.div>
  );
};

export default ComputersCanvas;
