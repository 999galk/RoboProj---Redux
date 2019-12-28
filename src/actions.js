import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_FAILED } from './constants.js';

//The following function returns an object
export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

//The following function returns a function (high hirarchy function), its called in a different way syntax from the APP dispatch, sent as a argument instead of being triggered from there.
// thunk middleware is working with this type of functions only!
export const requestRobots = () => (dispatch) => {
	dispatch({type : REQUEST_ROBOTS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload : data}))
			.catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err}));
}