// App.js


import React from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


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
                  <div className='position-relative z-1 d-flex align-items-end ' style={{height:"100vh"}}>
                    
                    <div className='fs-3 d-flex flex-column'>
                    <h1>{dados[0].title}</h1>
                      <div className='d-flex justify-content-around text-warning'>
                        {avalicao()}
                      </div>
                    </div>

                  </div>
              </div>
              
              {/* <div className="carousel-caption d-none d-md-block text-light text-start">
                <h2 className='position-relative z-3'>{dados[0].title}</h2>
              </div> */}

              {/* <p className='text-light'>{dados[0].overview}</p> */}

              <div className="gradient-overlay"></div>
        </div>
        )}
      </>
  );
};

export default SobreConteudo;
