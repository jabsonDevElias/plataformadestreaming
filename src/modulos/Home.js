import '../App.css';
import React from 'react';
import HeaderLogin from '../modulos/HeaderLogin';
import axios from 'axios';
import Carrossel from "../modulos/Carrosel";
import CarrosselPopulares from "../modulos/CarroselPopulares";



function App() {

  const [dados, setDados] = React.useState([]);
  const [loading, setLoading] = React.useState(true);


  React.useEffect(() => {
    //PEGAR TODOS OS DADOS
    // axios.get('https://api.themoviedb.org/3/movie/popular?api_key=98ebed6ab42773fbcdf81f0a4760c179&language=pt-BR&page=1')
    //   .then(response => {
    //     setDados(response.data.results);
    //   })
    //   .catch(erro => {
    //     console.error('Erro ao buscar dados:', erro);
    //   });

      const fetchData = async () => {
        try {
          // Substitua a URL abaixo pela sua API
          const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=98ebed6ab42773fbcdf81f0a4760c179&language=pt-BR&page=1');  
          setDados(response.data.results);
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();

  }, []);

  

  return (
    
      <>
      {loading ? (
        <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <div className="spinner-border text-warning" role="status">
  
        </div>
        </div>
      ) : (
        <div className='tela-menu d-flex flex-wrap'>

          <HeaderLogin/>
          <Carrossel array={dados}/>
          <div className='col-12 ps-5'>
             <CarrosselPopulares array={dados}/>
          </div>

        </div>
      )}




      </>
  );
}

export default App;
