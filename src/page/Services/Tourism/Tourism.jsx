
import tour from '../../../assets/images/tour.png'
import ticket from '../../../assets/images/ticket.png'
import hotel from '../../../assets/images/hotel.png'
import customize from '../../../assets/images/customize.png'
import explore from '../../../assets/images/explore.png'


const Tourism = () => {
    return (
        <div className="mt-10">

               <div className='border-l-8 mt-10 mb-10 border-[#764AF1] '>

<h1 className="text-[54px] ml-4 font-bold"> TOURISM SERVICES
 </h1>
  <small className='
  text-[#BEBEBE] ml-4  text-[12px] md:text-[16px] '>we're also your gateway to unforgettable tourism experiences.
  </small>
</div>





<div className="hero min-h-screen ">
  <div className="hero-content gap-10 flex-col lg:flex-row-reverse">

    <img src={tour} className="max-w-xl    rounded-lg object-cover" />
    <div>


   <div>
   <div className='flex gap-5 items-center '>
     <img className='h[30px] w-[30px] object-contain' src={ticket} alt="" />
     <h1 className="text-[24px] text-[#290886]  font-semibold">Air Ticket Booking:</h1>
     
     </div>

      <p className="py-6">Take the stress out of travel planning with our expert air ticket booking services. We'll find the best flight options that suit your preferences and budget.</p>
   </div>
   <div>

   <div className='flex gap-5 items-center '>
     <img className='h[30px] w-[30px] object-contain' src={hotel} alt="" />
     <h1 className="text-[24px] text-[#290886]  font-semibold">Hotel Selection:</h1>
     
     </div>

      <p className="py-6">est easy knowing that your accommodations are taken care of. Our hotel selection process is meticulous, offering a range of options to match your travel style.</p>
   </div>


   <div>
   <div className='flex gap-5 items-center '>
     <img className='h[30px] w-[30px] object-contain' src={customize} alt="" />
     <h1 className="text-[24px] text-[#290886]  font-semibold">Customized Tour Packages:</h1>
     
     </div>

      <p className="py-6">Your travel experience should be as unique as you are. That's why we offer customized tour packages tailored to your interests and desires.</p>
   </div>


   <div>
   <div className='flex gap-5 items-center '>
     <img className='h[30px] w-[30px] object-contain' src={explore} alt="" />
     <h1 className="text-[24px] text-[#290886]  font-semibold">Effortless Exploration::</h1>
     
     </div>

      <p className="py-6">Leave the logistics to us. We take care of the details, so you can focus on creating incredible memories.</p>
   </div>







  
    </div>
  </div>
</div>













        </div>
    );
};

export default Tourism;