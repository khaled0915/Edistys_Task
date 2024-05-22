import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';




// import car from '../../../assets/images/'
const carousel = () => {
    return (
        
          <Carousel>
                <div>
                    <img src="https://i.ibb.co/dmZBK2M/carousel1.webp"/>
                    
                </div>
                <div>
                    <img src= "https://i.ibb.co/SxdZRSf/carousel2.webp"/>
                   
                </div>
                <div>
                    <img src="https://i.ibb.co/QbxwC6j/carousel3.webp" />
                    
                </div>
            </Carousel>
            
        
    );
};

export default carousel;