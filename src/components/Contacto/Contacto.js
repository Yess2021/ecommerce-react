import './Contacto.css'

const Contacto = () => {
    return <section className="contacto">
    <h1 className="contacto-titulo">Contacto</h1>

    <section id="section1" className="sections-contacto">
        <h2 className="intro">Estamos para ayudarte</h2>
        <p>Nuestro equipo esta listo para contestar cualquier duda o consulta que puedas tener.
            Te dejamos tips súper útiles para cuidar tu bikini y una guía de talles especialmente diseñada para que
            encuentres tu Mariposa 88.
        </p>
        <div className="enlaces">
            <a href="#">Tips de Cuidado</a>
            <a href="#">Faqs</a>
            <a href="#">Guia de Talles</a>
        </div>
    </section>
    <section id="section2" className="sections-contacto">
        
        <div id="formulario-contacto">
            <h2 className="intro">Contactanos</h2>
            <div>
                <form action="https://postman-echo.com/post" method="post">
                    <input type="text" id="nombre-contacto" name="nombre" placeholder="Nombre" autocomplete="off" />
                    <div className="error-detailsContacto" id="error-nombre-contacto"></div>
                    <input type="email" id="email-contacto" placeholder="Correo electronico" name="email" autocomplete="off" required />
                    <div className="error-detailsContacto" id="error-email-contacto"></div>
                    <input type="number" placeholder="Telefono" minlength="10" autocomplete="off" />
                        <textarea className="campo" placeholder="Mensaje" name="comentarios" id="comentarios" cols="30"
                            rows="4" autocomplete="off" required></textarea>
                            <div className="error-detailsContacto" id="error-comentarios"></div>  
                    <button className="botonEnviar">Enviar</button>
                </form>
            </div>
        </div>
        <div id="datos">
            <div className="logo-whatsapp"></div>
            <div className="datos1">
                <h3 className="titulo-datos">Via Whatsapp</h3>
                <p>Nuestro horario de atención es de lunes a viernes de 9 a 17hs.</p>
            </div>
            <div className="logo-email"></div>
            <div className="datos2">
                <h3 className="titulo-datos">Via Email</h3>
                <p>Podés enviar un correo a consultas@mariposa88.com.ar con la duda que tengas.</p>
            </div>
        </div>
    </section>
</section>


}

export default Contacto
