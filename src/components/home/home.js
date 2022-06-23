import React from "react";
import "./home.css"

const Home = () =>{

    return(
       <div className="home"> 
            <div className="texto_home">
                <h1>Modern Interior</h1>
                <p>
                A full-Service residencial & commercial
                interior design and staging company 
                offering professional organizing & eco-services.
                </p>
                <h2>Read more --> </h2>
            </div>
            <div className="conten_imagen">
                <img alt="imagen" src={require("../../img/photo1.png")} />
                <div className="perfil">
                    <span>
                        <img alt="" src={require("../../img/photo2.png")}/>
                        <span>
                        <h2>Aliza Webber</h2>
                        <h3>Interior designer</h3>
                        </span>
                    </span>
                   <h1>Designed in 2020 by Aliza Webber</h1>
                </div>
            </div>
       </div>
    )
}
export default Home