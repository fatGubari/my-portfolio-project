// feame motion
import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: "100%",
    with: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};
const Transition = () => {
  return (
    <>
      {/* one */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-indigo-950"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      >
      </motion.div>

      {/* two */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-indigo-950"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      >
      </motion.div>

      {/* three */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-violet-900"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      >
      </motion.div>
    </>
  );
};

export default Transition;
