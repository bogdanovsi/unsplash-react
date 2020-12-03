export type ActionTypes =
    | IFlushStateAction
    | IFetchDataAction
    | IFetchDataLoadingAction
    | IFetchDataErrorAction
    | IClearPhotosAction
    | IChoosePainterAction
    | IRemovePainterAction
    | IClearPainterAction

export enum Types {
    FLUSH_STATE = 'FLUSH_STATE',
    FETCH_PAINTERS_LOAD = 'FETCH_PAINTERS_LOAD',
    FETCH_PAINTERS_ERROR = 'FETCH_PAINTERS_ERROR',
    FETCH_PAINTERS = 'FETCH_PAINTERS',
    PAINTERS_CLEAR_PHOTOS = 'PAINTERS_CLEAR_PHOTOS',
    CHOOSE_PAINTER = 'CHOOSE_PAINTER',
    REMOVE_PAINTER = 'REMOVE_PAINTER',
    CLEAR_PAINTER = 'CLEAR_PAINTER'
}

export interface IChoosePainterAction {
    type: Types.CHOOSE_PAINTER;
    photo: any;
}
export const choosePainterState = (photo): IChoosePainterAction => {
    return {
        type: Types.CHOOSE_PAINTER,
        photo
    };
};

export interface IRemovePainterAction {
    type: Types.REMOVE_PAINTER;
    photo: any;
}
export const removePainterState = (photo): IRemovePainterAction => {
    return {
        type: Types.REMOVE_PAINTER,
        photo
    };
}

export interface IClearPainterAction {
    type: Types.CLEAR_PAINTER;
}
export const clearPainterState = (): IClearPainterAction => {
    return {
        type: Types.CLEAR_PAINTER
    };
}

export interface IFlushStateAction {
    type: Types.FLUSH_STATE;
}
export const flushState = (): IFlushStateAction => {
    return {
        type: Types.FLUSH_STATE
    };
};

export interface IFetchDataAction {
    type: Types.FETCH_PAINTERS;
    photos: Array<any>;
    total_page: number;
    page: number;
    isLoading: boolean;
}
export const done = ({photos, page, total_page}) => ({
    type: Types.FETCH_PAINTERS,
    photos,
    page,
    total_page,
    isLoading: false
})

export interface IFetchDataLoadingAction {
    type: Types.FETCH_PAINTERS_LOAD;
    isLoading: boolean;
}
export const isLoading = (isLoading: boolean): IFetchDataLoadingAction => ({ type: Types.FETCH_PAINTERS_LOAD, isLoading: isLoading })

export interface IFetchDataErrorAction {
    type: Types.FETCH_PAINTERS_ERROR;
    isLoading: boolean;
    err: Error;
}
export const isError = (err: Error): IFetchDataErrorAction => ({ type: Types.FETCH_PAINTERS_ERROR, isLoading: false, err })

export interface IClearPhotosAction {
    type: Types.PAINTERS_CLEAR_PHOTOS;
    photos: Array<any>
}
export const clearPhotos = () => ({
    type: Types.PAINTERS_CLEAR_PHOTOS
})