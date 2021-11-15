import axios from "axios";

const DELETE_FLOOR = "DELETE_FLOOR";
const ADD_FLOOR = "ADD_FLOOR";
const UPDATE_FLOOR = "UPDATE_FLOOR";
const FETCH_FLOORS_REQUEST = "FETCH_FLOORS_REQUEST";
const FETCH_FLOORS_SUCCESS = "FETCH_FLOORS_SUCCESS";
const FETCH_FLOORS_FAILURE = "FETCH_FLOORS_FAILURE";

const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDE0LCJyZXN0YXVyYW50X3VzZXJfZ3JvdXBfaWQiOjEsIm5hbWUiOiJyYWJlYSIsImVtYWlsIjoicmFiZWFhbHNvbGltYW5AZ21haWwuY29tIiwibW9iaWxlIjoiKzIwMTAyNzgwMTAxOSIsImlzX2VtYWlsX3ZlcmlmaWVkIjoxLCJpc19tb2JpbGVfdmVyaWZpZWQiOjEsInR3b19mYWN0X2F1dGhfYXBwIjowLCJ0d29fZmFjdF9hdXRoX3NtcyI6MCwic3RhdHVzIjoxLCJzdGVwIjowLCJsb2dpbl9hZnRlcl9hY3RpdmF0aW9uIjoxLCJpc19zdXNwZW5kIjowLCJjcmVhdGVkX2F0IjoiMjAyMS0wOS0xNFQxMToyMzoyOC4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMjEtMDktMTRUMTI6MTg6MDAuMDAwWiIsIlJlc3RhdXJhbnRfdXNlcl9ncm91cCI6eyJpZCI6MSwibmFtZSI6IlJlc3RhdXJhbnQgT3duZXIifSwiaWF0IjoxNjM2MjkzMTQ0LCJleHAiOjE2Mzg4ODUxNDR9.U-AQoH-5MR7UyWT1NrPbLI-rRTkxaYH0qJDN0A1J3u0";

  
// Action Creator
export const fetchFloorsRequest = (dispatch) => {
  dispatch({
    type: FETCH_FLOORS_REQUEST,
  });
};
export const fetchFloorsSuccess = (dispatch, floors) => {
  dispatch({
    type: FETCH_FLOORS_SUCCESS,
    payload: floors,
  });
};
export const fetchFloorsFailure = (dispatch, error) => {
  dispatch({
    type: FETCH_FLOORS_FAILURE,
    payload: error,
  });
};

export const fetchFloors = (dispatch) => {
  dispatch({ type: FETCH_FLOORS_REQUEST });
  console.log("fetching");
  var config = {
    method: "get",
    url: "https://thehostapp-api.azurewebsites.net/api/v1/floors/getall?limit=10000&pageNumber=1&branch_id=183",
    headers: {
      "x-auth-token": AUTH_TOKEN,
    },
  };
  axios(config)
    .then((response) => {
      if (response.data.data) {
        fetchFloorsSuccess(dispatch, response.data);
      } else fetchFloorsSuccess(dispatch, []);
    })
    .catch(function (error) {
      fetchFloorsFailure(dispatch, error);
    });
};

export const deleteFloorAction = (dispatch) => {
  dispatch({
    type: DELETE_FLOOR,
  });
};

export const updateFloorAction = (dispatch) => {
  dispatch({
    type: UPDATE_FLOOR,
  });
};

export const addFloorAction = (dispatch) => {
  dispatch({
    type: ADD_FLOOR,
  });
};
export const addFloor = (dispatch, data) => {
  dispatch({ type: ADD_FLOOR });
  var config = {
    method: "post",
    url: "https://thehostapp-api.azurewebsites.net/api/v1/floors/create",
    headers: {
      "x-auth-token": AUTH_TOKEN,
    },
    data: data,
  };
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      dispatch({ type: ADD_FLOOR, payload: response.data });
      fetchFloors(dispatch, "183");
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const deleteFloor = (dispatch, floorId) => {
  dispatch({ type: DELETE_FLOOR });
  var config = {
    method: "delete",
    url: `https://thehostapp-api.azurewebsites.net/api/v1/floors/delete?id=${floorId}&branch_id=183`,
    headers: {
      "x-auth-token": AUTH_TOKEN,
    },
  };
  axios(config)
    .then(function (response) {
      dispatch({ type: DELETE_FLOOR, payload: response.data.message });
      console.log(JSON.stringify(response.data));
      fetchFloors(dispatch, "183");
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const updateFloor = (dispatch, currentRow) => {
  console.log(currentRow);
  var data = new FormData();
  data.append("id", currentRow.id);
  data.append("branch_id", "183");
  data.append("name", currentRow.name);
  dispatch({ type: UPDATE_FLOOR });
  var config = {
    method: "put",
    url: "https://thehostapp-api.azurewebsites.net/api/v1/floors/update",
    headers: {
      "x-auth-token": AUTH_TOKEN,
    },
    data: currentRow,
  };
  axios(config)
    .then(function (response) {
      dispatch({ type: UPDATE_FLOOR, payload: response.data });
      fetchFloors(dispatch, "183");
    })
    .catch(function (error) {
      console.log(error);
    });
};