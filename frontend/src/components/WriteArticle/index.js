import ReactQuill from 'react-quill';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addArticle} from '../../util/apiUtil';
import { useHistory } from 'react-router-dom';
import './WriteArticle.css';

const WriteArticle = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [blurb, setBlurb] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            title,
            blurb,
            content,
        };

        const submitArticle = await dispatch(addArticle(payload));
        if (submitArticle) {
            history.push('/');
        }
    };

    return (
        <div className='writerContainer'>
            <p className='header'>Write your article here!</p>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <input
                    placeholder="Blurb"
                    value={blurb}
                    onChange={(e)=>setBlurb(e.target.value)}
                />
                <ReactQuill
                    placeholder="Lorem impsum"
                    value={content}
                    onChange={(value)=>setContent(value)}
                />
                <button className="button" type="submit" disabled={!title && !blurb && !content}>Submit Article</button>
            </form>

        </div>

    )
}

export default WriteArticle;
