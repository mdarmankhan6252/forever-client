import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
   const [visible, setVisible] = useState(false);
   const { setShowSearch } = useContext(ShopContext);
   const navigate = useNavigate();




   return (
      <nav className="flex items-center justify-between py-5 font-medium">
         <Link to='/'>
            <img src={assets.logo} alt="logo" className="w-36" />
         </Link>

         <ul className="hidden sm:flex gap-5 text-sm text-gray-700">

            <NavLink to='/' className="flex flex-col items-center gap-1 uppercase" >
               <span>Home</span>
               <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
            </NavLink>

            <NavLink to='/collection' className="flex flex-col items-center gap-1 uppercase" >
               <span>Collection</span>
               <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
            </NavLink>

            <NavLink to='/about' className="flex flex-col items-center gap-1 uppercase" >
               <span>About</span>
               <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
            </NavLink>

            <NavLink to='/contact' className="flex flex-col items-center gap-1 uppercase" >
               <span>contact</span>
               <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
            </NavLink>

         </ul>

         <div className="flex items-center gap-6">
            <img onClick={() => { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} alt="search_icon" className="w-5 cursor-pointer" />
            <div className="group relative">
               <img src={assets.profile_icon} alt="" className="w-5 cursor-pointer" />
               <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                  <div className="flex flex-col gap-2 w-36  py-3 px-5 bg-slate-100 text-gray-500">
                     <p className="cursor-pointer hover:text-black">My Profile</p>
                     <p className="cursor-pointer hover:text-black">Orders</p>
                     <p className="cursor-pointer hover:text-black">Logout</p>
                  </div>

               </div>
            </div>

            <Link to='/cart' className="relative">
               <img src={assets.cart_icon} alt="cart_icon" className="w-5 min-w-5" />
               <p className="absolute right-[-5px] -bottom-[6px] text-center w-4  leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
            </Link>

            <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="menu" className="w-5 cursor-pointer sm:hidden" />
         </div>

         {/* side bar menu for small screen. */}

         <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className="flex flex-col text-gray-600">
               <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                  <img src={assets.dropdown_icon} className="h4 rotate-180" />
                  <p>Back</p>
               </div>

               <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/'>HOME</NavLink>
               <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/collection'>collection</NavLink>
               <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/about'>about</NavLink>
               <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/contact'>contact</NavLink>
            </div>
         </div>

      </nav>
   );
};

export default Navbar;