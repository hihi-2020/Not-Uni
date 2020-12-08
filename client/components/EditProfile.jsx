import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { updateFirebase } from '../actions/authenticated'


const EditProfile = (props) => {
  const [userName, setUserName] = useState(props.user.userName)
  const [email, setEmail] = useState(props.user.email)
  const [error, setError] = useState('')
  const [pokemon, setPokemon] = useState(0)

  function submit(e){
    e.preventDefault()
      try{
        props.dispatch(updateFirebase(userName, email , pokemon, props.sidebarClickHandler))
      }catch (e) {
      console.log(e)
      // setError("Failed to edit")
      return "Failed to registrate"
     }
  }



    return (
      <>
      {props.hasLoaded && 
      <>
      <h1>{error}</h1>
      <div className='Register-card'>
        <form onSubmit={submit}>

        <input className='Input-R' type="text" onChange={e => setUserName(e.target.value)} value={userName}/>
        <input className='Input-R' type="text" onChange={e => setEmail(e.target.value)} value={email}/>
        <input className='Input-R' type="number" onChange={e => setPokemon(e.target.value)} value={pokemon}/>
        <input className='button' type='submit' value='Edit'/>
        </form>
        
        <a><p className='button' type='submit' onClick={() => props.sidebarClickHandler("password")}>Edit password</p></a>
    
      </div>
      </>
      }
      </>
    )
}

function mapStateToProps(globalState) {
  return {
    dispatch: globalState.dispatch,
    hasLoaded: globalState.hasLoaded.authHasLoaded,
    user: globalState.user,
    modules: globalState.modules,
    savedModules: globalState.savedModules,
    hasLoaded: globalState.hasLoaded
  }
}

export default connect(mapStateToProps)(EditProfile)