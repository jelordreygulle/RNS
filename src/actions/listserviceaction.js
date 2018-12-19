import * as ActionTypes from './listactiontype';
import { connect } from 'react-redux';
import axios from 'react-native-axios';
import ListComponent from '../components/ListComponent';


const mapStateToProps = (state) => ({
    isLoading: state.serviceReducer.isLoading,
    error: state.serviceReducer.error,
    data: state.serviceReducer.data
});

const mapDispatchToProps = (dispatch) => ({
    callService: () => dispatch(callWebservice())
})

export const callWebservice = () => {
    return dispatch => {
        dispatch(serviceActionPending())
        axios('https://www.yahshuabooksonline.com/api/user-company-list/',
            {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Token 83ae1c50c93f35096771f0e3580e2ef04248776d',
                },
            })

            .then(response => {
                console.log("Response")
                console.log("Response Data:",  response.data)
                dispatch(serviceActionSuccess(response))
            })
            .catch(error => {
                console.log("errror here" , response.status)
                dispatch(serviceActionError(error))
            });
    }
}

export const serviceActionPending = () => ({
    type: ActionTypes.SERVICE_PENDING
})

export const serviceActionError = (error) => ({
    type: ActionTypes.SERVICE_ERROR,
    error: error
})

export const serviceActionSuccess = (data) => ({
    type: ActionTypes.SERVICE_SUCCESS,
    data: data
})

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
