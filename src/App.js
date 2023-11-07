import React from 'react';
import { useState , useEffect} from 'react';
import './App.css';



export default function App() {
  const colores = ['rojo', 'amarillo', 'verde'];
  const [color, setColor] = useState(0);
  
  const [encendido, setEncendido] = useState(true);
  useEffect(() => {
    let timer;
    if (encendido) {
      timer = setTimeout(() => {
        setColor((color + 1) % colores.length);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [color, encendido]);
  const encender = () => {
    setEncendido(!encendido);
  };
  return (
    <>
      <div className="semaforo">
        <div className={`light-red ${color === 0 ? 'activo-rojo' : ''}`}></div>
        <div className={`light-yellow ${color === 1 ? 'activo-yellow' : ''}`}></div>
        <div className={`light-green ${color === 2 ? 'activo-green' : ''}`}></div>
      </div>
      <button className="button" onClick={encender}>
        {encendido ? 'Apagar' : 'Encender'}
      </button>
      <p> {colores[color]}</p>
    </>
  );
}
