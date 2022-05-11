import img from './img2.jpg'
import './Home.css'
import Slider from '../components/slider/slider'
import {Data} from '../data'

function Home() {
  let a = [...Object.values(Data)]
    return (
      <>
      <div className='body'>
         <div style={{ fontSize: '50px', zIndex:"-1", position:"relative", top:"-80px"}}>
        <img className='imageStyle' src={img} style={{width:'100%', height:"1000px"}} alt='batman'></img>
        
      </div>
      
      <div style={{top:"-250px", position:'relative'}}>
          <h1 className='headings'>Trending Now</h1>
          <Slider movies={[...a]} />
          <h1 className='headings'>Popular</h1>
          <Slider movies={[...a]} />
        </div>
      
      </div>
     
      </>
     
    );
  }


  export default Home;

  /*
     
  */ 