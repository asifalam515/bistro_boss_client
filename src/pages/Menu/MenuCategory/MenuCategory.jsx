import { Link } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => {
          return <MenuItem key={item._id} item={item}></MenuItem>;
        })}
      </div>
      <Link
        to={`/order/${title}`}
        className="btn btn-primary border-0 border-b-4 mt-4
      "
      >
        Order Now
      </Link>
    </div>
  );
};

export default MenuCategory;