import React from "react";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";


const Form = ({cart, totalPrice, clearCart, handleId}) => {
  
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      buyer: {
        name: nombre,
        apellido: apellido,
        email: email,
        phone: phone,
        
      },
      items: cart.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.count,
      })),
      total: totalPrice(),
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    
    addDoc(ordersCollection, order).then((res) => {
        handleId(res.id);
        clearCart();
    });
  };

 

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

    return (
        <div style={{ marginTop: '20px' }}>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre..."
                    name="nombre"
                    value={nombre}
                    onChange={handleChangeNombre}
                />
                <input
                    type="text"
                    placeholder="Apellido..."
                    name="apellido"
                    value={apellido}
                    onChange={handleChangeApellido}
                />
                 <input
                    type="email"
                    placeholder="Email..."
                    name="email"
                    value={email}
                    onChange={handleChangeEmail}
                />
                 <input
                    type="tel"
                    placeholder="Teléfono..."
                    name="telefono"
                    value={phone}
                    onChange={handleChangePhone}
                />
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;