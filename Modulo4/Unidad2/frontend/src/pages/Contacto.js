import React from "react";
import "../styles/components/pages/Contacto.css";

export const Contacto = () => {
  return (
    <main class="holder">
      <div class="columna left">
        <h2>Contacto Rápido</h2>
        <form action="" method="" class="formulario">
          <p>
            <label for="">Nombre</label>
            <input type="text" name="" id="" />
          </p>
          <p>
            <label for="">Email</label>
            <input type="email" name="" id="" />
          </p>
          <p>
            <label for="">Teléfono</label>
            <input type="text" name="" id="" />
          </p>
          <p>
            <label for="">Comentario</label>
            <textarea name="" id="comentario"></textarea>
          </p>
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
