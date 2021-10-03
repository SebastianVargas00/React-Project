import React from 'react'

const login=(props)=> {
    const{email,setEmail,password,setPassword,handlelogin,handlesignup, hasaccount, setHasaccount,emailerror,passworderror}=props;
    return (
        <div>
            <section className="login">
              <div className="loginContainer">
                 <label>Nombre de usuario</label>
                 <input type="text"autoFocus required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                 <p className="errorMsg">{emailerror}</p>
                 <label>Constraseña</label>
                 <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                 <p className="errorMsg">{passworderror}</p>
                 <div className="btnContainer">
                     {hasaccount ?(
                      <>
                      <button onClick={handlelogin}>Iniciar Sesion</button>
                      <p>No tienes una cuenta ?<span onClick={()=>setHasaccount(!hasaccount)}>Registrarme</span></p>
                      </>
                     ):(
                        <>
                        <button onClick={handlesignup}>Registrarme</button>
                        <p>Tienes una cuenta ?<span onClick={()=>setHasaccount(!hasaccount)}>Inicia Sesion</span></p>
                        </>
                     )}
                 </div>
              </div>

            </section>
        </div>
    )
}

export default login;