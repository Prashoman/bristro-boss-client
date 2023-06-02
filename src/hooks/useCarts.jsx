import { useContext } from "react";
import { AuthContextProvider } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxioxSecure";

const useCarts = () => {
  const { user, loading } = useContext(AuthContextProvider);
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    enabled:
      !loading && !!user?.email && !!localStorage.getItem("access-token"),
    // queryFn: async () => {
    //   const res = await fetch(
    //     `http://localhost:5000/carts?email=${user?.email}`,
    //     {
    //       headers: {
    //         authorization: `Bearer ${localStorage.getItem("access-token")}`,
    //       },
    //     }
    //   );
    //   const data = res.json();
    //   return data;
    // },

    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      // console.log(res);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCarts;
