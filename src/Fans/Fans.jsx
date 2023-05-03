import './Fans.css'

export function Fans() {
    return (
        <>
    
            <form className="row g-3 formulario">
                <div className="col-md-6">
                    <label for="inputUser" className="form-label"></label>
                    <input type="text" className="form-control" id="inputUser" placeholder="Nombre Completo"/>
                </div>
                <div className="col-md-6">
                    <label for="inputApellido" className="form-label"></label>
                    <input type="text" className="form-control" id="inputApellido" placeholder="Apellidos"/>
                </div>
                <div className="col-md-6">
                    <label for="inputfechaN" className="form-label"></label>
                    <input type="" className="form-control" id="inputEmail4" placeholder="Fecha Nacimiento" />
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">sexo</label>
                    <select id="inputState" className="form-select">
                        <option selected>Seleccione</option>
                        <option>Hombre</option>
                        <option>Mujer</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label"></label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Correo" />
                </div>
                <div className="col-md-6">
                    <label for="inputPassware" className="form-label"></label>
                    <input type="passware" className="form-control" id="inputPasswae" placeholder="Pasware" />
                </div>
                
                <div className="col-12">1: ¿Cuál fue la primera vez que escuchaste la música de los Diablitos?
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />A. En la radio
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />B.En una película/serie de televisión
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />C. Por recomendación de un amigo/familiar
                    </div>
                </div>
                <div className="col-12">2:¿Has ido a algún concierto de este cantante/grupo?
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" /> Si
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />No
                    </div>
                </div>
                <br /><br />
                <div className="col-6">3:¿Cuál es tu opinión sobre la evolución musical del cantante/grupo a lo largo de los años?
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />A. Me gusta más su música antigua
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />B. Me gusta más su música actual
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />C. Me gusta todo lo que hacen
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />D. No tengo una opinión clara
                    </div>
                </div>
                <div className="col-6">4.¿Cómo describirías la influencia del los Diablitos en tu vida o en tu forma de ver la música?
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />A.  Bien
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />B.  Excelente
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />C.  muy poco
                    </div>
                </div>
                <div className="col-6">5. ¿Te has escuchado todas las cansiones de los Diablitos?
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />A.  No
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />B.  Si
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Registrate</button>
                </div>
            </form>
        </>
    )
}