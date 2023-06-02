import Featured from "../../Featured/Featured";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Chefinfo from "../ChefInfo/Chefinfo";
import ChefRecomend from "../ChefRecomend/ChefRecomend";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testomonial from "../Testomonial/Testomonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Birstro Boss | Home</title>
      </Helmet>
      ;<Banner></Banner>
      <Category></Category>
      <Chefinfo></Chefinfo>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ChefRecomend></ChefRecomend>
      <Featured></Featured>
      <Testomonial></Testomonial>
    </div>
  );
};

export default Home;
