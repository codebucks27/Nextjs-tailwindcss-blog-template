import ContactForm from "@/src/components/Contact/ContactForm";
import LottieAnimation from "@/src/components/Contact/LottieAnimation";

export const metadata = {
  title: "Contact Me",
  description: "Contact Me page",
}

export default function Contact() {
  return (
    <section className="w-full h-[75vh] border-b-2 border-solid border-dark flex items-center justify-center dark:border-light text-dark dark:text-light">
    <div className="inline-block w-2/5 h-full border-r-2 border-solid border-dark dark:border-light">
      <LottieAnimation />
    </div>
    <div className="w-3/5 flex flex-col items-start justify-center px-16">
      <h2 className="font-bold capitalize text-4xl">
        Let's connect!
      </h2>
      <ContactForm />
    </div>
  </section>
  );
}
