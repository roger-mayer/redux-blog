//axios api
import jsonPlaceholder from "../apis/jsonPlaceholder";
//action creator
export const fetchPosts = () => {
    return function (dispatch, getState) {

        const response = jsonPlaceholder.get('/posts');

        //action object
        return {
            type: 'FETCH_POSTS',
            payload: response
        };
    }
};