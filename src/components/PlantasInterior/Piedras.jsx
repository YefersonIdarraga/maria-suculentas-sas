import React from "react";
import piedra from "../../assets/piedras.jpg";

const cardout = () => {
  const card = document.getElementById('card');
  const parrafo11 = document.getElementById('parrafo11');
  parrafo11.textContent = "En el sol, su color es casi negro, lo que provoca un bello contraste con otras plantas en un jardín. Por otro lado, en la sombra parcial llega a tomar un color púrpura con tonos verdes al centro.";
  const lista = document.getElementById('lista');
  const sex = document.getElementsById('sex');
  const ref = document.getElementsById('ref');
  const size = document.getElementsById('size');
  const amount = document.getElementsById('amount');
  sex.textContent = "";
  ref.textContent = "";
  size.textContent = "";
  amount.textContent = "";
  card.append(parrafo11);
}

const cardover = () => {
  const parrafo11 = document.getElementById('parrafo11');
  parrafo11.textContent = "";
  const lista = document.createElement('ul');
  const sex = document.createElement('li');
  const ref = document.createElement('li');
  const size = document.createElement('li');
  const amount = document.createElement('li');
  sex.textContent = "Sexo: Hembra";
  ref.textContent = "Referencia: Planta para exterior";
  size.textContent = "Tamaño: Max 10 cm de diámetro";
  amount.textContent = "Cantidad: 100";
  parrafo11.append(lista)
  lista.append(sex, ref, size, amount);
}

const Piedras = () => {
  return (
    <div className="card" onMouseOver={cardover} onMouseOut={cardout}>
      <h2>Planta Lithops de Piedras Vivas</h2>
      <img src={piedra} alt="Echeveria Setosa" />
      <p className="parrafo" id="parrafo11">
        Se denominan vulgarmente piedras vivas o planta piedra debido a que
        presentan una apariencia que las hace prácticamente indistinguibles de
        las piedras de su entorno; adaptación evolutiva (denominada cripsis) que
        les permite camuflarse ante posibles depredadores.
      </p>
      <input className="comprar" type="button" value="Comprar" />
    </div>
  );
};

export default Piedras;
