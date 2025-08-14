import itemsMenu from "../../constants/items-menu"
import NavItem from "./NavItem"


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary bg-gradient">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

                {
                    itemsMenu.map((item, idx) => (
                        <NavItem key={`${item.id}-${idx}`} item={item} />
                    ))
                }


            </ul>
        </div>
        </div>
     </nav>
  )
}

export default Navbar

// map -> retorna -> [] (4) -> [] (4) -> Retorna un array de la misma cantidad de elementos que itero
// Arrow Function -> { } -> tengo que poner el retorno
/* 
    () => {
        return <--- Solo un línea de código -> una sola sentencia dentro del cuerpo de la función
    }

    () => ()

    const suma = (a, b) => {
        return a + b
    }

    const suma = (a, b) => a + b

*/




