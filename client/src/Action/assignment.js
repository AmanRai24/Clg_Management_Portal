import{
    ADD_ASSIGNMENT_START,
    ADD_ASSIGNMENT_SUCCESS,
    ADD_ASSIGNMENT_FAILED,
} from './actionType';


import { APIUrls } from '../helpers/urls';
import { getFormBody,getAuthTokenFromLocalStorage } from '../helpers/utils';


export function startAddProperty(){
    return {
        type: ADD_ASSIGNMENT_START,
    }
}
export function addPropertySuccess(msg){
    return{
        type: ADD_ASSIGNMENT_SUCCESS,
        msg
    }
}
export function addPropertyFailed(msg){
    return {
        type: ADD_ASSIGNMENT_FAILED,
        msg
    }
}

export function addproperty(assignment,title,deadline,description){
    return(dispatch) => {
        dispatch(startAddProperty());
        const url = APIUrls.addproperty();
        fetch(url,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`, 
            },
            body: getFormBody({assignment,title,deadline,description}),
        })
        .then((response) => response.json())
        .then(data => {
            console.log('add data success',data);
            if(data.success){
                dispatch(addPropertySuccess(data.message));
                return;
            }
            dispatch(addPropertyFailed('Server Error! Try again'));
        })

    }
} 