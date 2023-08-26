"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/80 m-10 pt-0 flex flex-col items-center text-light dark:text-dark">
      <h3 className="mt-16 font-medium dark:font-bold capitalize text-4xl">
        interesting stories | updates | guides
      </h3>
      <p className="mt-5 text-center w-3/5 font-light dark:font-medium">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 min-w-[384px] flex items-stretch bg-light dark:bg-dark p-2 pl-4 rounded"
      >
        <input
          type="text"
          className="w-full  pb-1 pl-0 mr-2 border-0 border-b focus:ring-0 focus:border-dark dark:focus:border-light text-dark dark:text-light bg-transparent"
          placeholder="Enter your email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />

        <input
          type="submit"
          className="bg-dark dark:bg-light text-light dark:text-dark py-1 px-5 rounded font-medium cursor-pointer"
        />
      </form>
      <div className="w-full mt-24 flex items-center justify-between px-8 py-6 border-t border-solid border-light dark:border-dark  font-medium">
        <span>&copy; 2023 CodeBucks. All rights reserved.</span>
        <div className="flex items-center">
          <Link href="" className="w-6 h-6 mr-4">
            <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
          </Link>
          <Link href="" className="w-6 h-6 mr-4">
            <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
          </Link>
          <Link href="" className="w-6 h-6 mr-4">
            <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
          </Link>
          <Link href="" className="w-6 h-6 mr-4">
            <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
          </Link>
        </div>
        <div>
          Made with ❤ by{" "}
          <a href="https://devdreaming.com" className="underline">
            CodeBucks
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
