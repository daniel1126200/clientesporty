import './Footer'
import { Link} from "react-router-dom"
export function Footer() {
    return (
        <>
            <div>
                <footer class="text-center text-lg-start bg-white text-muted ">

                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                        <div className="me-5 d-none d-lg-block">
                            <span>Get connected with us on social networks:</span>
                        </div>      
                                     
                    </section>
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">                                    
                                    <img src="https://firebasestorage.googleapis.com/v0/b/musicosdani.appspot.com/o/logosporty.png?alt=media&token=d09ead59-1ec7-45b0-93c1-de6b64817eb9" alt="" width="150" className="rounded-circle"/>                            
                                </div>
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        SPORTY
                                    </h6>
                                </div>                                
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">                                    
                                    <h6 className="text-uppercase fw-bold mb-4">
                                    </h6>
                                    <p>
                                        daniel1126200(github)
                                    </p>                               
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4">Team members</h6>
                                    <p>Daniel Felipe Mosquera Renteria</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="text-center p-4">
                        © 2023 Derechos de autor: Daniel Felipe Mosquera Renteria
                        <Link className="text-decoration-none"> Sporty </Link>
                    </div>
                </footer>
            </div>
        </>
    )
}