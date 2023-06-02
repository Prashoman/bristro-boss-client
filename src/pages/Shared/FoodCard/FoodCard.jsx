import { useContext } from "react";
import { AuthContextProvider } from "../../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCarts from "../../../hooks/useCarts";

const FoodCard = ({ items }) => {
  const { user } = useContext(AuthContextProvider);
  const [, refetch] = useCarts();
  // const location = useLocation();
  const navigate = useNavigate();
  const { image, name, recipe, price } = items || {};

  const handleAddCart = (item) => {
    if (user && user.email) {
      // console.log(item);
      const carts = {
        cartId: item._id,
        image,
        name,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(carts),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Cart Added Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-64" src={image} alt="Shoes" />
      </figure>
      <button className="btn btn-sm absolute right-5 top-4">${price}</button>
      <div className="text-center my-3 space-y-3">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p>{recipe}</p>
        <div className="justify-end">
          <button
            onClick={() => handleAddCart(items)}
            className="btn btn-outline btn-warning border-0 border-b-2"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
