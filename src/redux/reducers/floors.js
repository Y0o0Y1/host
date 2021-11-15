const initialState = {
    loading: false,
    floors: [],
    error: "",
    status: ""
}

const floorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_FLOORS_REQUEST":
            return { ...state, loading: true }
        case "FETCH_FLOORS_SUCCESS":
            return { ...state, loading: false, floors: action.payload.data }
        case "FETCH_FLOORS_FAILURE":
            return { ...state, loading: false, floors: [], error: action.payload }
        case "ADD_FLOOR":
            return { ...state, status: "Added Floor", floors: state.floors ? state.floors : [], response: "Floor Added" }
        case "UPDATE_FLOOR":
            return { ...state, status: "Updated Floor", floors: state.floors ? state.floors : [], response: "Floor Updated" }
        case "DELETE_FLOOR":
            return { ...state, status: "Deleted Floor", floors: state.floors ? state.floors : [], response: "Floor Deleted" }
        default:
            return state
    }
}

export default floorsReducer