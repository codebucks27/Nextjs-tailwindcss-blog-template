"use client";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-xl  font-semibold leading-relaxed dark:font-normal"
    >
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="your full name"
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
        {...register("name", { required: true, maxLength: 80 })}
      />{" "}
      and I want to discuss a potentiol project. You can email me at
      <input
        type="email"
        placeholder="your@email"
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />{" "}
      or reach me on
      <input
        type="tel"
        placeholder="your phone"
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
        {...register("phone number", { required: true, maxLength: 12 })}
      />{" "}
      Here are some details about my project: <br />
      <textarea
        {...register("project details", {})}
        placeholder="My project is about"
        rows={3}
        className="w-full outline-none border-0 placeholder:text-lg p-0  focus:ring-0 border-b border-gray focus:border-gray bg-transparent"
      />
      <input type="submit" value="Send Request" className="mt-8 font-semibold inline-block capitalize text-xl py-3 px-8 border-2 border-solid border-dark rounded cursor-pointer dark:border-light" />
    </form>
  );
};

export default ContactForm;
