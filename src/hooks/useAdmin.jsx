// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxioxSecure";

// const useAdmin = () => {
//   const { user } = useAuth();
//   const [axiosSecure] = useAxiosSecure();

//   const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
//     queryKey: ["isAdmin", user?.email],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//       return res.data.admin;
//     },
//   });
//   return [isAdmin, isAdminLoading];
// };
// export default useAdmin;

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxioxSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      //console.log("user admin", res.data);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;