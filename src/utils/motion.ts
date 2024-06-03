export const programmerImageVariants = {
   hidden: {
      y: -200,
      opacity: 0,
      transition: { duration: 0.5 },
   },

   show: {
      y: 0,
      opacity: 100,
      transition: { duration: 0.5 },
   },
};

export const typing = {
   hidden: {
      opacity: 0,
      y: 20,
   },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         type: "tween",
         ease: "easeIn",
      },
   },
};

export const textTypingStagger = {
   hidden: {
      opacity: 0,
   },
   show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: i * 0.1 },
   }),
};

export const technologyCardVariants = {
   hidden: {
      opacity: 0,
      y: 20,
      scale: 0,
   },
   show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 360,
      transition: {
         type: "tween",
         ease: "easeIn",
         duration: 0.1,
      },
   },
};

export const technologyListStagger = {
   hidden: {
      opacity: 0,
   },
   show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
   }),
};
