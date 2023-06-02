import SectionTitle from "../../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxioxSecure";
import Swal from "sweetalert2";

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const imageToken = import.meta.env.VITE_image_hosted;
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(imageHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageRes) => {
        //console.log(imageRes);
        if (imageRes.success) {
          const displayUrl = imageRes.data.display_url;
          const { name, price, category, details } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe: details,
            image: displayUrl,
          };
          axiosSecure.post("/menus", newItem).then((data) => {
            //console.log(data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item an added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  return (
    <div className="w-full h-full px-8 my-10">
      <SectionTitle
        subTitle="What's new"
        headingTitle="Add an Item"
      ></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)} className="border p-8">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Recipe Name*:</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex gap-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category*:</span>
            </label>
            <select
              {...register("category", { required: true })}
              defaultValue="Pick one"
              className="select select-bordered"
            >
              <option disabled>Pick one</option>
              <option>Salad</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Dessert</option>
              <option>Drinks</option>
              <option>Bangla</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Price*:</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="price"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Item image*:</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">details*:</span>
          </label>
          <textarea
            {...register("details", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="details item"
          ></textarea>
        </div>
        <input
          className="btn btn-warning mt-5"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
