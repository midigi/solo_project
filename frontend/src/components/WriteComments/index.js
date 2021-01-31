import { useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {writeComment } from '../../store/comments';
import { useParams } from 'react-router-dom';
import './WriteComments.css';


function WriteComments(){
    const dispatch = useDispatch()

    const article_id = Number.parseInt(useParams().article_id);
    const user_id = useSelector((state) => (state.session.user.id));
    const [content, setContent] = useState('');

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
        <form className="comments" onSubmit={handleSubmit}>
                <textarea
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                />
                <button className="button" type="submit" disabled={!content}>Submit Comment</button>
        </form>
    )
}

export default WriteComments;
