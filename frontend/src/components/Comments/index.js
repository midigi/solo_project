import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllComments} from '../../store/comments';

function Comments(){
    const dispatch = useDispatch()
    const comments = useSelector((state) => Object.values(state.comments));
    console.log('comments', comments)

    useEffect(()=> {
        dispatch(getAllComments())
    },[dispatch])

    return (
        <>
        <div>hey</div>
        {comments && comments.map(comment =>
        <div key={comment.id}>
            <div>{comment.content}</div>
            <div>Written by:{comment.user_id}</div>
        </div>)
        }
        </>
    )
}

export default Comments;
