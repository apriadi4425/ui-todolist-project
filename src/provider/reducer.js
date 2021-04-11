export const initialState = {
    Loading : true,
    Token : null,
    User : {}
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
        default :
            throw new Error()
    }
}