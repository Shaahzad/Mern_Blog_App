import { userAction } from "../reducers/userReducer"


export const logout  = (type) => (dispatch) => {

    dispatch(userAction.resetuserinfo())
    localStorage.removeItem('user')
}