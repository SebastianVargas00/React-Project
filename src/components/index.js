import React,{useState,useEffect} from 'react'
import{Nav,NavLink,Bars,NavMenu,NavBtnLink} from'../css/Elements';
import app from '../firebase';
import briefcase from '../images/briefcase.svg';
import { useHistory } from 'react-router';



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

        function redirect(){
          let history=useHistory()
          history.push("/")
        }

      
    return (
        <>
        <Nav>
            <NavLink to="/">
            <img src={briefcase} alt="" width="45" height="45"/> <h2>Job Bag</h2>
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
