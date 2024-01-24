import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function CarrosselPopulares(props){

    const settings = {
        dots: false, // Configuração para ocultar os dots
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 10,
    };

  return(
    <>
    <div className='col-12 d-flex flex-wrap'>        
        {props.array.map(item => {
            return <a href={`conteudo/${props.tipo}/${item.id}`} className='card-conteudo col-2'>
                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} className='col-12 rounded rounded-2'/>
            </a>
        })} 
    </div> 
        
              {/* {a.map(item => {
                  return <div className='card-conteudo col-2 bg-primary rounded rounded-2' style={{height:"25vh"}}></div>
              })} */}
    
    </>
  );
}

export default CarrosselPopulares;
