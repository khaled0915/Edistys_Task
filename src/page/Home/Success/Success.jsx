
import success from '../../../assets/images/success.png'
import linePng from '../../../assets/images/lines.png'
const Success = () => {
    return (
        <div className="mt-10 mb-10 rounded-4xl">

<div className="hero min-h-screen  ">

  <div className="hero-content flex-col lg:flex-row bg-white">

    {/* <div className=''>

    <img src={success}


className="max-w-sm rounded-lg " />
    </div> */}

    
    <div className='flex-1 p-5'>
      <h1 className="text-5xl font-bold">READY TO START YOUR <br /> JOURNEY TO  
      
       <span 
       style={{
        backgroundColor : 'linear-gradient(rgb(118, 74, 241), rgb(41, 8, 134))'
        
        
       }}
       className='text-[#5932C9] relative '>   SUCCESS   

         <img className='w-[210px] absolute -right-5  ' src={linePng} alt="" /> 
       
         </span>  
       
        ? </h1>

   


      <p className=" mt-10 mb-10  text[18px] font-medium">At BM Study Dreamers, we believe that education knows no boundaries and success knows no <br />
      limits. With our dedicated <br /> guidance, your journey to success becomes a reality. With every step <br /> you take, we are by your side, providing expert assistance that transcends borders and empowers <br /> you to achieve academic excellence and personal dreams. Your journey to success begins here, with us.

</p>
      <button 
    className="btn border hover:translate-y-1 text-white btn-primary rounded-xl "

    style={{
        background : "linear-gradient(90deg, rgb(118, 74, 241) 0%, rgb(41, 8, 134) 127.39%)"
    }} 
    >Start Now</button>
    </div>


     <div className=''>

    <img src={success}


className="max-w-sm rounded-lg " />
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Success;