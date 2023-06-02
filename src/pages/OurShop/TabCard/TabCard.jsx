import FoodCard from "../../Shared/FoodCard/FoodCard";

const TabCard = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10">
        {items.map((item) => (
          <FoodCard key={item._id} items={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default TabCard;
