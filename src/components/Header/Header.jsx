import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar  p-7 bg-slate-200 mb-14 flex justify-end  ">
      <Link to="/">
        <button className="btn btn-ghost text-2xl font-bold text-white hover:bg-violet-600 bg-slate-700">
          Home
        </button>
      </Link>
    </div>
  );
};

export default Header;
