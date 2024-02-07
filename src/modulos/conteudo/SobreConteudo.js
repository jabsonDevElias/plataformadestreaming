// App.js


import React from 'react';
import axios from 'axios';
import HeaderLogin from '../HeaderLogin';
import { useParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPlayCircle, faStar } from '@fortawesome/free-solid-svg-icons';


const avaliacao = (score) => {
  const tags = [];
    for (let index = 0; index < 5; index++) {
      const maxScore = 10;
      const starPercentage = (score / maxScore) * 100;
      const starValue = index + 1;
      const filled = starValue <= score / 2;

      tags.push(<div className='col-2'><FontAwesomeIcon icon={faStar} className={`${filled ? 'text-warning' : 'text-dark'}`}/></div>);   
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
          const response = await axios.get(`https://api.themoviedb.org/3/${(tipo == 'tv') ? 'tv' : 'movie'}/${idfilme}/external_ids?api_key=98ebed6ab42773fbcdf81f0a4760c179`);
          var imdbId = response.data.imdb_id;
          setImdb(imdbId);
              // Segunda chamada para obter dados com base no imdb_id
          const conteudo = await axios.get(`https://api.themoviedb.org/3/find/${imdbId}?api_key=98ebed6ab42773fbcdf81f0a4760c179&&language=pt-BR&external_source=imdb_id`);
          
          if(tipo == 'movie'){
            setDados(conteudo.data.movie_results);
          }else{
            setDados(conteudo.data.tv_results);
          }
          
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
        <HeaderLogin />
              {/* <img src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${dados[0].backdrop_path}`} className='col-12 image' /> */}
              <div className='col-12 text-light' style={{height:"100vh",backgroundImage:`url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${dados[0].backdrop_path})`,backgroundSize:"cover",backgroundPosition:"center"}}>
                  
                  <div className='position-relative z-1 d-flex align-items-end ' style={{height:"100vh"}}>
                    <div className='fs-3 d-flex flex-column container mb-3 text-center text-md-start'>
                      <h1>{dados[0].title}</h1>
                      <div className='d-flex justify-content-between text-warning col-5 col-md-3 m-auto m-md-0'>
                        {avaliacao(dados[0].vote_average)}
                      </div>
                      <div className='fs-3 d-flex mt-3 align-items-center justify-content-center justify-content-md-between col-5 m-auto m-md-0 mt-md-3 col-md-1'>
                       <button className='btn btn-outline-warning fs-5 fw-bolder me-4' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">LEIA+</button>
                       <a href={`/watchnow/${tipo}/${imdb}`} className='text-warning fs-1'><FontAwesomeIcon  icon={faPlayCircle}/></a>
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
                  <a className="btn-close text-light z-2 fs-3" data-bs-dismiss="offcanvas" aria-label="Close" style={{cursor:"pointer"}}>
                     <FontAwesomeIcon icon={faClose}/>
                  </a>
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
