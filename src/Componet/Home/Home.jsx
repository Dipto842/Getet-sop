import Benar from "../Pajes/HomePages/Benar";
import Products from "../Pajes/HomePages/Products/Products";
import Reviwes from "../Pajes/HomePages/UserRevus/Reviwes";


const Home = () => {
    return (
        <div className="min-h-screen">
          <div className="">
          <Benar></Benar>
       <div>
        <h3 className="text-2xl text-center font-bold mt-9 mb-6"> Products</h3>
       <Products></Products>
       </div>
<div>
<h3 className="text-2xl text-center font-bold mt-9 mb-6"> User review</h3>
  <Reviwes></Reviwes>
</div>
          </div>
        </div>
    );
};

export default Home;