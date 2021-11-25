import React, { useState } from "react";
import axios from "axios";
import "../styles/components/pages/Contacto.css";

export const Contacto = (props) => {
  const initialForm = {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({ ...oldData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response = await axios.post(
      "http://localhost:3000/api/contacto",
      formData
    );
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };

  return (
    <main class="holder">
      <div class="columna left">
        <h2>Contacto Rápido</h2>
        <form action="" method="" class="formulario" onSubmit={handleSubmit}>
          <p>
            <label for="">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </p>
          <p>
            <label for="">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </p>
          <p>
            <label for="">Teléfono</label>
            <input
              type="text"
              name="telefono"
              id="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </p>
          <p>
            <label for="">Comentario</label>
            <textarea
              name="mensaje"
              id="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
          </p>
          {sending ? <p>Enviando...</p> : null}
          {msg ? <p>{msg}</p> : null}
          <p class="acciones">
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </div>
      <div class="columna right">
        <h2>Otras vías de contacto</h2>
        <p>También se puede comunicar con nosotros a través de:</p>
        <ul>
          <li>Teléfono: 0343 422-2484</li>
          <li>Email: caebasket@gmail.com</li>
          <li>Instagram: @caebasquet.parana</li>
        </ul>
      </div>
    </main>
  );
};
