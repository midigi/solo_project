import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import getAllComments from '../../store/comments'

function Comments(){
    const dispatch = useDispatch()
    const comments = useSelector((state) => Object.values(state.comments));
    console.log('comments', comments)

    useEffect(()=> {
        dispatch(getAllComments())
    },[])

    return (
        <>
        <div>Hey</div>
        {
            comments.map(comment => (comment.content))
        }

        </>
    )
}

export default Comments;
