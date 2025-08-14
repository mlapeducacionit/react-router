// rafce

const Parrafo = (props) => { // props = { numero }
  //const data = props.data
  //const numero = props.numero
  const { data, numero } = props

  return (
    <p>{numero} - {data}</p>
  )
}

export default Parrafo