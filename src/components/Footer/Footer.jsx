import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer class="section-p1">
        <div class="col">
            
            <h4>Contacto</h4>
            <p><strong>Dirección: </strong>Cnel Brandsen 9999. Wilde (Avellaneda). Buenos Aires.</p>
            <p><strong>Teléfono: </strong>+54 9 11 25838529. -- +54 9 11 26748574.</p>
                    
        </div>

        <div class="col">
            <h4>Acerca de</h4>
            <a href="about.html">Nosotros</a>
            <a href="about.html" id="btn-envios">Envios a domicilio</a>
            <a href="contact.html">Contacto</a>
        </div>

        <div class="col">
            <h4>Mi cuenta</h4>
            <a href="sign-in.html">Ingresar</a>
            <a href="carrito.html">Ver carrito</a>       
        </div>

        <div class="col">
            <h4>Medios de pago</h4>
            <p>Efectivo</p>
            <p>Transferencia</p>
            <p>Mercado Pago</p>
            <p>Cuenta DNI</p>
        </div>   

        <div class="copyright">
            <p>Copyright © 2022. Todos los derechos reservados por Sleepy SRL.</p>
        </div>

    </footer>
  )
}

export default Footer