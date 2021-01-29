import {useDispatch, useSelector} from 'react-redux';
import {fetch} from '../store/csrf';

const SET_COMMENTS = 'COMMENTS/setComments';
const ADD_COMMENTS = 'COMMENTS/AddComments';

const setComments = (comments) => ({
    type: SET_COMMENTS,
    comments: comments
});

const addComments = (comments) => ({type: ADD_COMMENTS, comments})

export const getAllComments = () => async (dispatch) => {
    const res = await fetch('/api/comments');
    if (!res.ok) throw res;
    const {comments} = await res.data;
    console.log('this is comments!!!!!!!', comments)
    dispatch(setComments(comments))
    return comments;
}

// export const writeComment = (payload) => async (dispatch) => {
//     const res = await fetch(`/api/comments/`, {
//         method: 'post',
//         headers: {
//           'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload)
//     })
//     if (res.ok){
//         const {comment} = await res.data;
//         dispatch(addComments(comment))
//         return comment;
//     }
// };

function commentReducer(state = {}, action) {
    let newState = Object.assign({}, state)
    switch(action.type) {
        case SET_COMMENTS:
            // newState[action.comments.id] = action.comments;
            action.comments.forEach(comment=>
                newState[comment.id]=comment)
            return newState;
        case ADD_COMMENTS:
            return Object.assign(newState, {
                [action.comment.id]: action.comment,
            });
        default:
            return state;
    }
}

export default commentReducer;
