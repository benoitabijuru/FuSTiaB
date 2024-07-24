'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from './motion';

type TextProps = {
    title:string,
    textStyles:string,
}

export const TypingText = ({ title, textStyles }:TextProps) => (
  <motion.p
    variants={textContainer}
    className={textStyles}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }:TextProps) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-blue-700 ${textStyles}`}
  >
    {title}
  </motion.h2>
);