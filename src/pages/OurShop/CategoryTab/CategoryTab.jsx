import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "../TabCard/TabCard";
import useMenu from "../../../hooks/useMenu";
const CategoryTab = ({ category }) => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  //console.log(category);
  const initialIndex = categories.indexOf(category);
  //console.log(initialIndex);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  //   const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <TabCard items={salads}></TabCard>
        </TabPanel>
        <TabPanel>
          <TabCard items={pizzas}></TabCard>
        </TabPanel>
        <TabPanel>
          <TabCard items={soups}></TabCard>
        </TabPanel>
        <TabPanel>
          <TabCard items={desserts}></TabCard>
        </TabPanel>
        <TabPanel>
          <TabCard items={drinks}></TabCard>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryTab;
