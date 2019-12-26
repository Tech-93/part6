const message = ''

const notificationReducer = (state = message, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch(action.type) {
        case 'MESSAGE':
            return state = 'you voted ' + "'" + action.data.content + "'"

        case 'RESET':
            return state = ''
        // no default
    }

    return state
}




export const messageRewrite = (content) => {
    return {
        type: 'MESSAGE',
        data: { content }
    }
}


export const messageReset = () => {
    return {
        type: 'RESET'
    }
}

export const setNotification = (content, timer) => {
    return async dispatch => {

        dispatch({
            type: 'MESSAGE',
            data: { content },
        })

        setTimeout(() => {
            dispatch({
                type: 'RESET'
            })
        }, timer * 1000)

    }
}

export default notificationReducer