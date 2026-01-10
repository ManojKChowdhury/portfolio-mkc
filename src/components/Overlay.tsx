import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to different opacity values for each section
  const section1Opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3],
    [1, 0.5, 0]
  );
  const section2Opacity = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.5, 0.6],
    [0, 1, 1, 0]
  );
  const section3Opacity = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.85, 1],
    [0, 1, 1, 0]
  );

  // Parallax transforms
  const section1Y = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const section2Y = useTransform(scrollYProgress, [0.25, 0.6], [50, -50]);
  const section3Y = useTransform(scrollYProgress, [0.55, 1], [50, -100]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-10 h-[500vh]"
    >
      {/* Section 1 - Center */}
      <motion.div
        style={{ opacity: section1Opacity, y: section1Y }}
        className="fixed inset-0 flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="mb-4 text-xl font-bold tracking-tight text-white md:text-8xl">
            Manoj Kumar Chowdhury
          </h1>
          <p className="text-xl font-light text-white/80 md:text-3xl">
            Fullstack Developer
          </p>
        </div>
      </motion.div>

      {/* Section 2 - Left Aligned */}
      <motion.div
        style={{ opacity: section2Opacity, y: section2Y }}
        className="fixed inset-0 flex items-center"
      >
        <div className="ml-8 max-w-2xl md:ml-20">
          <p className="text-4xl font-medium leading-tight text-white md:text-6xl">
            I build digital
            <br />
            experiences.
          </p>
        </div>
      </motion.div>

      {/* Section 3 - Right Aligned */}
      <motion.div
        style={{ opacity: section3Opacity, y: section3Y }}
        className="fixed inset-0 flex items-center justify-end"
      >
        <div className="mr-8 max-w-2xl text-right md:mr-20">
          <p className="text-4xl font-medium leading-tight text-white md:text-6xl">
            Bridging design
            <br />
            and engineering.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
