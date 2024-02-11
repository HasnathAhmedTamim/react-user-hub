import { useLoaderData, useParams } from "react-router-dom";

const UserDetails = () => {
  const usersDetails = useLoaderData([]);
  const { id } = useParams();
  const idInt = parseInt(id);
  console.log(id, usersDetails.users);
  const user = usersDetails.users.find((user) => user.id === idInt);
  console.log(user);
  return (
    <div className=" mx-auto container flex-wrap">
      <div className="  bg-gradient-to-r from-blue-800 to-cyan-800 sm:p-34 lg:p-24 md:p-12  hover:scale-90 transition-all duration-300  ">
        <div className="items-center">
          <h1 className="text-4xl  font-bold mb-4 py-2 text-white ">
            {" "}
            Users Details
          </h1>
        </div>
        <div className="hero-content flex-col sm:flex-col lg:flex-row   shadow-md shadow-violet-400  bg-gradient-to-r from-cyan-600 to-blue-200 p-4 gap-4 items-center  justify-around flex lg:flex">
          <img
            src={user.image}
            className="max-w-sm rounded-lg shadow-2xl  border-2 border-black"
          />
          <div className="grid grid-cols-1 ">
            <h1 className="text-5xl font-bold">
              {" "}
              {user.firstName} <span> {user.lastName} </span>
            </h1>
            <p className="py-2">
              <span className="my-font ">Email:</span>{" "}
              <span className="font-medium">{user.email}</span>{" "}
            </p>
            <p>
              <span className="my-font">Address: </span>
              <ul className="font-medium">
                <li>{user.address.address}, </li>
                <li>
                  {user.address.city}, {user.address.state}.{" "}
                </li>
                <li>{user.address.postalCode}.</li>
              </ul>
            </p>
            <p className="mb-2">
              <span className="my-font">Company Name : </span>
              <span className="font-medium">{user.company.name}.</span>
              <br />
              {/* <span className="font-medium ">Tittle: {user.company?.title}</span> */}
            </p>
          </div>
        </div>
        {/* <Link to="/">
          <button className="btn btn-ghost text-xl bg-fuchsia-500">
            Back to Home
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default UserDetails;
