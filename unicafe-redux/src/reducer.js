const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }
  
  const counterReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type)
     {
      case 'GOOD':
          const goodToChange = {
              ...state,
              good: state.good + 1
          }
          state = goodToChange
        return state
  
      case 'OK':
          const okToChange = {
              ...state,
              ok: state.ok + 1 
          }
          state = okToChange
        return state
  
      case 'BAD':
          const badToChange = {
              ...state,
              bad: state.bad + 1
          }
          state = badToChange
        return state
  
      case 'ZERO':
          state = initialState
        return state
  
  
        // no default
    }
    return state
  }
  
  export default counterReducer