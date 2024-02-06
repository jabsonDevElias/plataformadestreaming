import React from 'react';
import HeaderLogin from '../HeaderLogin';
import defaultImg from '../img/default.png';
import { faBell, faGear, faInfoCircle, faPenToSquare, faPhone, faStar, faTv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Usuario() {

   return (
      <>
         <HeaderLogin tipo="perfil" />
         <div className='container  pt-5 text-light d-flex ps-5 flex-wrap justify-content-between'>
            <div className='col-5 d-content  mt-5'>
               <div className='col-12 d-flex align-items-center'>
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

               <div className='col-12 mt-4'>
                  <div class="input-group">
                     <span class="input-group-text bg-warning" id="basic-addon1">@</span>
                     <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" disabled/>
                  </div>
               </div>

               <div className='col-12 mt-4'>
                  <div class="input-group">
                     <span class="input-group-text bg-warning" id="basic-addon1"><FontAwesomeIcon icon={faPhone}/></span>
                     <input type="text" class="form-control border" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" disabled/>
                  </div>
               </div>

            </div>

            <div className='d-flex flex-wrap col-6 mt-5'>
               <h5><FontAwesomeIcon icon={faStar} /> Favoritos</h5>
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
               <h5><FontAwesomeIcon icon={faTv} /> Telas</h5>
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
