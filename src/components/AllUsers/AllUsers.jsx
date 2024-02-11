import { useEffect, useState } from "react";
import User from "../User/User";
import Modal from "../Model/Modal";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../../variants";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);
  const [dataLength, setDataLength] = useState(6);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    // call for users
    fetchData();
  }, []);

  useEffect(() => {
    filterUser();
  }, [users, dataLength, sortBy, search]);
  

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUsers(data.users);
    } catch (error) {
      console.log("fetching error", error);
    }
  };

  const filterUser = () => {
    console.log(users);
    const tempUsers = users
      .slice(0, dataLength)
      .filter((user) => {
        const searchTerm = search.toLowerCase();
        const firstNameMatch = user.firstName
          .toLowerCase()
          .includes(searchTerm);
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

    setFilterUsers(tempUsers);
  };

  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <>
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="navbar flex-wrap p-16 items-center  bg-gradient-to-r from-cyan-800 to-blue-800"
      >
        <div className="flex-1 flex-wrap    gap-2">
          <a className=" btn text-xl  ">All Users ({users.length}) </a>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search user here"
            className="input input-bordered input-info font-semibold "
          />
          <select
            className="select select-info font-semibold sm:mb-0 mb-2"
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
        <div className=" flex-none ">
          <Modal addNewUser={addNewUser}></Modal>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 p-4 container mx-auto"
      >
        {filterUsers.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </motion.div>
      <div className={dataLength === users.length ? "hidden " : ""}>
        <button
          onClick={() => setDataLength(users.length)}
          className="btn btn-primary font-bold hover:bg-violet-900 text-white "
        >
          View All Users
        </button>
      </div>
    </>
  );
};

export default AllUsers;
