import Image from "next/image";
import profileCharacter from "../../../public/character.png";

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 border-solid border-dark flex flex-col md:flex-row items-center justify-center dark:border-light text-dark dark:text-light">
      <div className="w-full md:w-1/2 h-full md:border-r-2 border-solid border-dark dark:border-light flex justify-center">
        <Image
          src={profileCharacter}
          alt="CodeBucks"
          className="w-4/5 xs:w-3/4 md:w-full h-full object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col  text-center lg:text-left items-center lg:items-start justify-center px-5 xs:px-10 pb-10 lg:px-16">
        <h2 className="font-bold capitaliz text-4xl xs:text-5xl sxl:text-6xl">
          Dream Big, Work Hard, Achieve More!
        </h2>
        <p className="font-medium capitalize mt-4 text-base">
          This mantra drives my work as a passionate freelancer. I blend
          innovative technology with timeless design for captivating digital
          experiences. Inspired by nature and literature, I'm a perpetual
          learner embracing challenges. With each project, I aim to leave a
          lasting impact—one pixel at a time.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
