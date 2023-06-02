import CoverMenu from "../Shared/CoverMenu/CoverMenu";
import shopImg from "../../assets/shop/banner2.jpg";
import CategoryTab from "./CategoryTab/CategoryTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OurShop = () => {
  const { category } = useParams();
  //console.log("shop", category);

  return (
    <div>
      <Helmet>
        <title>Birstro Boss | Shop</title>
      </Helmet>
      <CoverMenu heading={"Our Shop"} img={shopImg}></CoverMenu>
      <CategoryTab category={category}></CategoryTab>
    </div>
  );
};

export default OurShop;
