import React from 'react'
import "../css/home.css"
import {  useHistory } from 'react-router-dom';
import districto from "../images/Districto.jpg"
import santiago from "../images/santiago.png"
import romana from "../images/romana.jpg"



const Home = () => {
    let history= useHistory();

    function handleClick() {
      history.push("/signin");
    }
    function handleServicies(){
      history.push("/servicies")
    }

    return (
      <div className="Home_page">
      <div className="wrapper">
      <div className="content">
        <h1>BIENVENIDO A JOB BAG</h1>
        <p>Nunca fue tan facil encontrar trabajo</p>
        <button type="button" onClick={handleServicies}>Servicios<span></span></button>
        <button type="button" onClick={handleClick}>Inicia Sesion<span></span></button>
      </div>
      </div>  
      <section className="jobs">
      <h1>Trabajos que ofrecemos</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque nisi neque sit loremp  totam loi totam.</p>
      <div className=" jobs-row">
        <div className="jobs-col">
         <h3>Front-end</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque nisi neque sit loremp  totam loi totam.</p>
        </div>
        <div className="jobs-col">
         <h3>Back-End</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque nisi neque sit loremp  totam loi totam.</p>
        </div>
        <div className="jobs-col">
         <h3>Design-UI</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque nisi neque sit loremp  totam loi totam.</p>
        </div>
      </div>
      </section>
      <section className="places">
        <h1>Nos encontramos</h1>
        <p>Lorem ipsum dolor sit </p>
        <div className="places_row">
          <div className="places-col">
          <img src={districto} alt=""/>
          <div className="layer">
            <h3>Districto Nacional</h3>
          </div>
          </div> 
          <div className="places-col">
          <img src={santiago} alt="" className="santiago"/>
          <div className="layer">
            <h3>Santiago</h3>
          </div>
          </div> 
          <div className="places-col">
          <img src={romana} alt="" className="romana"/>
          <div className="layer">
            <h3>La Romana</h3>
          </div>
          </div> 
        </div>
      </section>
      </div>
  );
}

 
export default Home
