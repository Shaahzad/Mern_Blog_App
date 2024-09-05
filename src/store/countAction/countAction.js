import { countAction } from "../reducers/countReducer"


export const ChangeCount  = (type) => (dispatch, getState) => {
    const {count} = getState()


    if(type === "increase"){
        dispatch(countAction.countChange(count.number+1)) // dispatch(countAction())
    }else{
        dispatch(countAction.countChange(count.number-1))
    }
}