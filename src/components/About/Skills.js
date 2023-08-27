const SkillList = [
  "next.js",
  "tailwind css",
  "figma",
  "javaScript",
  "web design",
  "Gatsby.js",
  "strapi",
  "firebase",
  "generative AI",
  "wireframing",
  "SEO",
  "framer motion",
  "sanity",
];

const Skills = () => {
  return (
    <section className="w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-dark dark:border-light text-dark dark:text-light">
      <span className="font-semibold text-lg sm:text-3xl md:text-4xl dark:font-normal text-accent dark:text-accentDark">I'm comfortable in...</span>
      <ul className="flex flex-wrap mt-8  justify-center xs:justify-start">
        {SkillList && SkillList.map((item, index) => (
          <li key={index} className="font-semibold inline-block capitalize text-base xs:text-lg sm:text-xl md:text-2xl py-2 xs:py-3 sm:py-4 lg:py-5 px-4 xs:px-6 sm:px-8 lg:px-12 border-2 border-solid border-dark dark:border-light dark:font-normal rounded mr-3 xs:mr-4 md:mr-6 mb-3 xs:mb-4 md:mb-6">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
