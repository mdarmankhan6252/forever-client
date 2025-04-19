import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
   const { _id, image, name, price } = item;
   const { currency } = useContext(ShopContext);

   return (
      <Link className="text-gray-700 cursor-pointer " to={`/product/${_id}`}>
         <div className="overflow-hidden">
            <img src={image[0]} alt="image" className="hover:scale-105 transition ease-in-out" />
         </div>
         <p className="pt-3 pb-1 text-sm">{name}</p>
         <p className="text-sm font-semibold">{currency}{price}</p>

      </Link>
   );
};

export default ProductItem;