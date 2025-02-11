// "use client";

// import { motion } from "framer-motion";

// const stairAnimation = {
//     initial: {
//         top: "0%"
//     },
//     animate: {
//         top: "100%"
//     },
//     exit: {
//         top: ["100%", "0%"]
//     },
// };


// const reverseIndex = (index: number) => {
//     const totalSteps = 6;
//     return totalSteps - index - 1;
// };

// const Stairs = () => {
//     return (
//         <>
//             {[...Array(6)].map((_, index) => {
//                 return (
//                     <motion.div
//                         key={index}
//                         variants={stairAnimation}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         transition={{
//                             duration: 0.4,
//                             ease: "easeInOut",
//                             delay: reverseIndex(index) * 0.1,
//                         }}
//                         className="h-full w-full bg-white relative"
//                     />
//                 );
//             })}
//         </>
//     );
// };


// export default Stairs;

"use client";

import { motion } from "framer-motion";

const transitionVariants = {
    initial: {
        x: "100%",
        width: "100%",
    },
    animate: {
        x: "0%",
        width: "0%",
    },
    exit: {
        x: ["0%", "100%"], // Transition from 0% to 100%"
        width: ["0%", "100%"], // Transition from 0% to 100%"
    },
};

const Flips = () => {
    return (
        <>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#1A1A1D]"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.2, duration: 0.6, ease: "easeInOut",
                }}
            ></motion.div>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#151515]"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.4, duration: 0.6, ease: "easeInOut",
                }}
            ></motion.div>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#1A1A1D]"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.6, duration: 0.6, ease: "easeInOut",
                }}
            ></motion.div>
        </>
    );
};

export default Flips;
