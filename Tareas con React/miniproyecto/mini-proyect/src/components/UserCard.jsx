const UserCard = () => {
    const usuario = { nombre: "Lucas", activo: true }
    if (usuario.activo){
        return (
            <div>
                <h3>Usuario: {usuario.nombre}</h3>
                <p>Activo ✅</p>
            </div>
        )
    }
    else{
        return (
            <div>
                <h3>Usuario: {usuario.nombre}</h3>
                <p>Inactivo ❌</p>
            </div>
        )
    }
  
}

export default UserCard
