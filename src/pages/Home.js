import img from './img2.jpg'

function Home() {
    return (
      <div style={{fontSize:"50px", zIndex:"-1", position:"relative", top:"-80px"}}>
        <img src={img} style={{width:'100%', top:"-500px"}}></img>
        Welcome to netflix home
      </div>
    );
  }

  export default Home;