import { motion } from "framer-motion";

export function TextReveal({
  text,
  className = "",
  as: Tag = "h1",
  delay = 0,
  stagger = 0.06,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="mr-[0.25em] inline-block"
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: (custom: number) => ({
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.5,
                delay: delay + custom * stagger,
                ease: [0.16, 1, 0.3, 1],
              },
            }),
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
