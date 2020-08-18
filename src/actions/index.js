import _, {memoize} from 'lodash';
//axios api
import jsonPlaceholder from "../apis/jsonPlaceholder";

//action creator
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
        //get posts
        await dispatch(fetchPosts());
        const userIds =_.uniq(_.map(getState().posts, 'userId'));
        console.log(userIds);
};


//action creator
export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// need to define function outside of action creator
export const fetchUser = (id) => async dispatch => {
        const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({ type: 'FETCH_USER', payload: response.data });
};

//memoized version
// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async(id, dispatch) => {
//         const response = await jsonPlaceholder.get(`/users/${id}`);
//
//         dispatch({ type: 'FETCH_USER', payload: response.data });
// });






