import "../css/style.css"

const ListaTareas = () => {
    const tareas = [{id: 1, tipotarea:"Hacer ejercicio"},
                    {id: 2, tipotarea: "Estudiar React"},
                    {id: 3, tipotarea: "Leer"}];
    return (
        <div>
            <p>Listado de tareas pendientes 🖊: </p>
            {tareas.map((tarea) => (
                <li key={tarea.id} className="listarea">
                    <span>Tarea: {tarea.tipotarea}</span>
                </li>
            ))}
        </div>
    )
}

export default ListaTareas
