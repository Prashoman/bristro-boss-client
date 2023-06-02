import SectionTitle from "../../../components/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";

import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");
  //console.log(menu);
  return (
    <div className="my-9">
      <SectionTitle
        subTitle="Check it out"
        headingTitle="FROM OUR MENU"
      ></SectionTitle>
      <div className="grid lg:grid-cols-2 gap-8">
        {popularMenu?.map((item) => (
          <MenuItems key={item._id} items={item}></MenuItems>
        ))}
      </div>
      <div className="text-center my-5">
        <button className="btn btn-outline  border-0 border-b-2">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
