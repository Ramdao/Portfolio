import { motion } from "framer-motion";
import { SKILLS } from "../data";
import { useRef } from "react";
import { useInView } from "framer-motion"; // Import useInView

export default function Skills() {
  // Create a ref for the skills section
  const ref = useRef(null);
  // Track whether the section is in view
  const isInView = useInView(ref, { triggerOnce: false, margin: "-30px" });

  return (
    <motion.div
      ref={ref} // Attach ref to the container
      initial="hidden"
      animate={isInView ? "show" : "hidden"} // Trigger animation whenever it's in view
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3, // Delay between each child element
          },
        },
      }}
    >
      {SKILLS.map((conceptItem, index) => (
        <motion.div
          key={index}
          className="skills"
          variants={{
            hidden: { opacity: 0, x: -50 },
            show: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1 }}
        >
          <img src={conceptItem.image} alt={conceptItem.skills} className="skill-icon" />
          <span>{conceptItem.skills}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
