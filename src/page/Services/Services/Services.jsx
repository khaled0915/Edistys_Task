
import linePng from '../../../assets/images/lines.png'
import grid1 from '../../../assets/images/grid1.png'
import grid2 from '../../../assets/images/grid2.png'
import grid3 from '../../../assets/images/grid3.png'
import grid4 from '../../../assets/images/grid4.png'
import grid5 from '../../../assets/images/grid5.png'
import grid6 from '../../../assets/images/grid6.png'
import Abroad from '../Abroad/Abroad'
import Step from '../Step/Step'
import Tourism from '../Tourism/Tourism'

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
 
 
 
                 
 
 
</div>



                 <div className='mt-10'>

                 <Abroad></Abroad>

                 <Step></Step>
                 <Tourism></Tourism>

                 </div>






            
        </div>
    );
};

export default Services;