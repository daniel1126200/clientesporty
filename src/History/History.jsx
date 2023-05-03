import "./History.css";
export function History() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2>Los Diablitos</h2>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/musicosdani.appspot.com/o/baner.jpg?alt=media&token=34108372-50c1-4644-8d02-9d8888eded59"
            alt=""
          />

          <div>
            <link to="/" className="navbar-brand" />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicosdani.appspot.com/o/logoD.jpg?alt=media&token=5759f946-db1f-4457-add5-293db9e9e336"
              alt="logo"
              width="100"
              height="70"
              className="rounded"
            />
            <link />
            <h1>LOS DIABLITOS DEL VALLENATO</h1>
          </div>

          <div className="col-12 col-md-4">
            <p>
              Los Diablitos (La Gente de Omar Geles en la actualidad) fue una
              agrupación colombiana de vallenato fundada en Valledupar en 1985
              por el acordeonero Omar Geles y el vocalista Miguel Morales. Su
              nombre proviene del apodo que recibió desde niño Omar Geles, quien
              a la postre se ha convertido en el director único de la
              organización. La razón social se da a conocer a partir de 1986, ya
              que en los inicios se concibió bajo el nombre de Omar Geles "El
              Diablito" y Miguel Morales.
            </p>

            <p>
              Su estilo fue básicamente romántico, contribuyendo así a la
              expansión de este subgénero junto a otras organizaciones como El
              Binomio de Oro, Los Embajadores Vallenatos, Los Chiches
              Vallenatos, Los Inquietos del Vallenato, Luis Mateus, Los
              Gigantes, entre otros.
            </p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicosdani.appspot.com/o/diablitos2.jpg?alt=media&token=f4c665b9-57e3-42de-89fb-8879930620fa"
              alt=""
              className="img-fluid w-100"
            />
          </div>

          <div className="col-12 col-md-4">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicosdani.appspot.com/o/diablitos1.webp?alt=media&token=093903b5-8cfd-4260-9e6c-a6b7e3195c7e"
              alt=""
              className="img-fluid w-100"
            />
            <p>
              El cambio de nombre no fue nada fácil. Antes de lograr el cambio
              de nombre, Geles duro unos años intentando y buscando la mejor
              manera de hacerlo. Codiscos, su casa disquera anterior, trató de
              cambiar el nombre con consentimiento del público y hizo un
              concurso para recibir sugerencias de su fanaticada quienes
              respondieron que no estaban de acuerdo con el cambio. Pero,
              después de tanto calcular y de ceder a las razones del mercado,
              Geles se cansó, se fue para la casa multinacional Emi Music, y
              allí adoptó el nombre de La Gente de Omar Geles.
            </p>
          </div>

          <div className="col-12 col-md-4">
            <p>
              La historia de Los Diablitos de Colombia es una historia de lucha
              y trabajo que nació en Valledupar, Colombia, cuando Omar Geles se
              tomaba, literalmente hablando, las fiestas y se dedicaba a animar
              y acompañar a cuanto cantante espontáneo aparecía por ahí.
            </p>

            <p>
              En una de esas correrías conoce a otro joven con los mismos sueños
              y el mismo ritmo de vida, Miguel Morales, los que una vez
              acoplados fueron llevados a la ciudad de Medellín a grabar en el
              año 1983. Los éxitos nacieron de inmediato y cada uno de ellos
              mostró su talento y su fortaleza musical.
            </p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicosdani.appspot.com/o/diablitos.webp?alt=media&token=78f08cce-d84d-4fd1-9ca5-eb173d2f904c"
              alt="foto"
              className="img-fluid w-100"
            />
          </div>
        </div>
      </div>
      <div>
        <h2>Mi video</h2>

        <div className="container">
          <div className="row">
            <div className="col-4">
              <video width="590" height="220" controls className="img-fluid">
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/musicosdani.appspot.com/o/videoplayback%20(2).mp4?alt=media&token=57edacb5-7bda-459c-9890-2768386872ed"
                  type="video/mp4"
                />
                Tu navegador no admite el elemento de video.
              </video>
            </div>
            <div className="col-4">
              <video width="590" height="220" controls className="img-fluid">
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/musicosdani.appspot.com/o/videoplayback%20(3).mp4?alt=media&token=a592deb7-e010-4b3a-8274-5c1e9640c8a3"
                  type="video/mp4"
                />
                <h2></h2>
              </video>
            </div>
            <div className="col-4" >
              <video width="590" height="220" controls className="img-fluid">
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/musicosdani.appspot.com/o/videomusic.mp4?alt=media&token=70bc067f-0be8-4e89-a644-643f6be335de"
                  type="video/mp4" 
                />
                Tu navegador no admite el elemento de video.
              </video>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div></div>
      <br />
      <br />
    </>
  );
}
