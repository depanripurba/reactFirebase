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
        var proses = document.querySelector('#proses')
        if(loading === true) {
            valload.innerHTML='loading'
            proses.classList.add("spinner-border")
        }else{
            valload.innerHTML='Registrasi'
            proses.classList.remove("spinner-border")
        }
    })
    const Registrasi = (e)=>{
        e.preventDefault()
        setLoading(true)
        const valemail = document.querySelector("#valemail")
        const valpass = document.querySelector("#valpass")
        console.log(cekemail)
        if(email===null){
            valemail.classList.remove('hidden')
            valemail.classList.add('show')
        }else{
            valemail.classList.remove('show')
            valemail.classList.add('hidden')
        }
        if(password===null){
            valpass.classList.remove('hidden')
            valpass.classList.add('show')
        }

        firebase.auth().createUserWithEmailAndPassword(email, password).then(res=>{
            console.log(res)
            login(true)
            setLoading(false)
        }).catch(function(error) {
            // Handle Errors here.
            setLoading(false)
            var errorCode = error.code;
            var errorMessage = error.message;
            if(errorMessage === 'The email address is already in use by another account.'){
              alert('Email ini sudah digunakan\nGunakan alamat email lain')
            }else if(errorMessage === 'The email address is badly formatted.'){
              alert('Harap masukkan email dengan format yang benar')
            }else{
              alert('Password harus lebih dari 6 karakter')
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
                <button className="btn btn-primary" type="button"  onClick = {Registrasi}>
                  <span className="spinner-border-sm" role="status" aria-hidden="true" id = 'proses'></span>
                  <span id = 'loading'></span>
                </button>
            </form>

            </div>

        </div>
        </Fragment>
    )
}

export default Registrasi
