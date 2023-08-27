import ContactForm from "@/src/components/Contact/ContactForm";
import dynamic from "next/dynamic";
// import LottieAnimation from "@/src/components/Contact/LottieAnimation";

const LottieAnimation = dynamic(() => import('@/src/components/Contact/LottieAnimation'))


export const metadata = {
  title: "Contact Me",
  description: "Contact Me page",
}

export default function Contact() {
  return (
    <section className="w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark flex flex-col md:flex-row items-center justify-center dark:border-light text-dark dark:text-light">
    <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-solid border-dark dark:border-light">
      <LottieAnimation />
    </div>
    <div className=" w-full md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8">
      <h2 className="font-bold capitalize text-2xl xs:text-3xl sm:text-4xl">
        Let's connect!
      </h2>
      <ContactForm />
    </div>
  </section>
  );
}
