import SectionTitle from "../../components/SectionTitle";
import img1 from "../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="my-8">
      <div className="img-featured w-full py-10 ">
        <div className=" bg-base-200 bg-opacity-10 p-20">
          <SectionTitle
            headingTitle={"FROM OUR MENU"}
            subTitle="Check it out"
          ></SectionTitle>
          <div className="flex justify-center items-center px-36">
            <div>
              <img src={img1} alt="" />
            </div>

            <div className="ms-6">
              <h1>March 20, 2023</h1>
              <h3>WHERE CAN I GET SOME?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="btn btn-outline  border-0 border-b-2">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
