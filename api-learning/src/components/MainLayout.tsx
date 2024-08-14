import { useEffect, useState } from "react";
import Header from "./Header";
import ShowDetailPage, { UserData } from "./ShowDetailPage";

import axios from "axios";
import PaginationBar from "./PaginationBar";

type ApiResponse = {
  data: UserData[];
  total_pages: number;
};

const MainLayout: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);

  const [numberOfPages, setNumberOfPages] = useState<number>(0);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetchData(1);

      if (data) {
        setNumberOfPages(data.total_pages);
        setUsers(data.data); // Assuming data contains an array of users in `data`
      }
    };

    fetchUsers();
  }, []);

  async function fetchData(
    pageNumber: number
  ): Promise<ApiResponse | undefined> {
    try {
      const res = await axios.get(
        `https://reqres.in/api/users?page=${pageNumber.toString()}`
      );

      return res.data; // This will return the data to wherever fetchData is called
    } catch (error) {
      console.log("Bad Request");
      return undefined;
    }
  }

  function onPageChange(pageNumber: number): void {
    const fetchUsers = async () => {
      const data = await fetchData(pageNumber);

      if (data) {
        setUsers(data.data); // Assuming data contains an array of users in `data`
      }
    };
    fetchUsers();
  }

  return (
    <div className="grid grid-cols-4 grid-rows-[auto,1fr,auto] h-screen">
      <div className="col-span-4 bg-transparent  border-custom-pink border-b-2 shadow-sm">
        <Header />
      </div>
      <div className=" bg-slate-50 row-span-2 border-r-2">
        {/* Side Bar Place */}
      </div>
      <div className=" col-span-3 row-span-2 overflow-auto p-9">
        <ShowDetailPage usersList={users} />
        <div className="flex justify-center">
          <PaginationBar totalPages={numberOfPages} onClick={onPageChange} />
        </div>
      </div>

      <div className="bg-slate-500 col-span-4">footer</div>
    </div>
  );
};

export default MainLayout;
