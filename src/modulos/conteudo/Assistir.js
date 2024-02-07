import React from 'react';
import HeaderLogin from '../HeaderLogin';
import { useParams} from 'react-router-dom';
import defaultImg from '../img/default.png';
import { faBell, faGear, faInfoCircle, faPenToSquare, faPhone, faStar, faTv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Watchnow() {
    const { imdb,tipo} = useParams();

    const tipo_definitivo = (tipo == "tv")?"serie":"filme";
    console.log(`https://embed.warezcdn.com/${tipo_definitivo}/${imdb}`);
    
    return (
        <>
            <HeaderLogin tipo="" />
             
            <div class="ratio ratio-21x9">
                <iframe src={`https://embed.warezcdn.com/${tipo_definitivo}/${imdb}`} title="YouTube video" allowfullscreen></iframe>
            </div>
            <div class="gradient-overlay"></div>
        </>
    );

}


export default Watchnow;
