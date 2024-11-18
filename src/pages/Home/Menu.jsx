import { Helmet, HelmetProvider } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import PopularMenu from "./PopularMenu/PopularMenu";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "../Menu/MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"}></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="Don't miss"
        heading="Todays offer"
      ></SectionTitle>
      {/* offers menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        coverImg={dessertImg}
        title="dessert"
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        coverImg={pizzaImg}
        title="pizza"
      ></MenuCategory>
      <MenuCategory
        items={salad}
        coverImg={saladImg}
        title="salad"
      ></MenuCategory>
      <MenuCategory items={soup} coverImg={soupImg} title="soup"></MenuCategory>
    </div>
  );
};

export default Menu;
