//axios api
import jsonPlaceholder from "../apis/jsonPlaceholder";
//action creator
export const fetchPosts = async () => {
  const response = await jsonPlaceholder.get('/posts');

  return {
      type: 'FETCH_POSTS',
      payload: response
  };
};