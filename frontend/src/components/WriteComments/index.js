import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {writeComment, getAllComments} from '../../store/comments';
import ReactQuill from 'react-quill';
import { useHistory, useParams } from 'react-router-dom';


function WriteComments(){
    const dispatch = useDispatch()
    // const writeComment = useSelector((state) => Object.values(state.comments));
    const article_id = Number.parseInt(useParams().article_id);
    const user_id = useSelector((state) => (state.session.user.id));
    const [content, setContent] = useState('');
    // console.log('comments', comments)

    useEffect(()=> {
        dispatch(getAllComments(article_id))
    },[dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            article_id,
            user_id,
            content
        };

        await dispatch(writeComment(payload));
        setContent('');
        // if (submitComment) {
        //     history.push('/');
        // }
    };

    return (
        <form onSubmit={handleSubmit}>
                <input
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                />
                <button type="submit" disabled={!content}>Submit Comment</button>
        </form>
    )
}

export default WriteComments;
