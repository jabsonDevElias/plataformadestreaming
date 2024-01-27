import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CarrosselPopulares(props){

    const settings = {
        dots: false, // Configuração para ocultar os dots
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 10,
    };

  return(
    <div className='col-12'>
    <div className='col-12'>
        <Slider {...settings}>
        
        {props.array.slice(0,20).map(item => {
            return <a href={`conteudo/${props.tipo}/${item.id}`} className='card-conteudo col-2'>
                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} className='col-12 rounded rounded-2'/>
            </a>
        })} 

        {/* Adicione mais slides conforme necessário */}
        </Slider>
    </div> 
        
              {/* {a.map(item => {
                  return <div className='card-conteudo col-2 bg-primary rounded rounded-2' style={{height:"25vh"}}></div>
              })} */}
    
    </div>
  );
}

export default CarrosselPopulares;
