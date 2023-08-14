"use client";
import { cx } from "@/src/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const Tag = ({ name, link = "#", ...props }) => {
  const FramerLink = motion(Link);
  return (
    <FramerLink
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      href={link}
      className={cx(
        "inline-block py-3 px-10 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light ",
        props.className
      )}
    >
      {name}
    </FramerLink>
  );
};

export default Tag;
