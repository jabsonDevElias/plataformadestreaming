import React from 'react';
import HeaderLogin from './HeaderLogin';
import defaultImg from './img/default.png';
import { faBell, faGear, faInfoCircle, faPenToSquare, faStar, faTv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Usuario() {

   return (
      <>
         <HeaderLogin tipo="perfil" />
         <div className='container  pt-5 text-light d-flex ps-5 flex-wrap position-relative'>
            <div className='col-6 d-flex align-items-center mt-5'>
               <img src={defaultImg} class="col-2 rounded-circle" alt="..." />
               <div className='col-12 ps-3'>
                  <h2>Nome do Perfil</h2>
                  <ul className='col-3 d-flex justify-content-between text-start p-0'>
                     <li className='col-4'><a href='#' className='text-light'><FontAwesomeIcon icon={faGear} /></a></li>
                     <li className='col-4'><a href='#' className='text-light'><FontAwesomeIcon icon={faPenToSquare} /></a></li>
                     <li className='col-4'><a href='#' className='text-light'><FontAwesomeIcon icon={faBell} /></a></li>
                  </ul>
               </div>


            </div>

            <div className='d-flex flex-wrap col-6 mt-5'>
               <h5><FontAwesomeIcon icon={faStar}/> Favoritos</h5>
               <table class="table">
                  <tbody>
                     <tr>
                        <th scope="row">1</th>
                        <td>Filme 1</td>
                     </tr>
                     <tr>
                        <th scope="row">2</th>
                        <td>Filme 2</td>
                     </tr>
                     <tr>
                        <th scope="row">3</th>
                        <td>Filme 3</td>
                     </tr>
                     <tr>
                        <th scope="row">4</th>
                        <td>Filme 4</td>
                     </tr>
                     <tr>
                        <th scope="row">5</th>
                        <td>Filme 5</td>
                     </tr>
                  </tbody>
               </table>
               <h5><FontAwesomeIcon icon={faTv}/> Telas</h5>
               <table class="table">
                  <tbody>
                     <tr>
                        <th scope="row">1</th>
                        <td>Tela 1</td>
                     </tr>
                     <tr>
                        <th scope="row">2</th>
                        <td>Tela 2</td>
                     </tr>
                     <tr>
                        <th scope="row">3</th>
                        <td>Tela 3</td>
                     </tr>
                     <tr>
                        <th scope="row">4</th>
                        <td>Tela 4</td>
                     </tr>
                     <tr>
                        <th scope="row">5</th>
                        <td>Tela 5</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </>
   );

}

export default Usuario;
