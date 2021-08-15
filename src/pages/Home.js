import img from './img2.jpg'
import './Home.css'
import { Carousel } from "../components/Carousel";

function Home() {
    return (
      <div className='body'>
         <div style={{ fontSize: '50px', zIndex:"-1", position:"relative", top:"-80px"}}>
        <img className='imageStyle' src={img} style={{width:'100%', height:"1000px"}} alt='batman'></img>
        
      </div>
      <div style={{top:"-450px", position:'relative'}}>
          <h1 className='headings'>Trending Now</h1>
          
        </div>
      
      </div>
     
    );
  }


  export default Home;