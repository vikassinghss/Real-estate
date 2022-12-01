

export const INITIAL_STATE = {
    userName: [],
    rooms:[]
}
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        //LOADING EVENTS START HERE
        case "UPDATE_USER_NAME":
            return { ...state, userName: action.payload }
        case "SEARCH_ROOM":
            return { ...state, rooms: action.payload }
        default:
            return state;
    }

};
