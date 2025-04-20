import React from 'react';

const NewsletterBox = () => {
   const onSubmitHandler = (e) =>{
      e.preventDefault();

   }
   return (
      <div className='text-center'>
         <h4 className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off!</h4>
         <p className='text-gray-400 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
         <form onSubmit={onSubmitHandler} className='w-full sm:h-1/2 flex items-center gap-3 my-6 border pl-3 border-gray-200 max-w-2xl mx-auto'>
            <input type="email" name="email" required className='w-full sm: grow outline-0 uppercase' />
            <button type='submit' className='bg-black text-white text-sm px-10 py-4'>subscribe</button>
         </form>
         
      </div>
   );
};

export default NewsletterBox;