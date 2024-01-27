
import React from 'react';
import HeaderLogin from '../modulos/HeaderLogin';
import CarrosselPopulares from "../modulos/CarroselPopulares";
import ListarTodos from "../modulos/ListarTodos";
import axios from 'axios';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams} from 'react-router-dom';


const Filmes = () => {


    const [dados, setDados] = React.useState([]);
    const [dadosCarrossel, setDadosCarrossel] = React.useState([]);
    const [buscar, setBuscar] = React.useState("");
    const [api, setApi] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [paginas, setPaginas] = React.useState(1);
    const [pagina,setPagina] = React.useState(1);
    const [numpaginas, setNumPaginas] = React.useState(1);
    const [coun_pagina,setCount] = React.useState(1);
    const [num_pagina,setNumPagina] = React.useState(15);

    const { idfilme } = useParams();
    
    React.useEffect(() => {
      //PEGAR TODOS OS DADOS
  
        const fetchData = async () => {
          try {
          

            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=98ebed6ab42773fbcdf81f0a4760c179&language=pt-BR&page=${pagina}`);  

            setDadosCarrossel(response.data.results);
            

          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
  
    }, [dadosCarrossel]);
  
    React.useEffect(() => {
      //PEGAR TODOS OS DADOS
  
        const fetchData = async () => {
          try {
            
            // Substitua a URL abaixo pela sua API

            // https://api.themoviedb.org/3/search/tv?query=Percy&api_key=98ebed6ab42773fbcdf81f0a4760c179
            
            setApi(`https://api.themoviedb.org/3/movie/popular?api_key=98ebed6ab42773fbcdf81f0a4760c179&language=pt-BR&page=${pagina}`);

            if(buscar.length > 0){
              setApi(`https://api.themoviedb.org/3/search/movie?query=${buscar}&api_key=98ebed6ab42773fbcdf81f0a4760c179&language=pt-BR&page=${pagina}`);
            }else{
              setBuscar("");
            }

            const response = await axios.get(api);  


            setDados(response.data.results);
            setPaginas(response.data.total_pages);
            

          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
  
    }, [pagina,buscar,api]);


    var qtd_paginas = paginas; //qtd de paginas   
  
    var paginacao = [];

    for (let i = coun_pagina; i < qtd_paginas; i++) { 
    
      paginacao.push(i);
  
      if(i >= num_pagina){
        break;
      } 
      
    }

    //EVITA QUE A PAGINAÇÃO FIQUE NEGATIVA
    if(pagina <= 0){
      setPagina(1);
      setCount(1);
    }

  return (
    <>
                {loading ? (
        <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <div className="spinner-border text-warning" role="status">
  
        </div>
        </div>
      ) : (
      <>
      <HeaderLogin/>
      <div className='container  pt-5 text-light d-flex ps-5 flex-wrap position-relative'>  
         <h3 className='col-12 mt-5'>Últimos Lançamentos</h3>  
         <div className='col-12'>
            <CarrosselPopulares array={dadosCarrossel}/>
         </div>
      </div>

      <div className='container mt-5 ps-5'>
        <div className='col-12 d-flex text-light border-bottom m-auto'>
        <div className='d-flex align-items-center justify-content-start pe-3'>
          <FontAwesomeIcon icon={faSearch}/>
        </div>
        <div className='col-12'>
         <input type="text" className='form-control border border-0 text-light' placeholder='PESQUISAR...' style={{backgroundColor:'#000'}} value={buscar} onChange={(e)=>setBuscar(e.target.value)}/>
        </div>
        </div>
      </div>

      <div className='container  pt-5 text-light d-flex  flex-wrap position-relative'>  
         <div className='col-12'>
            <ListarTodos array={dados} tipo="movie"/>
         </div>
      </div>
       
       

      <div className='col-12 d-flex justify-content-center pt-5 pb-4'>
      <h1 className='text-ligth'>{pagina}</h1>
       {
        paginacao.length > 1 ? (
          <nav aria-label="Page navigation">
          <ul class="pagination pagination-warning">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous" onClick={()=>{if(num_pagina > 5){setNumPagina(num_pagina-1);setCount(coun_pagina-1);setPagina(pagina-1)}}}>
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
          {
            paginacao.map((item,key)=>
            <li key={key} class={(item === pagina)?"page-item active bg-warning":"page-item"}><a class={(item === pagina)?"page-link active bg-warning border border-0":"page-link"} href="#" onClick={()=>setPagina(item)} value={item}>{item}</a></li>          )
          }
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next" onClick={()=>{setNumPagina(num_pagina+1);setCount(coun_pagina+1);setPagina(pagina+1)}}>
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
        ):(
          <></>
        )
       }

      </div>
      </>
      )}
      </>
  );
};

export default Filmes;
