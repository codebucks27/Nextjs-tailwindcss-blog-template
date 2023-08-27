import { slug } from "github-slugger";
import Category from "../Elements/Category";

const Categories = ({ categories, active }) => {
  return (
    <div className=" px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap  font-medium  dark:text-light mx-5 md:mx-10">
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/categories/${cat}`}
          name={cat}
          active={active === slug(cat)}
        />
      ))}
    </div>
  );
};

export default Categories;
