import { cx } from "@/src/utils";
import Link from "next/link";

const Category = ({ name, link = "#",active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block  py-1.5 md:py-2 px-6 md:px-10  rounded-full border-2 border-solid border-dark m-1 md:m-2 text-sm sm:text-base hover:scale-105 transition-all ease duration-200 active:scale-90",
        props.className,
        active ? 'bg-dark text-light' : 'bg-light text-dark'
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;
