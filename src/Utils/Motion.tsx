export const fadeIn = {
  hidden: {
    opacity: 0,
    x: -0,
    y: -100,
  },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { staggerChildren: 0.13, delayChildren: 0.2 * i },
  }),
};

export const child = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 110,
    },
  },
  hidden: {
    opacity: 0,
    x: -20,
    y: -100,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};
export const swing = {
  visible: {
    y: [0, -13, 0],
    scale: [1, 1.05, 1],
    transition: {
      type: "spring",
      duration: 4,
      stiffness: 100,
      damping: 12,
      repeat: Infinity,
    },
  },
};
