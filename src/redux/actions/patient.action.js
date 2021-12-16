import * as ActionType from '../ActionType'
import { baseUrl } from '../../shared/baseUrl'
import { configureStore } from '../Store'

const store = configureStore()
export const fetchPatients = (dispatch) => {
    setTimeout(function () {
        return fetch(baseUrl + "patient")
            .then(response => {
                console.log(response)
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error' + response.status + ':' + response.statusText);
                    error.response = response;
                    throw error
                }

            },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess
                })
            .then(response => response.json())
            .then(patients => dispatch(({ type: ActionType.PATIENT_RETRIVED, payload: patients })))
            .catch(error => dispatch(patientFailed(error.message)));
    }, 1000)
}

export const patientFailed =(error)=>({
    type:ActionType.PATIENT_FAILED,
    payload : error

})
export const addPatients = (newData) =>(dispatch,getState)=>{
    console.log(newData,"newData")
    let data = newData.length
    console.log(data)
    let patients = getState().Patientes
    console.log(patients.patients)
    let lastId = (patients.patients[patients.patients.length-1].id+1)
    console.log(lastId)
    newData.map((n)=>{
        let newPatientsData = {...n,'id':lastId++}
        console.log(newPatientsData)

        return fetch(baseUrl + "patient", {
            method: 'POST',
            body: JSON.stringify(newPatientsData),
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
        error => {
          var errmess = new Error(error.message);
          throw errmess;
        })
      .then(response => response.json())
      .then(alert("add patients successfully"))
      .then(() => dispatch(({ type: ActionType.PATIENT_ADD, payload: newPatientsData })))
      .catch(error => dispatch(patientFailed(error.message)))
  })
}
export const deletePatients = (id) => (dispatch)=>{
    return fetch (baseUrl + "patient/"+id,{
        method : 'delete',
    })
    .then(response => {
        if (response.ok) {
          return response
        }
        else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
        error => {
          var errmess = new Error(error.message);
          throw errmess;
        })
      .then(alert("Patients deleted successfully."))
      .then(dispatch(({ type: ActionType.PATIENT_DELETE, payload: id })))
      .catch(error => dispatch(patientFailed(error.message)));
}