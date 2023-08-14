import { slug } from "github-slugger"
import Category from "../Elements/Category"

const Categories = ({categories, active}) => {
  return (
    <div className="px-20 mt-10 border-t-2 text-dark border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap text-xl font-medium  dark:text-light mx-10">
           
        {
            categories.map(cat => <Category key={cat} link={`/categories/${cat}`} name={cat} active={active === slug(cat)} />)
        }

    </div>
  )
}

export default Categories