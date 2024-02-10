import { useEffect, useState } from "react";
import User from "../User/User";
import Modal from "../Model/Modal";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [dataLength, setDataLength] = useState(6);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  console.log(search);

  //   useEffect(() => {
  //     fetch("https://dummyjson.com/users")
  //       .then((res) => res.json())
  //       .then((data) => setUsers(data.users));
  //   }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        setUsers(data.users);
      } catch (error) {
        console.log("fetching error", error);
      }
    };

    // call
    fetchData();
  }, []);

  //Filter user with slice and sort

  const filterUser = users
    .slice(0, dataLength)
    .filter((user) => {
      const searchTerm = search.toLowerCase();
      const firstNameMatch = user.firstName.toLowerCase().includes(searchTerm);
      const lastNameMatch = user.lastName.toLowerCase().includes(searchTerm);
      return searchTerm === "" || firstNameMatch || lastNameMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.firstName.localeCompare(b.firstName);
        case "email":
          return a.email.localeCompare(b.email);
        case "companyName":
          return a.company.name.localeCompare(b.company.name);
        default:
          return 0;
      }
    });
  return (
    <>
      <div className="text-center  my-font  mb-14 border border-slate-100  grid  gap-4 sm:gap-8 items-center  ">
        <div className="items-center">
          <h1 className="text-4xl  font-bold ">All Users {users.length} </h1>
          <p className="">Information about all the users</p>
        </div>
        <div className="">
          <div className="text-center mt-2 p-2 grid  gap-2 items-center border sm:flex justify-around">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search user here"
              className="input input-bordered input-info "
            />
            <select
              className="select select-info "
              value={sortBy}
              onChange={handleSortChange}
            >
              <option disabled selected>
                Sort By
              </option>
              <option selected>Default</option>
              <option value="name">Name</option>
              <option value="email">Email</option>
              <option value="companyName">CompanyName</option>
            </select>
            <Modal></Modal>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-row justify-center md:items-center md:gap-8 gap-4 flex-wrap">
          <button>All</button>
          <button>Name</button>
          <button>Email</button>
          <button>Company</button>
        </div> */}
      {/* users data parent*/}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 p-4 ">
        {filterUser.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>

      <div className={dataLength === users.length ? "hidden" : ""}>
        <button
          onClick={() => setDataLength(users.length)}
          className="btn btn-primary font-bold hover:bg-violet-900 text-white"
        >
          View All Users
        </button>
      </div>
    </>
  );
};

export default AllUsers;
