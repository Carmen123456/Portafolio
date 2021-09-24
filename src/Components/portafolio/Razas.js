import ModalCV from './ModalCV';

function Razas(props) {
  return (
    <div className="boton">
    
        <button className="hola" data-bs-toggle="modal" data-bs-target={`#id${props.p1}`}>Ver más</button>
 

  <ModalCV pm1={`id${props.p1}`} pm2={props.p3} pm3={props.p5} pm4={props.p6}/>

  </div>
  );
}

export default Razas;