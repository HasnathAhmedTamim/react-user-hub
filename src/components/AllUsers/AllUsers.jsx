import { useEffect, useState } from "react";
import User from "../User/User";
import Modal from "../Model/Modal";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const [dataLength, setDataLength] = useState(6);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  // const [newUsers, setNewUsers] = useState([]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  

  // useEffect(() => {
  //   const storedUsers = localStorage.getItem("users");
  //   const initialUsers = storedUsers ? JSON.parse(storedUsers) : [];
  //   setUsers(initialUsers);
  // }, []);

  // useEffect(() => {
  //   const storedUsers = localStorage.getItem("users");
  //   if (storedUsers) {
  //     const usersArray = JSON.parse(storedUsers);
  //     setUsers(usersArray);
  //     console.log("Users loaded from local storage:", usersArray);
  //   }
  // }, []);

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

  // const filterUser2 = newUsers
  //   .slice(0, dataLength)
  //   .filter((newUser) => {
  //     const searchTerm = search.toLowerCase();
  //     const firstNameMatch = newUser.firstName
  //       .toLowerCase()
  //       .includes(searchTerm);
  //     const lastNameMatch = newUser.lastName.toLowerCase().includes(searchTerm);
  //     return searchTerm === "" || firstNameMatch || lastNameMatch;
  //   })
  //   .sort((a, b) => {
  //     switch (sortBy) {
  //       case "name":
  //         return a.firstName.localeCompare(b.firstName);
  //       case "email":
  //         return a.email.localeCompare(b.email);
  //       case "companyName":
  //         return a.company.name.localeCompare(b.company.name);
  //       default:
  //         return 0;
  //     }
  //   });

  return (
    <>
      <div className="navbar p-16 items-center  bg-gradient-to-r from-cyan-800 to-blue-800">
        <div className="flex-1 flex-wrap    gap-2">
          <a className=" btn text-xl  ">All Users ({users.length}) </a>
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
        </div>
        <div className="flex-none">
          <Modal></Modal>
        </div>
      </div>
      {/* <div className="text-center  rounded-lg shadow-md shadow-slate-200  my-font  mb-14 border border-slate-100  grid  gap-4 sm:gap-8 items-center  ">
        <div className="items-center ">
          <h1 className="text-4xl  font-bold ">All Users {users.length} </h1>
          <p className="">Information about all the users</p>
        </div>
        <div className="navbar bg-gradient-to-r from-blue-300 to-cyan-500 grid flex-1  items-center">
          <div className="text-center mt-2 p-2 grid  gap-2 items-center  sm:flex justify-start">
            <div className="flex gap-4">
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
            </div>
            <div className="flex-none justify-end border items-center  ">
              <Modal></Modal>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="flex flex-row justify-center md:items-center md:gap-8 gap-4 flex-wrap">
          <button>All</button>
          <button>Name</button>
          <button>Email</button>
          <button>Company</button>
        </div> */}
      {/* users data parent*/}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 p-4 container mx-auto">
        {filterUser.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
        {/* {filterUser2.map((users) => (
          <Modal key={users.id} users={users}></Modal>
        ))} */}
        {/* {filterUser.map((newUsers) => (
          <div key={newUsers.id} className="p-4 border border-gray-200">
            <h2 className="text-lg font-semibold mb-2">New User</h2>
            <p>
              <strong>Name:</strong> {newUsers.firstName} {newUsers.lastName}
            </p>
            <p>
              <strong>Address:</strong> {newUsers.address}
            </p>
            <p>
              <strong>Company:</strong> {newUsers.company.name}
            </p>
            <img
              src={newUsers.photoUrl}
              alt="User"
              className="w-24 h-24 mt-2"
            />
          </div>
        ))} */}

        <div className={dataLength === users.length ? "hidden " : ""}>
          <button
            onClick={() => setDataLength(users.length)}
            className="btn btn-primary font-bold hover:bg-violet-900 text-white "
          >
            View All Users
          </button>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
