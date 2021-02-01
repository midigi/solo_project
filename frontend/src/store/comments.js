import {fetch} from '../store/csrf';

const SET_COMMENTS = 'COMMENTS/setComments';
const ADD_COMMENTS = 'COMMENTS/AddComments';

const setComments = (comments) => ({
    type: SET_COMMENTS,
    comments: comments
});

const addComments = (comments) => ({type: ADD_COMMENTS, comments: comments})

export const getAllComments = (article_id) => async (dispatch) => {
    const res = await fetch(`/api/comments/${article_id}`);
    if (!res.ok) throw res;
    const {comments} = await res.data;
    dispatch(setComments(comments))
    return comments;
}

export const writeComment = (payload) => async (dispatch) => {
    const res = await fetch("/api/comments", {
        method: 'POST',
        body: JSON.stringify(payload)
    })
    if (res.ok){
        const {comments} = await res.data;
        dispatch(addComments(comments))
        return comments;
    }
};

function commentReducer(state = {}, action) {
    let newState = Object.assign({}, state)
    switch(action.type) {
        case SET_COMMENTS:
            action.comments.forEach(comment=>
                newState[comment.id]=comment)
            return newState;
        case ADD_COMMENTS:
            return Object.assign(newState, {
                [action.comments.id]: action.comments,
            });
        default:
            return state;
    }
}

export default commentReducer;
