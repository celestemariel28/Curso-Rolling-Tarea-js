const TaskList = () => {
    const tareas = ["Comprar cables", "Revisar compresor", "Enviar presupuesto"]
    return (
        <div>
            <p>Listado de tareas: 📃</p>
            <ul>
                {tareas.map((tarea, index) => (
                <li key={index}>{index+1}: {tarea}</li>
                ))}
            </ul>   
        </div>
    )
}

export default TaskList
