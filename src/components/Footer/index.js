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
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 pt-0 flex flex-col items-center text-light dark:text-dark">
      <h3 className="mt-16 font-medium text-center dark:font-bold capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        interesting stories | updates | guides
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium  text-sm sm:text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 pl-4 rounded mx-4"
      >
        <input
          type="text"
          className="w-full  pb-1 pl-0 mr-2 border-0 border-b focus:ring-0 focus:border-dark dark:focus:border-light text-dark dark:text-light bg-transparent"
          placeholder="Enter your email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />

        <input
          type="submit"
          className="bg-dark dark:bg-light text-light dark:text-dark py-1 px-3 sm:px-5 rounded font-medium cursor-pointer"
        />
      </form>
      <div className="flex items-center mt-8">
          <Link href="" className="w-6 h-6 mr-4">
            <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
          </Link>
          <Link href="" className="w-6 h-6 mr-4">
            <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
          </Link>
          <Link href="" className="w-6 h-6 mr-4">
            <GithubIcon className="fill-light dark:fill-dark hover:scale-125 transition-all ease duration-200" />
          </Link>
          <Link href="" className="w-6 h-6 mr-4">
            <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
          </Link>
        </div>
      <div className="w-full  mt-16 md:mt-24 flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 py-6 border-t border-solid border-light dark:border-dark  font-medium relative">
        <span className="text-center">&copy; 2023 CodeBucks. All rights reserved.</span>
        <Link className="text-center underline my-4 md:my-0" href="/sitemap.xml">
          Sitemap.xml
        </Link>
        <div className="text-center">
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
