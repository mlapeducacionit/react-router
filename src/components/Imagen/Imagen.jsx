import './Imagen.css'
//rafce

const Imagen = (props) => { // props = { rutaALaImagen }

  return (
    <img className='img-fluid borde-imagen-rojo' src={props.rutaALaImagen} alt="Fotografía primer plano chocolates y frutillas" />
  )
}

export default Imagen