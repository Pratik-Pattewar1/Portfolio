import { AnimatePresence, Variants, motion } from "framer-motion";

export default function AnimatedLogo() {
  const strokeVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(31, 141, 147, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(31, 141, 147, 0)",
    },
  };

  const fillVariant: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  // Outer shell of P
  const outerPath =
    "M 100 400 L 100 50 L 260 50 Q 380 50 380 170 Q 380 290 260 290 L 180 290 L 180 400 Z";

  // Inner bowl cutout (counter-shape)
  const innerPath =
    "M 180 110 L 260 110 Q 310 110 310 170 Q 310 230 260 230 L 180 230 Z";

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 450 450"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* Fill layer — fades in after stroke completes */}
        <motion.path
          d={`${outerPath} M 180 110 L 260 110 Q 310 110 310 170 Q 310 230 260 230 L 180 230 Z`}
          fill="#1f8d93"
          stroke="none"
          fillRule="evenodd"
          variants={fillVariant}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            delay: 2.8,
            ease: "easeIn",
          }}
        />

        {/* Outer contour draw-on */}
        <motion.path
          d={outerPath}
          fill="none"
          stroke="#1f8d93"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={strokeVariant}
          initial="hidden"
          animate="visible"
          transition={{
            pathLength: { duration: 2.2, ease: [0.65, 0, 0.35, 1] },
            fill: { duration: 0 },
          }}
        />

        {/* Inner bowl draw-on (slight delay) */}
        <motion.path
          d={innerPath}
          fill="none"
          stroke="#1f8d93"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={strokeVariant}
          initial="hidden"
          animate="visible"
          transition={{
            pathLength: {
              duration: 1.4,
              ease: [0.65, 0, 0.35, 1],
              delay: 0.7,
            },
            fill: { duration: 0 },
          }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}