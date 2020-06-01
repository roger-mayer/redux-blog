//axios api
import jsonPlaceholder from "../apis/jsonPlaceholder";
//action creator
export const fetchPosts =  () => {
    return async function (dispatch, getState) {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', PAYLOAD: response })
    };
};

