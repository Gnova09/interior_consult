import React from "react";
import "./home.css"

const Home = () =>{

    return(
       <div className="home"> 
            <div className="texto">
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
            </div>
       </div>
    )
}
export default Home