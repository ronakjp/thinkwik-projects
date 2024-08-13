import { useEffect, useState } from "react";
import Header from "./Header";
import ShowDetailPage, { properties, Property } from "./ShowDetailPage";
import SideBar from "./SideBar";
import { useDebounce } from "../hooks/useDebounce";

const MainLayout: React.FC = () => {
  const [items, setItems] = useState<typeof properties>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedValue = useDebounce(searchTerm, 1000);

  useEffect(() => setItems(properties), []);

  useEffect(() => {
    if (debouncedValue === "") {
      setItems(properties);
    } else {
      setItems(filterItems(properties, debouncedValue));
    }
  }, [debouncedValue]);

  function filterItems(itm: Property[], sTerm: string): Property[] {
    return itm.filter((eachItem: Property) =>
      eachItem.title.toLowerCase().includes(sTerm)
    );
  }

  function handleOnSearchChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    const term = event.target.value.toLowerCase().trim();

    setSearchTerm(() => term);
  }

  return (
    <div className="grid grid-cols-4 grid-rows-[auto,1fr,auto] h-screen">
      <div className="col-span-4 bg-transparent  border-custom-pink border-b-2 shadow-sm">
        <Header />
      </div>
      <div className=" bg-slate-50 row-span-2 border-r-2">
        <SideBar onChange={handleOnSearchChange} />
      </div>
      <div className=" col-span-3 row-span-2 overflow-auto p-9">
        <ShowDetailPage propertiesList={items} />
      </div>
      <div className="bg-slate-500 col-span-4">footer</div>
    </div>
  );
};

export default MainLayout;
