import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css"
import ListaTareas from "./components/ListaTareas";
function App(){
    const datos = {
        nombre: "Celeste",
        apellido: "Soto",
        edad: 26
    }
    const estaLogueado = true;
    if(estaLogueado){
        return(
            <div>
                <Header/>
                <p className="parrafo"> Tecuento algo sobre de mi: <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eos odit magnam sit officiis voluptate. Vitae praesentium necessitatibus optio maxime odit earum molestias impedit, alias quaerat dolore mollitia provident architecto, laudantium reiciendis id ratione itaque non? Perferendis voluptates enim veniam.</i></p>
            
                <span>Estos son mis datos personales 📄: <br />
                Nombre: {datos.nombre} <br /> 
                Apellido: {datos.apellido} <br />
                Edad: {datos.edad}</span>

                <ListaTareas/>
                <Footer/>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>Debes Iniciar Sesión!</h1>
                <button>Iniciar Sesion</button>
            </div>
            
        )
    }
    
}

export default App;