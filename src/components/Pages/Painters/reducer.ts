import { Reducer } from "redux";
import { ActionTypes, Types } from "./actions";

interface Painters { }

export interface IPaintersState {
    photos: Array<any>;
    choosePhotosId: Array<string>;
    total_page: number,
    page: number,
    errMessage: string | null;
    isLoading: boolean;
}

const initialState: IPaintersState = {
    photos: [],
    choosePhotosId: [],
    total_page: 1,
    page: 1,
    errMessage: null,
    isLoading: true,
};

const reducer = (
    state: IPaintersState = initialState,
    action: ActionTypes
): IPaintersState => {
    switch (action.type) {
        case Types.FLUSH_STATE:
            return {
                ...initialState,
            };
        case Types.FETCH_PAINTERS_LOAD: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case Types.FETCH_PAINTERS: {
            return {
                ...state,
                photos: action.page === 1 ? action.photos : state.photos.concat(action.photos),
                total_page: action.total_page,
                page: action.page,
                isLoading: false
            };
        }
        case Types.FETCH_PAINTERS_ERROR: {
            return {
                ...state,
                isLoading: false,
                errMessage: action.err.message
            }
        }
        case Types.PAINTERS_CLEAR_PHOTOS: {
            return {
                ...state,
                photos: []
            }
        }
        case Types.CHOOSE_PAINTER: {
            return {
                ...state,
                choosePhotosId: [...new Set([...state.choosePhotosId, action.photo.id])]
            }
        }
        case Types.REMOVE_PAINTER: {
            return {
                ...state,
                choosePhotosId: [...state.choosePhotosId].filter(id => id !== action.photo.id)
            }
        }
        case Types.CLEAR_PAINTER: {
            return {
                ...state,
                choosePhotosId: []
            }
        }
        default:
            return state;
    }
};

export default reducer;