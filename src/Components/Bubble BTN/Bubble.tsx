import { useEffect, useState } from "react";
import "./Bubble.css";
import { motion } from "framer-motion";
const Bubble = () => {
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
    <div
      style={{
        // position: isMobile ? "relative" : "absolute",
        padding: isMobile ? "5vw 0vw 0vw 10vw" : "5vw 0vw 0vw 0vw",
        display: "flex",
        flexDirection: "row",
        gap: isMobile ? "8vh" : "5vw",
        // top: isMobile ? "20vh" : "",
        // left: isMobile ? "vw" : "",
      }}
    >
      <motion.div
        initial={{ opacity: 0, transform: "translateY(-8vw)" }}
        whileInView={{ opacity: 1, transform: "translateY(0vw)" }}
        transition={{
          duration: 2,
          type: "spring",
          stiffness: 150,
          dumping: 15,
          delay: 0.5,
        }}
      >
        <motion.a
          initial={{
            opacity: 1,
          }}
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
            transition: {
              type: "spring",
              duration: 3,
              stiffness: 100,
              damping: 12,
              repeat: Infinity,
            },
          }}
          style={{
            //   position: isMobile ? "relative" : "absolute",
            //   top: isMobile ? "13vh" : "",
            //   left: isMobile ? "10vh" : "",
            width: isMobile ? "13vw" : "",
            height: isMobile ? "13vw" : "",
            fontSize: isMobile ? "3vw" : "",
          }}
          href="#"
          className="btn"
        >
          Hair Me
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, transform: "translateY(-2vw)" }}
        whileInView={{ opacity: 1, transform: "translateY(0vw)" }}
        transition={{
          duration: 2,
          type: "spring",
          stiffness: 150,
          dumping: 15,
          delay: 0.7,
        }}
      >
        <motion.a
          initial={{
            opacity: 1,
          }}
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
            transition: {
              type: "spring",
              duration: 4,
              stiffness: 100,
              damping: 12,
              repeat: Infinity,
            },
          }}
          style={{
            //   position: isMobile ? "relative" : "absolute",
            //   top: isMobile ? "" : "7vh",
            //   left: isMobile ? "" : "30vh",
            width: isMobile ? "20vw" : "",
            height: isMobile ? "20vw" : "",
            fontSize: isMobile ? "3vw" : "",
            //   marginLeft: isMobile ? "30vw" : "",
          }}
          href="#"
          className="btn-1"
        >
          View Resume
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Bubble;
