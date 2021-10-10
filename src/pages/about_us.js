import React from "react";
import "../css/about_us.css"
import pic2 from "../images/pic2.jpg"

function about_us(){
    return(
        <section className="about">
        <div className="main">
            <img src={pic2} alt=""/>
            <div className="about-text">
                <h1>Conocenos</h1>
                <p className="text">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.</p>
                <h1>Mision</h1>
                <p className="text">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.</p>
                <h1>Vision</h1>
                <p className="text">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.</p>
            </div>     
        </div>
    </section>
    )
}

export default about_us