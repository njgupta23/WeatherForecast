import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
        // concat will return a NEW instance of state
        // (will not mutate the state)
        return state.concat([action.payload.data]);
        // alternate return statement:
        // return [ action.payload.data, ...state ];
    }
    return state;
}