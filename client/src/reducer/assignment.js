import{
    ADD_ASSIGNMENT_START,
    ADD_ASSIGNMENT_SUCCESS,
    ADD_ASSIGNMENT_FAILED,
} from '../Action/actionType';

const initialPropertyState = {
    message: null,
    inProgress: false,
};

export default function auth(state = initialPropertyState, action) {
    switch (action.type) {
        case ADD_ASSIGNMENT_START:
            return{
                ...state,
                inProgress: true,
            };
        case ADD_ASSIGNMENT_SUCCESS:
            return{
                ...state,
                inProgress: false,
                message: action.msg,
            };
        case ADD_ASSIGNMENT_FAILED:
            return{
                ...state,
                message: action.msg,
            }
        default:
            return state;
    }
} 