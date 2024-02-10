import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, image, firstName, lastName, email, address, company } = user;
  return (
    <div className="p-2 hover:scale-90 transition-all duration-300">
      <div className="card p-2  bg-gradient-to-r from-blue-300 to-cyan-500 lg:card-side    items-center  hover:bg-slate-100 shadow-md shadow-violet-300">
        <figure className="items-start flex justify-start">
          <div className="avatar p-3 ">
            <div className="  h-14 w-14 rounded-full ring ring-black ring-offset-base-100 ring-offset-2">
              <img className="" src={image} />
            </div>
          </div>
        </figure>
        <div className="card-body ">
          <Link
            to={`/user/${id}`}
            className="cursor-pointer text-center items-center justify-center flex"
          >
            <h2 className=" border border-black font-bold hover:bg-violet-900 bg-violet-700 text-white rounded-lg w-1/2  ">
              {firstName} <span> {lastName} </span>{" "}
            </h2>
          </Link>
          <hr className="border-solid border border-black" />
          <div className="items-start justify-start p-1  bg-sky-50 rounded-lg ">
            <p>
              <span className="my-font ">Email:</span>{" "}
              <span className="font-medium">{email}</span>{" "}
            </p>
            <p>
              <span className="my-font">Address: </span>

              <ul className="font-medium">
                <li>{address.address}, </li>
                <li>
                  {address.city}, {address.state}.{" "}
                </li>
                <li>{address.postalCode}.</li>
              </ul>
            </p>
            <p>
              <span className="my-font">Company Name : </span>
              <span className="font-medium">{company.name}.</span>
              <br />
              {/* <span className="font-medium">{company?.title}</span> */}
            </p>
          </div>
          {/* <div className="card-actions justify-end">
            <Link to={`/user/${id}`} className="cursor-pointer ">
              <button className="btn btn-primary font-bold hover:bg-violet-900 text-white">
                View Details
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default User;
