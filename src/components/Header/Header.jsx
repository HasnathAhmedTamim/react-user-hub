import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar  p-4 bg-violet-800 hover:bg-slate-700 mb-14   ">
      <Link to="/">
        <button className="btn btn-ghost text-2xl font-bold text-white hover:bg-violet-600 bg-slate-700">
          Home
        </button>
      </Link>
    </div>
  );
};

export default Header;
