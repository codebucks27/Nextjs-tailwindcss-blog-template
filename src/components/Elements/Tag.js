import { cx } from "@/src/utils";
import Link from "next/link";

const Tag = ({ name, link = "#", ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark text-light rounded-full capitalize font-semibold border sm:border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 active:scale-90  text-sm sm:text-base",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
