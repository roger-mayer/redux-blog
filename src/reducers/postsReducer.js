export default (state = [], action) => {
  //return state + action
    //mutation means changing elements in an array/object

    //creating/adding to an array:
    //const colors = ['red', 'green']
    //[...colors, 'blue']

    //removing element
    //colors.filter(color => color !== 'blue')
    //
    // if (action.type === 'FETCH_POSTS') {
    //     return action.payload;
    // }
    //
    // //if action.type is not fetch_posts, must not return undefined
    // return state;

    //or use switch because there will ususally be mulitple cases

    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};

