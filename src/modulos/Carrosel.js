import React from 'react';

function Carrossel(props){
  return(
    <div className='col-12'>

        <div id="carouselExampleIndicators" className="carousel slide" >

  {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
  <div className="carousel-inner">
    {props.array.slice(0, 5).map((item,key) => {
            var ative = "";
            if(key == 0){
              ative="active";
            }

            return <div className={`carousel-item ${ative}`} key={key}>
              <img src={`https://image.tmdb.org/t/p/w1400_and_h450_multi_faces/${item.backdrop_path}`} className='col-12 image' />
              
              
              <div class="carousel-caption d-none d-md-block text-light text-start">
                <h2 className='position-relative z-3'>{item.title}</h2>
                {/* <p>Some representative placeholder content for the first slide.</p> */}
              </div>



              <div class="gradient-overlay"></div>
            </div>
    })}    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



    </div>
  );
}

export default Carrossel;
