import CoverMenu from "../../Shared/CoverMenu/CoverMenu";
import cover1 from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupsImg from "../../../assets/menu/soup-bg.jpg";
import { Helmet } from "react-helmet-async";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Birstro Boss | Menu</title>
      </Helmet>
      <CoverMenu img={cover1} heading="Our Menu"></CoverMenu>
      <SectionTitle
        subTitle="Don't miss"
        headingTitle="TODAY'S OFFER"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={desserts}
        title={"dessert"}
        img={dessertImg}
      ></MenuCategory>
      <MenuCategory
        items={pizzas}
        title={"pizza"}
        img={pizzaImg}
      ></MenuCategory>
      <MenuCategory
        items={salads}
        title={"salad"}
        img={saladImg}
      ></MenuCategory>
      <MenuCategory items={soups} title={"soup"} img={soupsImg}></MenuCategory>
    </div>
  );
};

export default Menu;
