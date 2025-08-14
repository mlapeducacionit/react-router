import { useState } from "react"

// rafce
const Contador = (props) => {
    const {valorInicial} = props
    // ! Estados en REACT (Variable reactiva)
    // 16.8 hooks -> funciones de javascript (dentro react -> builtin -> una variable <--------- notificar a core de react
    /* Cada componente va a poder tener un o varios estados. Ese estado puede cambiar, es mutable. */
    // ! Agregar un estado a un componente funcional.
    /* Los hooks en React se incomporan a partir de la versión 16.8. A partir ese momento los componentes funcionales van a tener estado. */
    // ! Los hooks son una función de javascript
    /* Los hooks son funciones. Y este caso la función recibe "un argumento" y retorna un array de 2 posiciones */
    /* 0 <- Voy a tener el estado (variable que tiene un valor) -> Variable reactiva */
    /* 1 <- Función que modifica el estado.  */
    // ! NO VOY A PODER MODIFICAR EL ESTADO DIRECTAMENTE. 
    //const arrayDosPosiciones = useState(22) // cualquier tipo de dato de javascript.
    //console.log(arrayDosPosiciones) // [<estado>, <funcion-modifica-estado>]
    //console.log(arrayDosPosiciones[0]) // Voy a tener el ESTADO
    //console.log(arrayDosPosiciones[1]) // Voy a tener la funcion que modifica el estado  -> Le va avisar a react que tiene que volver a renderizar el componente.
    //const valorInicialContador = 22
    const valorInicialContador = valorInicial
    // ! Desestructuro el arrayDeDosPosiciones
    let [conta, setConta] = useState(valorInicialContador)
    //console.log(conta) // estado
    // console.log(setConta) // la función que modifica
    const handleIncrementar = () => {
        console.log("Incrementar")
        // conta = conta + 1
        // console.log(conta)
        // ! REACT NO SE ENTERA SI YO TRABAJO COMO VENIA HACIENDO CON JS. NO TENGO QUE MODIFICAR EL ESTADO DIRECTAMENTE
        setConta(conta + 1) // Tengo que utilizar la función que modifica el estado.
    }

    const handleIncrementarXValor = (valor) => {
        setConta(conta + valor)
    }

    const handleResetear = () => {
        setConta(valorInicialContador)
    }

    const handleDecrementar = () => {
        // conta--
        // breakpoint -> punto de detención de la ejecución del código para inspeccionarlo
        //debugger // <----- creo un breakpoint
        // conta = conta - 1
        setConta(conta - 1)
        //console.log(conta)
        //debugger
        console.log('Hola mundo!')
    }

  return (
    <div className="border border-dark rounded-3 p-4 mb-2">
        <h3 className="display-4">Contador Nro. numerito</h3>
        <p>Valor: <span className="display-2 text-danger">{conta}</span></p>
        <hr />

        {/* button.btn.btn-success.me-2{Incrementar} */}
        {/* <button className="btn btn-success me-2" onClick={<callback>}>Incrementar</button> */}
        <button className="btn btn-success me-2" onClick={handleIncrementar}>Incrementar</button>
        <button className="btn btn-secondary me-2" onClick={() => handleIncrementarXValor(4)}>Incrementar x Valor</button>
        <button className="btn btn-warning me-2" onClick={handleDecrementar}>Decrementar</button>
        <button className="btn btn-danger" onClick={handleResetear}>Resetear</button>

    </div>
  )
}

export default Contador