import { assets } from "../assets/assets";

const Footer = () => {
   return (
      <footer>
         <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div>
               <img src={assets.logo} alt="logo" className="mb-5 w-32" />
               <p className="text-gray-400 md:w-2/3 w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>

            <div>
               <p className="text-xl font-medium mb-5">COMPANY</p>
               <ul className="flex flex-col gap-1 text-gray-600">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Delivery</li>
                  <li>Privacy Policy</li>
               </ul>
            </div>

            <div>
               <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
               <ul className="flex flex-col gap-1 text-gray-600">
                  <li>+880 18757-78050</li>
                  <li>mdarmankhan6252@gmail.com</li>
               </ul>
            </div>

         </div>

         <div>
            <hr className="text-gray-400"/>
            <p className="text-center py-5 text-sm">Copyright {new Date().getFullYear()} © forever.com - All Right Reserved!</p>
         </div>

      </footer>
   );
};

export default Footer;