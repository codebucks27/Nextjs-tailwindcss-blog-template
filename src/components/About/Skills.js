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
    <section className="w-full flex flex-col py-20 px-20 border-b-2 border-solid border-dark dark:border-light text-dark dark:text-light">
      <span className="font-semibold text-4xl dark:font-normal text-accent dark:text-accentDark">I'm comfortable in...</span>
      <ul className="flex flex-wrap mt-8  ">
        {SkillList.map((item) => (
          <li className="font-semibold inline-block capitalize text-2xl py-5 px-12 border-2 border-solid border-dark dark:border-light dark:font-normal rounded mr-6 mb-6">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
