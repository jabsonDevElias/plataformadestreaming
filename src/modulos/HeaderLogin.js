import React from 'react';
import { faFilm, faHome, faSmile, faTv, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function HeaderLogin(props) {



  return(
    <div className='col-12 d-flex justify-content-center position-absolute z-1'>
        <div className='col-6 d-flex justify-content-around pt-2 pb-2 '>
            <a href="/" className={`col-2  text-center ${(props.tipo == "/")?"text-warning":"text-light"}`}>
                <FontAwesomeIcon icon={faHome} />            
            </a>
            <a href="/filmes" className={`col-2  text-center ${(props.tipo == "filmes")?"text-warning":"text-light"}`}>
                <FontAwesomeIcon icon={faFilm} />            
            </a>
            <a href="/series" className={`col-2  text-center ${(props.tipo == "series")?"text-warning":"text-light"}`}>
                <FontAwesomeIcon icon={faTv} />            
            </a>
            <a href="/perfil" className={`col-2  text-center ${(props.tipo == "perfil")?"text-warning":"text-light"}`}>
                <FontAwesomeIcon icon={faSmile} />            
            </a>
        </div>
    </div>
  );
}

export default HeaderLogin;
