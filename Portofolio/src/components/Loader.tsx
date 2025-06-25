import { useEffect, useState } from "react";
import { LazyMotion ,m , domAnimation , AnimatePresence } from "motion/react";

const sliderVariants = {
  initial: { y: 0 },
  exit: { y: "-100%" , borderRadius: "75%" , scale: 0.6 },
};

export default function Loader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(false), 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
    <AnimatePresence>
      {showLoader && (
        <m.div
          key="slider-loader"
          className="fixed inset-0 bg-[#141414] z-100"
          variants={sliderVariants}
          initial="initial"
          exit="exit"
          transition={{ duration: 0.75, ease: "circOut" }}
        ></m.div>
      )}
    </AnimatePresence>
    </LazyMotion>
  );
}
