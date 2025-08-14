import { NavLink } from "react-router"

//const NavItem = (props) => {
//const item = props.item
const NavItem = ({item}) => {

    const cambioDeEstilos = ({isActive}) => 
        isActive ? 
            {color: 'orange', borderBottom: '2px solid orange', paddingBottom: '5px'} 
        : 
            {color: 'gold'}

  return (
    <li className="nav-item"> 
        {/* <NavLink style={{color: 'crimson'}} className="nav-link" to={item.ruta}>{item.nombre}</NavLink> */}
        {/* <NavLink style={(props) => console.log(props)} className="nav-link" to={item.ruta}>{item.nombre}</NavLink> */}
        {/* <NavLink style={({isActive}) => console.log(isActive)} className="nav-link" to={item.ruta}>{item.nombre}</NavLink> */}
        <NavLink style={cambioDeEstilos} className="nav-link" to={item.ruta}>{item.nombre}</NavLink>
    </li>

  )
}

export default NavItem