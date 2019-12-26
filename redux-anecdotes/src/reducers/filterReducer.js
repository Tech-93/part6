const filterAtStart = ''

const filterReducer = (state = filterAtStart, action) => {
    switch(action.type){
        case 'FILTER':
            return state = action.data.text
         // no default
    }
    
    return state
}

export const filterChange = text => {
    return {
        type: 'FILTER',
        data: { text }
    }
}


export default filterReducer