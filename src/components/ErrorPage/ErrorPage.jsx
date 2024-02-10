import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>Oops errors!</h2>

      <Link to="/">
        <button className="btn btn-ghost text-xl bg-fuchsia-500">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
