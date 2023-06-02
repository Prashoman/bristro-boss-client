import Swal from "sweetalert2";
import useCarts from "../../../hooks/useCarts";

const Mycarts = () => {
  const [cart, refetch] = useCarts();
  const totalPrice = cart?.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-full h-full px-8">
      <div className="h-16 flex justify-between items-center">
        <h1 className="font-semibold uppercase">Total Order: {cart.length}</h1>
        <h1 className="font-semibold uppercase">
          Total Price: <span className="text-orange-500">${totalPrice}</span>
        </h1>
        <button className="btn btn-sm btn-warning text-white">Pay</button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Items Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img className="w-20 h-16" src={row.image} alt="food" />
                </td>
                <td>{row.name}</td>
                <td>
                  <span className="text-orange-500">${row.price}</span>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(row._id)}
                    className="btn btn-secondary btn-sm"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mycarts;
