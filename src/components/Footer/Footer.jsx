import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer className="section-p1">
        <div className="col">
            
            <h4>Contacto</h4>
            <p><strong>Dirección: </strong>Cnel Brandsen 9999. Wilde (Avellaneda). Buenos Aires.</p>
            <p><strong>Teléfono: </strong>+54 9 11 25838529. -- +54 9 11 26748574.</p>
                    
        </div>

        <div className="col">
            <h4>Medios de pago</h4>
            <p>Efectivo</p>
            <p>Transferencia</p>
            <p>Mercado Pago</p>
            <p>Cuenta DNI</p>
        </div>   

        <div className="copyright">
            <p>Copyright © 2022. Todos los derechos reservados por Sleepy SRL.</p>
        </div>

    </footer>
  )
}

export default Footer