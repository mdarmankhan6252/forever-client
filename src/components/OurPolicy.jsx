import { assets } from "../assets/assets";

const OurPolicy = () => {
   return (
      <div className="flex flex-col sm:flex-row justify-around gap-12 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">

         <div>
            <img src={assets.exchange_icon} className="w-12 m-auto mb-5" />
            <p className="font-semibold">Easy Exchange Policy</p>
            <p className="text-shadow-gray-500">We offer hassle free exchange policy</p>
         </div>
         <div>
            <img src={assets.quality_icon} className="w-12 m-auto mb-5" />
            <p className="font-semibold">7 Days Return Policy</p>
            <p className="text-shadow-gray-500">We provide 7 days return policy</p>
         </div>
         <div>
            <img src={assets.support_img} className="w-12 m-auto mb-5" />
            <p className="font-semibold">BEst customers support</p>
            <p className="text-shadow-gray-500">We provide 24/7 customers support.</p>
         </div>
         
      </div>
   );
};

export default OurPolicy;