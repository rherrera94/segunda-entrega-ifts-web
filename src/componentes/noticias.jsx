import img1 from '../images/certificadocovid.jpg';
import img2 from '../images/comedor-empresa.jpg';
import img3 from '../images/janne-rieck-6-7IzyoOfqc-unsplash.jpg';
import img4 from '../images/lactario.jpg';
import img5 from '../images/capacitacion.jpg';
import img6 from '../images/guardabici.jpg';
import Login from './login';
export default function Noticias() {
   
    return (
    <div>

<section className="total">
<section className="novedades">
    <section className="izq">
        <article>
             <h2 className="titulo-noticia"> Certificado COVID-19</h2>
             <img src={img1} alt="Imagen noticia"/>
             <p className="informacion-novedad"> Para poder volver a trabajar de manera presencial todos los trabajadores deberan
                 presentar en el área de recursos humanos el certificado de vacunación.
             </p>
        </article>
        <hr/>
        <article>
            <h2 className="titulo-noticia"> Cierre comedor por pandemia</h2>
            <img src={img2} alt="Imagen noticia"/>
            <p className="informacion-novedad"> Te recordamos que tanto el comedor y el acceso a la terraza del piso 8 
                continúan inhabilitados hasta nuevo aviso, debido a la situación epidemiológica.
                Ayudanos a evitar la circulación y contacto entre personas, respetando las medidas
                de prevención y evitando ingresar a zonas restringidas.</p>
       </article>
       <hr/>
       <article>
            <h2 className="titulo-noticia"> Curso sobre javascript</h2>
            <img src={img3} alt="Imagen noticia"/>
            <p className="informacion-novedad"> Se informa a todo el personal relacionado con el sector informatico que hemos firmado
                un convenio con la plataforma coderhouse con el fin de obtener un descuento del 50% en los
                cursos sobre programación web en javascript. Para cualquier información comunicarse con el
                area de recursos humanos.</p> 
        </article>
        <hr/>
    </section>
    <section className="centro">
        <article>
            <h2 className="titulo-noticia">Utilización lactario</h2>
            <img src={img4}alt="Imagen noticia"/>
            <p className="informacion-novedad"> Con el regreso paulatino y programado a las oficinas, 
                también vuelven las necesidades de las trabajadoras que
                deseen o deban mantener la lactancia. Por eso, queríamos
                comentarte que el Lactario está disponible para quienes
                quieran utilizarlo.</p>
       </article>
       <hr/>
       <article>
           <h2 className="titulo-noticia"> Capacitación vuelta a la presencialidad</h2>
           <img src={img5} alt="Imagen noticia"/>
           <p className="informacion-novedad"> Conocé en detalle el protocolo sanitario y cuáles son los cuidados y recomendaciones para que entre  
               todos podamos crear un ambiente seguro para el trabajo presencial.</p> 
      </article>
      <hr/>
      <article>
           <h2 className="titulo-noticia"> Guarda de bicicletas</h2>
           <img src={img6} alt="Imagen noticia"/>
          <p className="informacion-novedad"> A partir del lunes 6 de septiembre podés volver a solicitar tu espacio guarda
               bicicleta desde Intranet, para poder venir en bici a trabajar y dejarla en la
               cochera del edificio.</p> 
       </article>
       <hr/>
    </section>
</section>
<aside>
        <h2 className="titulo-noticia">Información Importante</h2>

        <div className="novedades-aside"> 
        Se le recuerda a todo el personal la obligacion de utilizar tapabocas en todos
        los sectores de la empresa y que se debe mantener el distanciamiento social.<br/>
        A su vez, se les recuerda que podrán acceder a los ascensores de a dos personas a la vez.
        </div>
        <Login></Login>            
</aside>
</section> 
</div>
    )
}
