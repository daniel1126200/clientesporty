export function Tienda(){
let Tienda=[
  {
      nombre:"todos sus exitos",
      Precio:35,
      foto:"https://firebasestorage.googleapis.com/v0/b/musicosdani.appspot.com/o/tienda1.webp?alt=media&token=aa2edb01-ae75-4254-b695-882ffada3c4b",
      Descripcion:"En esta modalidad de distribución de música (Mercadolibre) no nos hacemos responsables del proceso de manufactura de sonidos nuevos o antiguos. La promesa es el estado físico, el buen trato, del VINILO o CD nuevo o usado. Todos nuestros productos tanto en CD y DVD son originales, sus estuches son nuevos y están sellados. Además vendemos VINILOS 33 RPM (LPS), 78 RPM, 45 RPM, NUEVOS Y USADOS. ",
      
  },
  {
      nombre:"cd nuevos origen",
      Precio:40,
      foto:"https://firebasestorage.googleapis.com/v0/b/musicosdani.appspot.com/o/tienda2.webp?alt=media&token=eca556e6-9de6-4f61-954a-01aa663b4d0b",
      Descripcion:"Producto nuevo y original. Formato físico. TRACKLIST: 1 Dónde Esta? 4:3 2 La Mujer Que Tenía 3:42 3 Sólo Quiereme 4:22 4 No Vuelvo 3:55 5 Quién Perderá 4:46 6 Hasta Cuándo Señor 4:24 7 La Guerra Es Guerra 4:18 8 Recuerdos De Un Amor 3:58 9 Así La Quiero Yo 3:58 10 Te Daré Lo Que Soy 4:46",
      
      
  },
  {
      nombre:"sorpresa caribe",
      Precio:400,
      foto:"https://firebasestorage.googleapis.com/v0/b/musicosdani.appspot.com/o/tienda3.webp?alt=media&token=2960c7df-f77b-4a36-81c1-2dd0547655f2",
      Descripcion:"El cliente debe leer bien las características del producto en cuanto a formatos como CD, VINILO: si son antiguos de años 40´s o 50 ´s, monofónicos o estéreos, cine películas blanco y negro, con subtítulos o traducciones especiales. Simplemente los vendemos y es responsabilidad del comprador saber su contenido musical y su presentación según la época. En lo referente al contenido de la obra musical, el gusto del producto musical, u otro aspecto que concierna al producto interno, clarificamos que Hitmusical no hace devoluciones.",
      

      
  },
  {
      nombre:"Acordeon Infantil",
      Precio:60.000,
      foto:"https://firebasestorage.googleapis.com/v0/b/musicosdani.appspot.com/o/tienda4.webp?alt=media&token=4ebbfd4b-1ad8-472d-aab7-6675677b5513",
      Descripcion:"TERNA VARIEDAD EN TUS MANOS, TRAE PARA TIACORDEON INFANTIL VALLENATO NIÑOS SONIDO REALAcordeón Infantil además de ser un Juguete Excepcional también es un instrumento musical con ¡Sonidos Reales! práctica para grandes y pequeños que quieran dar sus primeros pasos en tan importante género musical como lo es Vallenato",
     
  },

  {
     nombre:"Acordeon",
     Precio:75.000,
     foto:"https://firebasestorage.googleapis.com/v0/b/musicosdani.appspot.com/o/tienda5.webp?alt=media&token=137d1a64-b416-4498-816d-21ca4115756b",
     Descripcion:"Acordeón para Niños o adultos principiantes CARACTERISTICAS 2 botones de bajo 7 botones agudos y dos botones de bajo Dimensiones del producto: 19 x 11 x 18 centímetros Este acordeón de musical es un regalo maravilloso para niños o principiantes. IMAGENES DE REFERENCIA FISICA,",
   
  }
]

return(
  <>
    
    <div className="row row-col-1 row-cols-md-3 g-3">

      {
          Tienda.map(function(producto){
              return(
                  <div>
                      <div className="col">
                          <div className="card h-100 shadow">
                              <h3 className="text-center fw-bold">{producto.nombre}</h3>
                              <img src={producto.foto} alt="" className="img-fluid w-100"/>
                              <h4 className="text-center">Precio:{producto.Precio}</h4>
                              <h5 className="text-center">Descripcion:{producto.Descripcion}</h5>
                              
                          </div>
                      </div>
                  </div>
              )
          })
      }

    </div>

    <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicosdani.appspot.com/o/tienda3.webp?alt=media&token=2960c7df-f77b-4a36-81c1-2dd0547655f2"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5></h5>
                <p>
                 
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicosdani.appspot.com/o/tienda2.webp?alt=media&token=eca556e6-9de6-4f61-954a-01aa663b4d0b"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5></h5>
                <p></p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicosdani.appspot.com/o/tienda1.webp?alt=media&token=aa2edb01-ae75-4254-b695-882ffada3c4b"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5></h5>
                <p>
                
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">siguiente</span>
          </button>
        </div>
  
        <div className="row">
          <div className="col-md-12-md-6">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicosdani.appspot.com/o/descarga%20(3).jpg?alt=media&token=1e728503-4611-4713-aace-36bfb8ca0814"
              alt="foto1"
            />
            <p>
            Los Diablitos fué una agrupación musical vallenata formada en 1983 por el Acordeonero Omar Geles y el vocalista Miguel Morales. Su nombre proviene del sobrenombre que recibió desde niño Omar Geles quien a la postre se ha convertido en el director único de la organización, la razón social se da a conocer a partir de 1986, ya que en los inicios se concibió bajo el nombre de Omar Geles 'el diablito' y Miguel Morales.
            <p/>

            <p/>Su estilo ha sido básicamente romántico contribuyendo así a la expansión de éste subgénero con otras organizaciones como El Binomio de Oro, Los Embajadores Vallenatos, Los Chiches Vallenatos, entre otros.<p/>
            
            En 1985 saca su primer trabajo discografico titulado 'De verdad verdad', donde proviene su primer éxito 'Tu', composición de Hernando Marín. Allí comenzó la consolidación de la agrupación a nivel nacional.{" "}
            </p>
          </div>
        </div>
        <div >
        </div>


  </>
)
}