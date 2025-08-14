import Contador from "./components/Estados/Contador";
import Imagen from "./components/Imagen/Imagen";
import Parrafo from "./components/Parrafo";
import TituloPrincipal from "./components/TituloPrincipal";
import TituloSecundario from "./components/TituloSecundario";

function App() {

  const arrayParrafos = [
    { numero: 1, data: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, odit?'}, // 0
    { numero: 2, data: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error minima quis nihil suscipit est ad beatae facere doloremque? Non, reiciendis!'}, // 1
    { numero: 3, data: 'Lorem ipsum dolor sit amet.'}, //2
    { numero: 4, data: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quasi laboriosam veniam tenetur recusandae quibusdam deserunt quos optio ea magnam perspiciatis earum, impedit quae atque? Quod quas eius nesciunt ad ipsum recusandae quo voluptatum optio possimus, voluptate suscipit esse deleniti necessitatibus tempora corrupti quisquam maiores rerum pariatur sequi. Nobis, neque?'}, //3
  ]



  return (
    <div className="container">
      {/* <TituloPrincipal></TituloPrincipal>
      <TituloPrincipal /> */}

      <TituloSecundario texto="Estados en React" color="darkblue" />

      <hr />

      <Contador valorInicial={222} />
      <Contador valorInicial={666} />
      <Contador valorInicial={888} />
      <Contador valorInicial={777} />
        
      <TituloPrincipal />
  
      <TituloSecundario texto="Primer título secundario (1)" color="darkgreen" />
      <Parrafo numero={arrayParrafos[0].numero} data={arrayParrafos[0].data} />

      <TituloSecundario texto="Segundo título secundario (2)" color="crimson" />
      <Parrafo numero={arrayParrafos[1].numero} data={arrayParrafos[1].data} />

      <TituloSecundario texto="Tercer título secundario (3)" color="purple" />
      <Parrafo numero={arrayParrafos[2].numero} data={arrayParrafos[2].data} />

      <TituloSecundario texto="cuarto título secundario (4)" color="darkorange" />
      <Parrafo numero={arrayParrafos[3].numero} data={arrayParrafos[3].data} />

      <div className="row">
        <div className="col-5">
          <Imagen rutaALaImagen="imgs/chocolate-frutillas.webp" />
        </div>
        <div className="col">
          <Imagen rutaALaImagen="imgs/pexels-caio-65547.webp" />
        </div>
        <div className="col">
          <Imagen rutaALaImagen="imgs/pexels-jessbaileydesign-1342324.webp" />
        </div>
        <div className="col">
          <Imagen rutaALaImagen="imgs/pexels-koshi-887850.webp" />
        </div>
      </div>
      
    </div>
  );
}

export default App;
