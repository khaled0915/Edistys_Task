import card1 from '../../../assets/images/card1.png'
import card2 from '../../../assets/images/card2.png'
import card3 from '../../../assets/images/card3.png'
import card4 from '../../../assets/images/card4.png'
import card5 from '../../../assets/images/card5.png'
import card6 from '../../../assets/images/card6.png'
import card7 from '../../../assets/images/card7.png'
import card8 from '../../../assets/images/card8.png'

const Card = () => {
    return (
        <div className="my-10 grid gap-5 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 ">
{/* 1st card */}


<div className="card  transition-colors duration-300 hover:bg-[#5956e6] hover:text-white border rounded-3xl  " 
style={{ boxShadow: '#5956e61a 0px 30px 60px 0px' }}
>
  <figure className="px-10 transition-transform duration-300 hover:scale-105 pt-10">
    <img src={card1} alt="Shoes" className="rounded-xl w-[150px] " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[24px] font-bold my-3 "> VISA PROCESS  </h2>
    <p className=''>We assist students in navigating the complex visa application process for their chosen study abroad</p>
    
  </div>
</div>
{/* 2nd card */}
<div className="card  transition-colors duration-300 hover:bg-[#5956e6] hover:text-white border rounded-3xl  " 
style={{ boxShadow: '#5956e61a 0px 30px 60px 0px' }}
>
  <figure className="px-10 transition-transform duration-300 hover:scale-105 pt-10">
    <img src={card2} alt="Shoes" className="rounded-xl w-[150px] " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[24px] font-bold my-3 "> UNIVERSITY SELECTION
  </h2>
    <p className=''>We help students find the perfect university that aligns with their academic goals and preferences</p>
    
  </div>
</div>

{/* 3rd card */}

<div className="card  transition-colors duration-300 hover:bg-[#5956e6] hover:text-white border rounded-3xl  " 
style={{ boxShadow: '#5956e61a 0px 30px 60px 0px' }}
>
  <figure className="px-10 transition-transform duration-300 hover:scale-105 pt-10">
    <img src={card3} alt="Shoes" className="rounded-xl w-[150px] " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[24px] font-bold my-3 ">INITIAL CONSULTATION  </h2>
    <p className=''>Our team provides best personalized guidance to help students understand their opportunities</p>
    
  </div>
</div>

{/* 4th card */}
<div className="card  transition-colors duration-300 hover:bg-[#5956e6] hover:text-white border rounded-3xl  " 
style={{ boxShadow: '#5956e61a 0px 30px 60px 0px' }}
>
  <figure className="px-10 transition-transform duration-300 hover:scale-105 pt-10">
    <img src={card4} alt="Shoes" className="rounded-xl w-[150px] " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[24px] font-bold my-3 "> ADMISSION GUIDANCE </h2>
    <p className=''>We offer expert advice to ensure students submit strong applications to their desired universities.</p>
    
  </div>
</div>

{/* 5th card */}

<div className="card  transition-colors duration-300 hover:bg-[#5956e6] hover:text-white border rounded-3xl  " 
style={{ boxShadow: '#5956e61a 0px 30px 60px 0px' }}
>
  <figure className="px-10 transition-transform duration-300 hover:scale-105 pt-10">
    <img src={card5} alt="Shoes" className="rounded-xl w-[150px] " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[24px] font-bold my-3 "> CAREER COUNSELING </h2>
    <p className=''>We provide students understand how their chosen study program can can lead to their future career goals</p>
    
  </div>
</div>

{/* 6th card */}
<div className="card  transition-colors duration-300 hover:bg-[#5956e6] hover:text-white border rounded-3xl  " 
style={{ boxShadow: '#5956e61a 0px 30px 60px 0px' }}
>
  <figure className="px-10 transition-transform duration-300 hover:scale-105 pt-10">
    <img src={card6} alt="Shoes" className="rounded-xl w-[150px] " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[24px] font-bold my-3 "> EDUCATION COUNSELING </h2>
    <p className=''>Our experienced counselors offer guidance on various study programs and help students make decisions</p>
    
  </div>
</div>

{/* 7th card */}
<div className="card  transition-colors duration-300 hover:bg-[#5956e6] hover:text-white border rounded-3xl  " 
style={{ boxShadow: '#5956e61a 0px 30px 60px 0px' }}
>
  <figure className="px-10 transition-transform duration-300 hover:scale-105 pt-10">
    <img src={card7} alt="Shoes" className="rounded-xl w-[150px] " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[24px] font-bold my-3 "> APPLICATION PLACEMENT </h2>
    <p className=''>We assist students in submitting their applications to universities with all necessary documentsd</p>
    
  </div>
</div>


{/* 8th card */}
<div className="card  transition-colors duration-300 hover:bg-[#5956e6] hover:text-white border rounded-3xl  " 
style={{ boxShadow: '#5956e61a 0px 30px 60px 0px' }}
>
  <figure className="px-10 transition-transform duration-300 hover:scale-105 pt-10">
    <img src={card8} alt="Shoes" className="rounded-xl w-[150px] " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[24px] font-bold my-3 "> EXPERT VISA SERVICES  </h2>
    <p className=''>Our team of experts guides students through the visa application process, minimizing the chances of rejection.</p>
    
  </div>
</div>
            
        </div>
    );
};

export default Card;