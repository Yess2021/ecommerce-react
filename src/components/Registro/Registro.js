import './Registro.css'

const Registro = () => {
    return <section ClassName="registro">

    <h1 id="tituloRegistro">Cuenta</h1>
    <div id="principal">
        <section ClassName="inicio-sesion">
            <h3 ClassName="titulo1">Inicio de Sesion</h3>
            <form action="https://postman-echo.com/post" method="post">
                <input type="email" id="email" name="email" placeholder="Correo electronico" autocomplete="off" required />
                <input type="contraseña" id="contraseña" name="contraseña" placeholder="Contraseña" autocomplete="off" required />
                <p>¿Olvidaste tu contrasena?</p>
                <div>
                    <button>Iniciar Sesion</button>
                </div>
            </form>
        </section>

        <section ClassName="section-registro">
            <p>¿Aun no tenes cuenta?</p>
            <h3 ClassName="titulo2">Sumate a Nuestra Comunidad</h3>
            <form action="#">
                <input type="email" id="email" name="email" placeholder="Ingresa tu correo electronico"
                    autocomplete="off" required />
                <button>Crear Cuenta</button>
            </form>
        </section>
    </div>
</section>
}

export default Registro
