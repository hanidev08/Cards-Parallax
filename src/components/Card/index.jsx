"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Index = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
  number,
  skils,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh  + ${i * 110}px)`,
        }}
        className={styles.card}
      >
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2>{number}</h2>
          </div>
          <div className={styles.right}>
            <div className={styles.textContainer}>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <div className={styles.infoContainer}>
              <ul>
                <li>
                  <span>01</span>
                  {skils.one}
                </li>
                <li>
                  <span>02</span>
                  {skils.tow}
                </li>
                <li>
                  <span>03</span>
                  {skils.three}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
