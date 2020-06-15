import firebase from '../../Firebase/index.js'
export const ubahuser = (user)=>(dispatch)=>{
  setTimeout(()=>(dispatch({type:'USER',value:user})),3000)
}

export const ubahlogin = (value)=>(dispatch)=>{
    dispatch({type:'UBAHLOGIN',value:value})
}

export const datauser = (value)=>(dispatch)=>{
    dispatch({type:'UBAHDATAUSER',value:value})
}

export const updatekontak = (value)=>(dispatch)=>{
  const starCountRef = firebase.database().ref('users/' + value )
  return new Promise((resolve,reject)=>{
      starCountRef.on('value', (snapshot)=> {
        resolve(snapshot.val().teman)
        dispatch({type:'UPDATEKONTAK',value:snapshot.val().teman})
      })
  }).then((result)=>{
    console.log(result)
  })
}
