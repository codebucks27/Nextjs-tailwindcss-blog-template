import ContactForm from "./ContactForm";
import LottieAnimation from "./LottieAnimation";

const ContactCoverSection = () => {
  return (
    <section className="w-full h-[75vh] border-b-2 border-solid border-dark flex items-center justify-center">
      <div className="inline-block w-2/5 h-full border-r-2 border-solid border-dark">
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
};

export default ContactCoverSection;
