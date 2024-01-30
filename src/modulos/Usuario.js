import React from 'react';
import HeaderLogin from './HeaderLogin';
import defaultImg from './img/default.png';
import { faGear,faInfoCircle, faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Usuario() {

  return(
    <>
    <HeaderLogin tipo="perfil"/>
    <div className='container  pt-5 text-light d-flex ps-5 flex-wrap position-relative'>  
           <div className='col-12 d-flex align-items-center'>
              <img src={defaultImg} class="col-1 rounded-circle" alt="..."/>
              <div className='col-12 ps-3'>
                 <h1>Nome do Perfil</h1>
                 <ul className='col-2 d-flex bg-success justify-content-between text-start'>
                    <li className='col-4 bg-danger'><a href='#'><FontAwesomeIcon icon={faGear}/></a></li>
                    <li className='col-4 bg-danger'><a href='#'><FontAwesomeIcon icon={faPenToSquare}/></a></li>
                    <li className='col-4 bg-danger'><a href='#'><FontAwesomeIcon icon={faInfoCircle}/></a></li>
                 </ul>
              </div>
           </div>
    </div>
    </>
  );

}

export default Usuario;
