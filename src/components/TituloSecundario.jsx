//rafce
const TituloSecundario = (props) => { // props = { texto, color }
    // console.log(props)
    //const variable = 'color'
    //console.log(props.variable) // ! En la notación punto. Javascripta va a intentar leer dentro del objeto la key variable
    //console.log(props[variable]) // ! En la notación corchete. Javascript va a leer la variable y usar el contenido.
    //console.log(props.color) // dot notation (notación punto)
    //console.log(props['color']) // backet notation (notación corchete) // darkgreen | crimson ...
    /* Motor de plantillas que utilizar REACT -> {} <- Interpolación */
    /* Dentro de las llaves puedo escribir casi toda la sintaxis javascript. 
    Salvo bloques de código. if -> for -> switch. Ternarios, métodos array (map, filter) */
  return (
    <h2 className="display-4" style={{ color: props.color, fontWeight: 300 } }>{props.texto}</h2>
  )

}

export default TituloSecundario