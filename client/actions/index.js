import { updateLanguageServiceSourceFile } from "typescript"
import { decreaseLikesAPI, getAllModulesAPI, increaseLikesAPI } from "../apis/modules"
import { getSavedModulesAPI } from '../apis/modules'
import { displayCommentsAPi } from '../apis/modules'


// do we need to import request from 'superagent

export const SET_MODULES = 'SET_MODULES'
export const SET_SEARCH_MODULES ='SET_SEARCH_MODULES'

export const MODULES_HAVE_LOADED = 'MODULES_HAVE_LOADED'
// export const ADD_TO_SAVED_MODULES = 'ADD_TO_SAVED_MODULES'
// export const SET_SAVED_MODULES = 'SET_SAVED_MODULES'
export const SET_SAVED_MODULES_FROM_DATA_BASE = 'SET_SAVED_MODULES_FROM_DATA_BASE'
export const ADD_SINGLE_MODULE_TO_SAVED_MODULES = 'ADD_SINGLE_MODULE_TO_SAVED_MODULES'
export const SET_USER = 'SET_USER'
export const SET_LIKES = 'SET_LIKES'
export const DECREASE_LIKES = 'DECREASE_LIKES'
export const INCREASE_LIKES = 'INCREASE_LIKES'


export const setModules = (modules) => {
  return {
    type: SET_MODULES,
    modules
  }
}

export const modulesHaveLoaded = (boolean) => {
  return {
    type: MODULES_HAVE_LOADED,
    loaded: boolean
  }
}

export const setSavedModulesFromDatabase = (modules) => {
  return {
    type:SET_SAVED_MODULES_FROM_DATA_BASE,
    modules: modules
  }
}
export const setSingleModuleToSavedModules = (module) => {
  return {
    type:ADD_SINGLE_MODULE_TO_SAVED_MODULES,
    modules: module
  }
}



export const fetchModules = () => {
  return dispatch => {
    return getAllModulesAPI()
      .then(modules=> {
        dispatch(setModules(modules))
      })
      .then(() => dispatch(modulesHaveLoaded(true)))
  }
}




export const setSearchedModules = (modules) =>{
  return{
    type: SET_SEARCH_MODULES,
    modules
  }
}





// saved Modules

// export const addToSavedModules = (module) => {
//   return {
//     type: ADD_TO_SAVED_MODULES,
//     module
//   }
// }

// export const setSavedModules = (modules) => {
//   return {
//     type: SET_SAVED_MODULES,
//     modules
//   }
// }

export const fetchSavedModules = (userID) => {
  return dispatch => {
    return getSavedModulesAPI(userID)
      .then(modules=>
        {
        return dispatch(setSavedModulesFromDatabase(modules))
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
  
  export const setUser = (user) => {
    return {
      type: SET_USER,
      user: user
    }
  }





//Update Module Likes
  
export const increaseLikes = (module) => {
  return {
    type: INCREASE_LIKES,
    module
  }
}

export const increaseModuleLikes = (module) => {
  return dispatch => {
    return increaseLikesAPI(module)
    .then(()=> {
      dispatch(increaseLikes(module))
    })
    .catch(err => {
      console.log(err)
      })
    }
  }



  export const decreaseLikes = (module) => {
    return {
      type: DECREASE_LIKES,
      module
    }
  }
  
  export const decreaseModuleLikes = (module) => {
    return dispatch => {
      return decreaseLikesAPI(module)
      .then(()=> {
        dispatch(decreaseLikes(module))
      })
      .catch(err => {
        console.log(err)
        })
      }
    }

  
  export const commentsFetched = (comment) => {
    return {
      type: COMMENT_MODULES,
      comment
      }
    }
   
  export const fetchComments = (comment) => {
    return dispatch => {
      return displayCommentsAPi(comment)
        .then((commentsArr) => {
          commentsArr.map(comment => dispatch(commentsFetched(comment)))
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
