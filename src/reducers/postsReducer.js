export default (state, action) => {
  //return state + action
    //mutation means changing elements in an array/object

    //creating/adding to an array:
    //const colors = ['red', 'green']
    //[...colors, 'blue']

    //removing element
    //colors.filter(color => color !== 'blue')
    if (action.type === 'FETCH_POSTS') {
        return action.payload;
    }


};

