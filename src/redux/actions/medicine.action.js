import * as ActionType from '../ActionType'
import { baseUrl } from '../../shared/baseUrl';
import { configureStore } from '../Store';

const store = configureStore()

export const fetchMedicines = () => (dispatch) => {
  //dispatch(medicinesLoading(true));

  setTimeout(function () {
    return fetch(baseUrl + 'medicine')
      .then(response => {
        console.log(response)
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
      .then(medicines => dispatch(({ type: ActionType.MEDICINES_RETRIEVED, payload: medicines })))
      .catch(error => dispatch(medicinesFailed(error.message)));
  }, 1000)
}

export const medicinesFailed = (error) => ({
  type: ActionType.MEDICINES_FAILED,
  payload: error
})

export const medicinesLoading = () => ({
  type: ActionType.MEDICINES_LOADING,
})

export const deleteMedicine = (id) => (dispatch) => {
  return fetch(baseUrl + 'medicine/' + id, {
    method: 'delete'
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
    .then(alert("Medicine deleted successfully."))
    .then(dispatch(({ type: ActionType.MEDICINES_DELETE, payload: id })))
    .catch(error => dispatch(medicinesFailed(error.message)));
}
export const addMedicine = (newData) => (dispatch, getState) => {
  console.log(newData,"newData")
  let data = newData.length
  console.log(data);
  let medicinesData = getState().Medicines
  console.log(medicinesData);
  let lastId = (medicinesData.medicines[medicinesData.medicines.length - 1].id + 1)

  newData.map((l) => {
    let newMedidicneData = { ...l, 'id': lastId++ }

    return fetch(baseUrl + "medicine", {
      method: 'POST',
      body: JSON.stringify(newMedidicneData),
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
      .then(alert("add medicines successfully"))
      .then(() => dispatch(({ type: ActionType.MEDICINES_ADD, payload: newMedidicneData })))
      .catch(error => dispatch(medicinesFailed(error.message)))
  })
}
export const editMedicine = (editData) => (dispatch) => {
  return fetch(baseUrl + 'medicine/' + editData.id, {
    method: 'put',
    body: JSON.stringify(editData),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: "same-origin"
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
    .then(alert("Medicine edit successfully."))
    .then(dispatch(({ type: ActionType.MEDICINES_UPDATE, payload: editData })))
    .catch(error => dispatch(medicinesFailed(error.message)));
}

