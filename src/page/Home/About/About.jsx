import linePic from '../../../assets/images/lines.png'
import about2 from '../../../assets/images/about2.png'
import about1 from '../../../assets/images/about.png'

const About = () => {
    return (



        
        <div className="my-10 ">
            
           <h1 className="text-center font-semibold text-[50px]"> STEP INTO A GLOBAL EDUCATION ODYSSEY WITH <br />

OUR EXPERTS  
 <span className="text-[#341982]  font-bold  "> STUDY ABROAD </span> 
GUIDANCE </h1>

 <img src={linePic} alt="" className='mx-auto  hidden lg:block' />



 <div className="hero my-10 min-h-screen bg-white relative ">


{/* <img className='absolute -t left-0 w-full ' src={about1} alt="" /> */}

  <div className="hero-content p-5 flex-col-reverse lg:flex-row-reverse">

    <div className='flex-1'>

    <img src={about2} className=" rounded-lg " />
    </div>

   

    <div className='flex-1'>

        
    <div className='border-l-8 mt-10 border-[#764AF1] '>

    <h1 className="text-[64px] ml-4 font-bold"> About Us </h1>
      <small className='
      text-[#BEBEBE] ml-4  text-[12px] md:text-[16px] '>Archive your Dream with BM ABROAD DREAMERS</small>
    </div>



      <p className='mt-10 text-[18px]'>Embarking on an educational journey in a foreign land is akin to stepping onto a canvas brimming with boundless possibilities. It is a realm where aspirations unfurl their wings and horizons stretch far beyond the realms of imagination. Founded in 2021, BM Abroad Dreamers transcends the role of mere consultancy; it stands as a harmonious orchestration of ambitions, a conduit that binds your dreams with the realm of world-class education you so rightly deserve. Yet, we are far from being conventional educational consultants; rather, we are artisans of dreams, architects of experiences, and your steadfast collaborators in the transformation of reveries into tangible reality.</p>

      
     
    </div>
  </div>

  
</div>







        </div>
    );
};

export default About;
