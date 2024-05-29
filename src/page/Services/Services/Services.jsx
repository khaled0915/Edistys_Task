
import linePng from '../../../assets/images/lines.png'
import grid1 from '../../../assets/images/grid1.png'
import grid2 from '../../../assets/images/grid2.png'
import grid3 from '../../../assets/images/grid3.png'
import grid4 from '../../../assets/images/grid4.png'
import grid5 from '../../../assets/images/grid5.png'
import grid6 from '../../../assets/images/grid6.png'
import Abroad from '../Abroad/Abroad'
import Step from '../Step/Step'

const Services = () => {
    return (
        <div>

<div>
    
<h2 className="text-center font-semibold text-[30px] md:text-[47px] " > 
                
                EXPLORE THE WORLD WITH<br />
                 
                <span className="text-[#5932C9]   "> 
                
                BM ABROAD DREAMERS 
                </span>
 
 
                
                  </h2>
 
                  <img className=' mx-auto  hidden lg:block  ' src={linePng} alt="" />
 
 
 
                  {/* <div className='mt-10 grid grid-cols-12 '>
                     <div className="row-span-1 col-span-8 w-full h-full translate-y-[50px] rounded-[8px] object-cover lg:col-span-4 lg:row-span-3 lg:rounded-lg">
 
                         <img src={grid1} alt="" />
 
                         </div>
 
                         <div className='col-span-4 row-span-1 w-full h-full translate-y-[50px] rounded-[8px] object-cover lg:col-span-5 lg:row-span-2 lg:rounded-lg '>
                         <img src={grid2} alt="" />
                         </div>
 
                         <div className='col-span-5 row-span-2 h-full w-full translate-y-[50px] rounded-[8px] object-cover lg:col-span-3 lg:row-span-2 lg:rounded-lg  '>
                         <img src={grid3} alt="" />
                         </div>
 
                         <div className='col-span-6 row-span-1 h-full w-full translate-y-[50px] rounded-[8px] object-cover lg:col-span-4 lg:row-span-2 lg:rounded-lg  '>
                         <img src={grid4} alt="" />
                         </div>
 
                        <div className='col-span-7 row-span-2 h-full w-full translate-y-[50px] rounded-[8px] object-cover lg:col-span-3 lg:row-span-3 lg:rounded-lg '>
                        <img src={grid5} alt="" />
                        </div>
 
 
                         <div className='row-span-1 h-full w-full translate-y-[50px] rounded-[8px] object-cover lg:col-span-5 lg:row-span-3 lg:rounded-lg'>
                         <img src={grid6} alt="" />
                         </div>
                         
                     
                  </div> */}
 
 
                  <h2 className='mt-20 mb-20 text-center max-w-lg mx-auto text-[24px] font-medium  '> We offer a diverse range of services to cater to your aspirations. Whether you're planning to study abroad or embark on a memorable tourism adventure, we've got you covered. </h2>
</div>



                 <div className='mt-10'>

                 <Abroad></Abroad>

                 <Step></Step>

                 </div>






            
        </div>
    );
};

export default Services;