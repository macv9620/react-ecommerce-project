import { Computers } from "../Icons/Category/Computers";
import { Electronics } from "../Icons/Category/Electronics";
import { Grosery } from "../Icons/Category/Grosery";
import { Shoes } from "../Icons/Category/Shoes";
import { Toy } from "../Icons/Category/Toy";
import "./Categories.css";

const Categories = () => {
  const categories = [
    {
      title: "Computers",
      icon: <Computers />,
    },
    {
      title: "Electronics",
      icon: <Electronics />,
    },
    {
      title: "Grosery",
      icon: <Grosery />
    },
    {
      title:'Toys',
      icon: <Toy />
    },
    {
      title: 'Shoes',
      icon: <Shoes />
    }
  ];
  return (
    <div className="categories">
      <h1 className="text-center font-medium text-xxl">Main Categories</h1>
      <div className="categories-container">
      {categories.map((category, index) => {
        return (
            <div className="categories-container__info" key={index}>
              <div className="categories-info__image">{category.icon}</div>
              <p className="categories-info__text">{category.title}</p>
            </div>
        );
      })}
      </div>
    </div>
  );
};

export { Categories };
