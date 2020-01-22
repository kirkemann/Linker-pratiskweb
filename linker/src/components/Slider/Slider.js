import React from 'react'
import Banner1 from '../img/banner1.png'
import Banner2 from '../img/banner2.jpg'
import Banner3 from '../img/banner3.jpg'


const Intro = () => {
    return ( 
        <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Banner1} className="d-block w-100 " alt="banner 1" />
    </div>
    <div className="carousel-item">
      <img src={Banner2} className="d-block w-100 " alt="banner 2" />
    </div>
    <div className="carousel-item">
      <img src={Banner3} className="d-block w-100 " alt="banner 3" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
     );
}
 
export default Intro;