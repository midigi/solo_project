const SET_COMMENTS = 'comments/setComments';

const setComments = (comment) => ({
    type: SET_COMMENTS,
    payload: comment
});

export const getAllComments = () => async (dispatch) => {
    const res = await fetch('/api/comments');

    const json = await res.json()
    const comments = json.comments
    dispatch(setComments(comments))
}

const initialState = { '0': {id:'0', message: 'hilarious frontend'}};

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;
