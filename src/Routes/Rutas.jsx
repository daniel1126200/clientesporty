import { Route, Routes } from "react-router-dom"

import { Home } from "../Home/Home"
import { Members} from "../Members/Members"
import { Menu } from "../shared/Menu/Menu"
import { Musica } from "../Musica/Musica"
import { Tienda } from "../Tienda/Tienda"
import { Fans } from "../Fans/Fans"
import { Footer } from "../Footer/Footer"

export function Rutas(){
    return(
        <>
          <Menu/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/integrantes" element={<Members />} />
            <Route path="/Musica" element={<Musica/>} />
            <Route path="/Tienda" element={<Tienda/>}/>
            <Route path="/Fans" element={<Fans/>}/>
            <Route path="/Footer " element={<Footer/>}/>
        </Routes>
        <Footer></Footer>
        </>
       
    )
}