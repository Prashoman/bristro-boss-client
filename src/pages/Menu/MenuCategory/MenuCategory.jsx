import { Link } from "react-router-dom";
import CoverMenu from "../../Shared/CoverMenu/CoverMenu";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ title, img, items }) => {
  return (
    <div className="my-10">
      {title && <CoverMenu heading={title} img={img}></CoverMenu>}

      <div className="grid lg:grid-cols-2 gap-8 my-8">
        {items?.map((item) => (
          <MenuItems key={item._id} items={item}></MenuItems>
        ))}
      </div>
      <div className="text-center my-5">
        <Link to={`/shop/${title ? title : "salad"}`}>
          <button className="btn btn-outline  border-0 border-b-2">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
