"use client";

import { motion, MotionProps as FramerMotionProps } from "framer-motion";
import React, { ElementType } from "react";

interface MotionProps extends Omit<FramerMotionProps, "ref"> {
  type?: keyof typeof motion;
  children: React.ReactNode;
  className?: string;
}

export const Motion: React.FC<MotionProps> = ({
  type = "div", // Default to div if no type is provided
  children,
  className,
  ...props
}) => {
  const Component: ElementType = motion[type]; // Explicitly typing the component as `ElementType`

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};
