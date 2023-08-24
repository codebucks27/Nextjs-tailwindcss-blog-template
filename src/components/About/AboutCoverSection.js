import Image from "next/image";
import profileCharacter from "../../../public/character.png";

const AboutCoverSection = () => {
  return (
    <section className="w-full h-[75vh] border-b-2 border-solid border-dark flex items-center justify-center">
      <div className="inline-block w-1/2 h-full border-r-2 border-solid border-dark">
        <Image
          src={profileCharacter}
          alt="CodeBucks"
          className="w-full h-full object-contain object-center"
        />
      </div>
      <div className="w-1/2 flex flex-col items-start justify-center px-16">
        <h2 className="font-bold capitalize text-6xl">Dream Big, Work Hard, Achieve More!</h2>
        <p className="font-medium capitalize  mt-4">
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
