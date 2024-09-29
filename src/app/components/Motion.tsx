"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface MotionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export const Motion: React.FC<MotionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
};
