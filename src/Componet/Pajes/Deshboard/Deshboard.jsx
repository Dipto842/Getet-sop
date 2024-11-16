import { Outlet } from "react-router-dom";

const Deshboard = () => {
  return (
    <div>
      <div>
        <ul>
          <li>Product Add</li>
        </ul>
      </div>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Deshboard;
