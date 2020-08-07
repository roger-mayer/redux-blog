import _ from 'lodash';
//axios api
import jsonPlaceholder from "../apis/jsonPlaceholder";

//action creator
export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// need to define function outside of action creator
export const fetchUser = (id) => async dispatch => {


};
const _fetchUser = () -.memoize(() => {
        const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({ type: 'FETCH_USER', payload: response.data });

});


