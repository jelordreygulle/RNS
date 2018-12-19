//As shown above within the callWebservice method three action types has been dispatched 
//for each response from on start until a response is
// received irrespective of success or error and thereby 
//the reducer will update the status accordingly which is shown below.

import * as Actions from '../actions/listactiontype'

const ServiceReducer = (state = { isLoading: false, error: undefined, data: {} }, action) => {
    switch (action.type) {
        case Actions.SERVICE_PENDING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.SERVICE_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.SERVICE_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data
            }); 
        default:
            return state;
    }
}

export default ServiceReducer;
