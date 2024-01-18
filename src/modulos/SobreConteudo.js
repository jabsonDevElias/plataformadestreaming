// App.js


import React from 'react';
import axios from 'axios';
import HeaderLogin from './HeaderLogin';
import { useParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faStar } from '@fortawesome/free-solid-svg-icons';


const avalicao = () => {
  const tags = [];
    for (let index = 0; index < 5; index++) {
      tags.push(<FontAwesomeIcon icon={faStar}/>);   
    }

    return tags;
}

const SobreConteudo = () => {
    const [imdb, setImdb] = React.useState();
    const [dados, setDados] = React.useState([]);
    const { idfilme,tipo } = useParams();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {    
      const fetchData = async () => {
        try {
          // Primeira chamada para obter imdb_id
          const response = await axios.get(`https://api.themoviedb.org/3/${(tipo === 'serie') ? 'tv' : 'movie'}/${idfilme}/external_ids?api_key=98ebed6ab42773fbcdf81f0a4760c179`);
          const imdbId = response.data.imdb_id;
    
          // Segunda chamada para obter dados com base no imdb_id
          const conteudo = await axios.get(`https://api.themoviedb.org/3/find/${imdbId}?api_key=98ebed6ab42773fbcdf81f0a4760c179&&language=pt-BR&external_source=imdb_id`);
          setDados(conteudo.data.movie_results);
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        } finally {
          setLoading(false);
        }
      };
    
      fetchData();
    
    }, [tipo, idfilme]); // Dependências do useEffect
    
  

  return (
      <>
            {loading ? (
        <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <div className="spinner-border text-warning" role="status">
  
        </div>
        </div>
      ) : (
        <div className="col-12">
            
              {/* <img src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${dados[0].backdrop_path}`} className='col-12 image' /> */}
              <div className='col-12 text-light' style={{height:"100vh",backgroundImage:`url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${dados[0].backdrop_path})`,backgroundSize:"cover",backgroundPosition:"center"}}>
                  <HeaderLogin className="z-1"/>
                  <div className='position-relative z-2 d-flex align-items-end ' style={{height:"100vh"}}>
                    <div className='fs-3 d-flex flex-column container mb-3 text-center text-md-start'>
                      <h1>{dados[0].title}</h1>
                      <div className='d-flex justify-content-around text-warning col-5 col-md-3 m-auto m-md-0 m-md-2'>
                        {avalicao()}
                      </div>
                      <div className='fs-3 d-flex mt-3 align-items-center justify-content-center justify-content-md-between col-5 m-auto m-md-0 mt-md-3 col-md-1'>
                       <button className='btn btn-outline-warning fs-5 fw-bolder me-4' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">LEIA+</button>
                       <a href="#" className='text-warning fs-1'><FontAwesomeIcon  icon={faPlayCircle}/></a>
                    </div>
                    </div>
 
                  </div>
              </div>
              
              {/* <div className="carousel-caption d-none d-md-block text-light text-start">
                <h2 className='position-relative z-3'>{dados[0].title}</h2>
              </div> */}

              {/* <p className='text-light'>{dados[0].overview}</p> */}
               
              <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" style={{background:"#000"}}>
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title text-light" id="offcanvasWithBothOptionsLabel"></h5>
                  <button type="button" className="btn-close text-light z-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body fw-light text-light">
                  <p style={{textAlign:"justify",textIndent:"1.5em"}}>{dados[0].overview}</p>
                </div>
                <div className="gradient-overlay"></div>
              </div>

              <div className="gradient-overlay"></div>
        </div>
        )}
      </>
  );
};

export default SobreConteudo;
