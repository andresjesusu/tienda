import React from 'react';
import "./Footer.css"


const Footer = () => {
   
    return (
      <>
       <div className="main-footer">
           <div className="container">
               <div className="row">
                   {/* {columna1} */}
                   <div className="col">
                       <h4>Informacion</h4>
                       <ul className="list-unstyled">
                           <li><a href="tel:+34678567876">11-31767080</a></li>
                           <li>Av Forest 435</li>
                           <li>Buenos Aires, Argentina</li>
                           <li><a href="mailto:elcorreoquequieres@correo.com">andresjesusu@gmail.com</a></li>
                        </ul>
                    </div>
                   {/* {columna2} */}
                   <div className="col">
                       <h4>Categorias</h4>
                       <ul className="list-unstyled">
                           <li>SWITCH</li>
                           <li>PS4</li>
                           <li>PC STEAM</li>
                        </ul>
                    </div>
                   {/* {columna3} */}
                   <div className="col">
                       <h4>ARMA TU PC</h4>
                       <ul className="list-unstyled">
                           <li>COTIZAR PC</li>
                           <li>VENDE TU PC</li>
                           <li>COTIZAR ENVIOS</li>
                        </ul>
                    </div>
               </div>
               <hr />
               <div className="row">
                   <p className="col-sm">
                       &copy;{new Date().getFullYear()} <a href="">Trabajá con nosotros</a> | <a href="">Términos y condiciones</a> | <a href="">Ayuda</a> | <a href="">Defensa del Consumidor</a>
                    </p>

               </div>
           </div>
        </div>
      </>
    );
  };
  
  export default Footer;