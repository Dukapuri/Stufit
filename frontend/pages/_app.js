// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';

// const pageTransition = {
//   type: "tween",
//   ease: "anticipate",
//   duration: 0.6,
// };

// function MyApp({ Component, pageProps }) {
//   const router = useRouter();
//   const [direction, setDirection] = useState('forward');

//   const pageVariants = {
//     initial: { x: direction === 'forward' ? "-100%" : "-100%" },
//     in: { x: 0 },
//     out: { x: direction === 'forward' ? "100%" : "-100%" },
//   };

//   useEffect(() => {
//     const handleRouteChange = (url, { shallow }) => {
//       if (shallow) {
//         setDirection('forward');
//       } else {
//         setDirection('backward');
//       }
//     };

//     router.events.on('routeChangeStart', handleRouteChange);
//     return () => {
//       router.events.off('routeChangeStart', handleRouteChange);
//     };
//   }, []);

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={router.route}
//         initial="initial"
//         animate="in"
//         exit="out"
//         variants={pageVariants}
//         transition={pageTransition}
//       >
//         <Component {...pageProps} />
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// export default MyApp;
import React from 'react';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;