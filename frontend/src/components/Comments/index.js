import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllComments} from '../../store/comments';
import { useParams } from 'react-router-dom';

function Comments(){
    const dispatch = useDispatch()
    const article_id = Number.parseInt(useParams().article_id);
    const comments = useSelector((state) => Object.values(state.comments));
    // console.log('comments', comments)

    useEffect(()=> {
        dispatch(getAllComments(article_id))
    },[dispatch])

    return (
        <>
        {comments &&
        <div className="comment-list">
            {comments.map(comment =>
            <div key={comment.id}>
                <div>{comment.content}</div>
                {/* <div>Written by:{comment.user_id}</div> */}
            </div>)}
        </div>
        }
        </>
    )
}

export default Comments;
