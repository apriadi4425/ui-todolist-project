export const initialState = {
    Loading : true,
    LoadingAgenda : true,
    Token : null,
    Login : false,
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
                ...state,
                Login : true,
                Loading : false,
                Token : action.token,
                User : action.user
            }
        case 'PENGGUNA_UMUM' : {
            return {
                ...state,
                Loading : false
            }
        }
        case 'GET_AGENDA' : 
            return {
                ...state, agenda : action.data
            }
        case 'LOADING_FALSE' : 
            return {
                ...state, LoadingAgenda : false, Loading : false
            }
        default :
            throw new Error()
    }
}