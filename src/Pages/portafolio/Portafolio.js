import './estilos.css';
import Navbar from '../../Components/navbar/Navbar';
import Razas from '../../Components/portafolio/Razas';
import miCara from './miCara.jpg';

function portafolio() {
  return (
    <div className="container-fluid">
       <Navbar />
        <div className="colP">
        <h1 className="til">Andreína Pirela</h1>
    <h2 className="texto1">Tecnólogo en análisi y desarrollo de sistemas de información</h2>
        <br></br>
    <div className="container">
    <img src={miCara} className="miCara" alt="miCara " />
    <br></br>
    <h1>Perfil</h1>
    <p>Soy una Tecnólogo en análisis  y desarrollo de sistemas de información , detallista, puntual y organizada.
Mi principal objetivo es desarrollarme profesionalmente y evolucionar en el área. </p>
<hr/>
<br></br>
<h1>Habilidades profesionales</h1>
<ul><li>Conocimiento en programas de bases de datos Mysql y Sql Server</li> 
<li>Dominio en lenguaje UML</li> 
<li> Conocimiento básico en lenguajes de programación Java, Php y JavaScript.</li> 
<li> Manejo intermedio en html y css.</li> 
<li> Capacidades de organización.</li> 
<li> Capacidad en trabajo en equipo.</li> 


</ul>
<hr/>

<h1>Contácto:</h1>
<p>Teléfono: 4658990
<br></br>
Móvil: 3054108251
<br></br>
Correo electrónico: andrecpj2002@gmail.com
<br></br>
Dirección: cl 152A 99-60 
<br></br>
Suba-Bogotá-Colombia.
</p>
</div>
<div className="col">
  <br></br>
<h1 className="texto">Historial académico</h1>
<br></br>
<h2 className="texto">Servicio Nacional de Aprendizaje.</h2>
<br></br>
<h4 className="texto">Centro de gestión de mercados logística y tecnologías de la información</h4>
<br></br>
<ul className="texto">
  <li> Tecnólogo en análisis y desarrollo de sistemas de información-Actualmente</li>
<li>Técnico en programación de software 2018-2020.</li> 
</ul>
<br></br>
<h2 className="texto">Fe y Alegría Jose Maria Veláz I.E.D</h2>
<br></br>
<ul className="texto">
  <li>Bachiller 2016-2020</li>
</ul>
<br></br>
<h1 className="texto">Otras formaciones</h1>
<br></br>
<br></br>
<h2 className="texto">Federación internacional de fe y alegría y formación para el trabajo- SIET-Competencias</h2>
<br></br>
<br></br>
<ul className="texto">
<li>“Razonamiento Matemático” </li>
<li>“Comunicación”
 capacitación modalidad virtual/presencial- febrero a abril de 2018 - 30 horas.</li>
</ul>

           { 
              <div className="col-12 col-md-4" >
              <Razas />
                 
              </div>
}
        
</div>
<br>
</br>
<br>
</br>
</div>
        

     
        </div>
  );
}

export default portafolio;



