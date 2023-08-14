"use client";
import { cx } from "@/src/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const Category = ({ name, link = "#",active, ...props }) => {
  const FramerLink = motion(Link);
  return (
    <FramerLink
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      href={link}
      className={cx(
        "inline-block py-2 px-10  rounded-full border-2 border-solid border-dark m-2 text-base",
        props.className,
        active ? 'bg-dark text-light' : 'bg-light text-dark'
      )}
    >
      #{name}
    </FramerLink>
  );
};

export default Category;
