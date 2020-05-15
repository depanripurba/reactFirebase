import React,{useEffect,useState,Fragment} from 'react'
import "./Registrasi.css"
import firebase from '../.././Config/Index'
const Registrasi = ({login})=>{
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const [loading,setLoading] = useState(false)
    var cekemail = false
    var cekpass = false
    useEffect(function(){      
        var valload = document.querySelector('#loading')
        if(loading === true) {
            valload.innerHTML='loading'
            console.log(valload)
        }
    })
    const Registrasi = (e)=>{
        e.preventDefault()
        const valemail = document.querySelector("#valemail")
        const valpass = document.querySelector("#valpass")
        console.log(cekemail)
        if(email===null){
            valemail.classList.remove('hidden')
            valemail.classList.add('show')
            cekemail = true
        }else{
            valemail.classList.remove('show')
            valemail.classList.add('hidden')
        } 
        if(password===null){
            valpass.classList.remove('hidden')
            valpass.classList.add('show')
            cekpass = true
        }

        firebase.auth().createUserWithEmailAndPassword(email, password).then(res=>{
            console.log(res)
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if(error) {
                alert(errorMessage)
            }
          });
          
    }
    
    return(
        <Fragment>
        <center className="mt-5"><h1>Daftarkan Akunmu</h1></center>
        <div className="container lebar mt-3">
            <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="email" id="Email" className="form-control" placeholder="input your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <label htmlFor="" className='hidden' id='valemail'>*Email tidak boleh kosong</label>
                </div> 
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"  id="password" className="form-control" placeholder="input your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <label htmlFor="" className='hidden' id='valpass'>*Anda wajib mengisi password</label>
                </div>
                <div className="form-group">
                   <div type="submit" id="loading" name="submit" className="btn btn-primary" onClick={Registrasi} >Registrasi</div>
                </div>        
            </form>
           
            </div>
           
        </div>
        </Fragment>
    )
}

export default Registrasi