import '../App.css';
import Imagem from "./default.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faGear,faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
     <div className='col-12 bg-dark text-light p-3 d-flex justify-content-between align-items-center'>
          <div className='col-6 col-md-3 d-flex align-items-center fs-5 text-light'>
             <FontAwesomeIcon icon={faSearch} className='p-1'/>
             <input className='form-control outilened-none focus-visible bg-dark text-light border-0  rounded rounded-0 custom-placeholder-color' type="text" placeholder='Buscar Conteúdo...'/>
             {/* <input className='form-control outilened-none focus-visible bg-dark text-light border-0 border-bottom rounded rounded-0' type="text" placeholder='PESQUISAR'/> */}
          </div>
          <div className='col-4 col-sm-3 col-md-2 text-end d-flex justify-content-between align-items-center'>
             <FontAwesomeIcon  icon={faGear}/>
             <FontAwesomeIcon  icon={faEnvelope}/>
             <div className='circular-div text-light' style={{backgroundImage:`url(${Imagem})`,backgroundSize:'cover'}}></div>
          </div>
     </div>
  );
}

export default App;
