import React,{useState,useEffect} from 'react'
import{Nav,NavLink,Bars,NavMenu,NavBtnLink} from'../css/Elements';
import app from '../firebase';
import bussiness from '../images/businness.svg';



const Navbar = () => {
    const [user,setUser]=useState("")
    
    const handlelogout=()=>{
        app.auth().signOut();
      }
      const authListener=()=>{
        app.auth().onAuthStateChanged(user=>{
          if(user){
            setUser(user);
          }
          else{
            setUser("");
          }
        })
        }
      
        useEffect(()=>{
         authListener();
      
        },[])
      
    return (
        <>
        <Nav>
            <NavLink to="/">
              <h1>Inicio</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    Sobre Nosotros
                </NavLink>
                  <NavLink to="/servicies" activeStyle>
                  Servicios
              </NavLink>
                <NavLink to="/contact-us" activeStyle>
                    Contactanos
                </NavLink>    
                {user?(
              <NavBtnLink to ="/"onClick={handlelogout}>Cerrar Sesion</NavBtnLink>
                ):(
                <NavBtnLink to ="/signin">Iniciar Sesion</NavBtnLink>
                )}
            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar