import React,{useEffect,useState} from 'react'
import firebase from '../.././Config/Firebase'
import "./Login.css"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {ubahuser, ubahlogin, datauser, updatekontak} from '../../Config/Redux'
const Login = (props)=>{
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const[loading,setLoading] = useState(false)
useEffect(function(){
  if(localStorage.getItem('uid')){
    props.rubahlogin(true)
  }else{
    console.log("tidak ada user id disini")
  }
      console.log(props.user)
      console.log(props.login)
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
        e.preventDefault()
        if(email === null && password === null){
          return null
        }else{
          setLoading(true)
          firebase.auth().signInWithEmailAndPassword(email, password).then(res=>{
              setLoading(false)
              props.rubahlogin(true)
              props.datauser(res.user.uid)
              console.log(res)
              const uid = res.user.uid
              localStorage.setItem('uid',uid)
              console.log(res)
              console.log("sebaiknya disini saja anda update kontaknya bro")
              props.getkontak(uid)
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
              }else if(errorMessage === 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.'){
                alert('Tidak dapat konek ke server\nPastikan anda terhubung ke internet')
              }else{
                alert('Password anda salah\nMasukkan password yang benar')
              }

            });
        }


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

const method = (dispatch)=>{
  return{
    rubahlogin:(value)=>dispatch(ubahlogin(value)),
    rubahuser:(user)=>dispatch(ubahuser(user)),
    datauser:(value)=>dispatch(datauser(value)),
    getkontak:(value)=>dispatch(updatekontak(value)),
  }
}
const data = (state)=>{
  return{
    login : state.login,
    user: state.user
  }
}
export default connect(data,method)(Login)
