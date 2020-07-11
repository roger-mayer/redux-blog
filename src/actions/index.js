//axios api
import jsonPlaceholder from "../apis/jsonPlaceholder";
//action creator
export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', PAYLOAD: response.data });
};

