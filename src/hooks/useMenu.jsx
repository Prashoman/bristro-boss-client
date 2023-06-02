import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:5000/menus")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading(false);
  //     });
  // }, []);
  //return [menu, loading];
  const {
    data: menu = [],
    refetch,
    isLoading: loading,
  } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/menus");
      const data = res.json();
      return data;
    },
  });
  return [menu, refetch, loading];
};
export default useMenu;
