
import abroad from '../../../assets/images/abroad.png'
import cal from '../../../assets/icons/calender.svg'
import home from '../../../assets/icons/home.svg'
import loc from '../../../assets/icons/loc.svg'
import path from '../../../assets/icons/path.svg'
const Abroad = () => {
    return (
        <div>
            <div className='border-l-8 mt-10 mb-10 border-[#764AF1] '>

<h1 className="text-[54px] ml-4 font-bold"> STUDY ABROAD SERVICES </h1>
  <small className='
  text-[#BEBEBE] ml-4  text-[12px] md:text-[16px] '>we're dedicated to making your study abroad journey seamless and successful</small>
</div>


<div className="hero min-h-screen ">
  <div className="hero-content gap-10 flex-col lg:flex-row-reverse">

    <img src={abroad} className="max-w-xl    rounded-lg object-cover" />
    <div>


   <div>
   <div className='flex gap-5 items-center '>
     <img src={cal} alt="" />
     <h1 className="text-[24px] text-[#290886]  font-semibold">Prioritizing Your Voice:</h1>
     
     </div>

      <p className="py-6">We believe in listening first. Your background, dreams, and <br /> goals matter, and they shape the foundation of our <br /> approach.</p>
   </div>
   <div>

   <div className='flex gap-5 items-center '>
     <img src={home} alt="" />
     <h1 className="text-[24px] text-[#290886]  font-semibold">Custom Pathway Design:</h1>
     
     </div>

      <p className="py-6">Your journey is unique, and we recognize that. We work closely with you to create a customized pathway tailored to your specific needs.</p>
   </div>


   <div>
   <div className='flex gap-5 items-center '>
     <img src={loc} alt="" />
     <h1 className="text-[24px] text-[#290886]  font-semibold">Recognition in the Job Market:</h1>
     
     </div>

      <p className="py-6">We equip you with the skills and guidance you need to excel in the job market, ensuring you stand out to prospective employers..</p>
   </div>


   <div>
   <div className='flex gap-5 items-center '>
     <img src={path} alt="" />
     <h1 className="text-[24px] text-[#290886]  font-semibold">Pathway to Residence:</h1>
     
     </div>

      <p className="py-6">For those with dreams of permanent residence, we provide guidance on how your study journey can lead to residency in your dream destination..</p>
   </div>







  
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Abroad;