export const initialState = {
    Loading : true,
    LoadingAgenda : true,
    Token : null,
    User : {},
    agenda : {}
}

export const reducer = (state, action) => {
    switch(action.type){
        case 'COBA_LOGIN' :
            return {
                ...state, Loading : true
            }
        case 'LOGIN_SUKSES' : 
            return {
                Loading : false,
                Token : action.token,
                User : action.user
            }
        case 'GET_AGENDA' : 
            return {
                ...state, agenda : action.data
            }
        case 'LOADING_FALSE' : 
            return {
                ...state, LoadingAgenda : false
            }
        default :
            throw new Error()
    }
}