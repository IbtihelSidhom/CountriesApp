import { TOGGLE_ERROR } from "../constants/action-types";

export default function error(state = "", action) {
    switch (action.type) {
        case TOGGLE_ERROR:
            return action.payload;
        default:
            return state
    }
};
