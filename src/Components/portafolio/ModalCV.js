
function ModalCV(props) {
  return (
    <div className="modal fade" id={props.pm1} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Formacion Academico</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
            <div className="col8">
               <strong>Acerca de </strong> 
               <br></br>
               <br></br>
               <ul>
               <li>“Cumplimiento de normas y tareas” 
capacitación modalidad virtual/presencial febrero a abril de 2018 - 30 horas </li>
<li>“Iniciativa y toma de decisiones”
capacitación modalidad virtual/presencial febrero a abril de 2018 - 30 horas</li>
<li>Ganadora del tercer lugar del primer congreso de educación financiera-mundo Mujer/Julio-Octubre 2020</li>
               </ul>
            </div>
          

        <div className="modal-footer">
          <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ModalCV;