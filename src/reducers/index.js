const initialState = {
  userInfo: {
    name: "",
    mobile: "",
    altMobile: "",
    email: "",
    address: "",
    linkedIn: "",
    country:""
  },
  objective: "",
  skills: [],
  certification: [],
  projects: [],
  educational: [

],
};


function rootReducer(state = initialState, action) {
  if (action.type === "ADDUSERINFO") {
    console.log("inside add user reducer");
    let newState = {
      ...state,
      userInfo: action.payload,
    };
    
    return newState;
  }
  else if (action.type === "ADD-OBJECTIVE") {
    console.log("inside add user reducer");
    let newState = {
      ...state,
      objective: action.payload,
    };

    return newState;

  }
  else if (action.type === "ADD-EDUCATION") {
    const newState = {
      ...state,
      educational: action.payload
    }
    return newState;
  }
  

  else if(action.type==="ADD-CERTIFICATE")
  {
    const newState = {
      ...state,
      certification: action.payload
    }
    return newState;
  }

  else if(action.type==="ADD-PROJECTS")
  {
    const newState = {
      ...state,
      projects: action.payload
    }
    return newState;
  }
  
  else if(action.type==="ADD-SKILLS")
  {
    const newState = {
      ...state,
      skills: action.payload
    }
    return newState;
  }
  

 



  return state;
}

export default rootReducer;