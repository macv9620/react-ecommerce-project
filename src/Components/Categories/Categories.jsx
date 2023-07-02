import { Link } from "react-router-dom";
import { Computers } from "../Icons/Category/Computers";
import { Electronics } from "../Icons/Category/Electronics";
import { Grocery } from "../Icons/Category/Grocery";
import { Shoes } from "../Icons/Category/Shoes";
import { Toy } from "../Icons/Category/Toy";
import "./Categories.css";

const Categories = () => {
  const categories = [
    {
      title: "Computers",
      icon: <Computers />,
      path: "/categories/Computers",
    },
    {
      title: "Electronics",
      icon: <Electronics />,
      path: "/categories/Electronics",
    },
    {
      title: "Grocery",
      icon: <Grocery />,
      path: "/categories/Grocery",
    },
    {
      title: "Toys",
      icon: <Toy />,
      path: "/categories/Toys",
    },
    {
      title: "Shoes",
      icon: <Shoes />,
      path: "/categories/Shoes",
    },
  ];
  return (
    <div className="categories">
      <h1 className="text-center font-medium text-[30px]">Main Categories</h1>
      <div className="categories-container">
        {categories.map((category, index) => {
          return (
            <Link key={index} to={category.path}>
              <div className="categories-container__info">
                <div className="image-container">
                  <div className="categories-info__image">{category.icon}</div>
                </div>
                <p className="categories-info__text">{category.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export { Categories };
