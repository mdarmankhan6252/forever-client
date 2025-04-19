import { createContext } from "react";

export const ShopContext = createContext();
import { products } from "../assets/assets";


const ShopContextProvider = ({ children }) => {

   const currency = '$'
   const delivery_fee = 10;


   const value = {
      products,
      currency,
      delivery_fee,

   }

   return (
      <ShopContext.Provider value={value}>
         {children}
      </ShopContext.Provider>
   )
}


export default ShopContextProvider;