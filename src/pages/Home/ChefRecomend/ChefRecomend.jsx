import SectionTitle from "../../../components/SectionTitle";
import img1 from "../../../assets/home/slide1.jpg";

const ChefRecomend = () => {
  return (
    <div className="px-28 py-8">
      <SectionTitle
        headingTitle={"CHEF RECOMMENDS"}
        subTitle={"Should Try"}
      ></SectionTitle>
      <section className="grid grid-cols-3 gap-8">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-64" src={img1} alt="Shoes" />
          </figure>
          <div className="text-center my-3 space-y-3">
            <h2 className="text-xl font-semibold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="justify-end">
              <button className="btn btn-outline btn-warning border-0 border-b-2">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-64" src={img1} alt="Shoes" />
          </figure>
          <div className="text-center my-3  space-y-3">
            <h2 className="text-xl font-semibold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="justify-end">
              <button className="btn btn-black">add to cart</button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-64" src={img1} alt="Shoes" />
          </figure>
          <div className="text-center my-3 space-y-3">
            <h2 className="text-xl font-semibold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="justify-end">
              <button className="btn btn-outline btn-warning border-0 border-b-2">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChefRecomend;
