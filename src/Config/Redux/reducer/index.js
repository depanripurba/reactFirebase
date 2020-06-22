const globalState = {
  login: false,
  user: 'Depanri Purba',
  datauser: 'Depanri Purba',
  kontak: [],
  statuschat:false
}
export const Reducer = (state=globalState,action)=>{
  if(action.type === 'UBAHLOGIN'){
    return{
      ...state,
      login : action.value
    }
  }

  if(action.type === 'USER'){
    return{
      ...state,
      user:action.value
    }
  }

  if(action.type === 'UBAHDATAUSER'){
    return{
      ...state,
      datauser:action.value
    }
  }
  if(action.type === 'UPDATEKONTAK'){
    return{
      ...state,
      kontak : action.value
    }
  }
  if(action.type === 'UBAHSTATUSCHAT'){
    return{
      ...state,
      statuschat : action.value
    }
  }
  return state
}
