import React,{useEffect,useState} from 'react'
import firebase from '../.././Config/Index'
import "./Login.css"
import {Link} from 'react-router-dom'
const Login = ({login,nama})=>{
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const[loading,setLoading] = useState(false)
    useEffect(function(){
        var valload = document.querySelector('#loading')
        var proses = document.querySelector('#proses')
        if(loading === true) {
            valload.innerHTML='loading'
            proses.classList.add("spinner-border")
        }else{
            valload.innerHTML='Login'
            proses.classList.remove("spinner-border")
        }
    })
    const cekUSer = (e)=>{
        setLoading(true)
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password).then(res=>{
            setLoading(false)
            login(true)
            console.log(res)
        }).catch(function(error) {
            let pesan
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            setLoading(false)
            console.log(errorCode)
            if(errorMessage === 'The email address is badly formatted.'){
              alert('Format email anda tidak valid')
            }else if(errorMessage === 'There is no user record corresponding to this identifier. The user may have been deleted.'){
              alert('Email anda tidak terdaftar di sistem kami')
            }else{
              alert('Password anda salah\nMasukkan password yang benar')
            }

          });

    }
    return(
        <div className="container lebar mt-5">
            <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="email"  id="Email" className="form-control" placeholder="input your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"  id="password" className="form-control" placeholder="input your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                <button className="btn btn-primary" type="button"  onClick = {cekUSer}>
                  <span className="spinner-border-sm" role="status" aria-hidden="true" id = 'proses'></span>
                  <span id = 'loading'></span>
                </button>
                </div>
                <div className="form-group">
                  <Link to='/Registrasi'>Anda belum punya akun silahkan registrasi</Link>
                </div>
            </form>
            </div>

        </div>
    )
}

export default Login
