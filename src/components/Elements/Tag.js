import { cx } from "@/src/utils";
import Link from "next/link";

const Tag = ({ name, link = "#", ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-3 px-10 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 active:scale-90",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
