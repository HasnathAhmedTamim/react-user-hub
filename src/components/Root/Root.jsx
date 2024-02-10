import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div>
      <div className="">
        <Header></Header>
      </div>
      <div className="mx-auto container py-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
