import React, {useState} from 'react'

export default function MiPrimerEstado() {

  // let nombre = "Washington Nieto";

  // const cambiarNombre = e => {
  //   nombre= "paquito Fernandez";
  // }

  const [ nombre, setNombre ] = useState("Washington Nieto")

  const cambiarNombre = (e, nombre) => {
    setNombre(nombre);
  }
  return (
    <div>
      <h3>Componente: MiPrimerEstado</h3>
      {/* <strong className="label">{ nombre }</strong> */}
      <strong className={nombre.length >= 4 ? "label-verde" : "label-rojo"}>{ nombre }</strong>
      &nbsp;
      <button onClick={e => cambiarNombre(e, "Francisco") }>Cambiar</button>
      &nbsp;
      {/* <input type="text" onKeyUp={e => cambiarNombre(e, e.target.value)} placeholder='Cambiar el nombre' /> */}
      <input type="text" onChange={e => cambiarNombre(e, e.target.value)} placeholder='Cambiar el nombre' />

    </div>


  )
}

