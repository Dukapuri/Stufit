import React from "react";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, x: "100%" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "-100%" },
  backOut: { opacity: 0, x: "100%" },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.6,
};

const Nextpage = () => {

  const router = useRouter();
  const [goingBack, setGoingBack] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setGoingBack(true);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit={goingBack ? "backOut" : "out"}
      variants={pageVariants}
      transition={pageTransition}
    >
    <div className="a">
      <h1>하승진바보</h1>
    </div>
    </motion.div>
  );
}

export default Nextpage;