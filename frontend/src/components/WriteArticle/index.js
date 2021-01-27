import ReactQuill from 'react-quill';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addArticle} from '../../util/apiUtil';
import { useHistory } from 'react-router-dom';

const WriteArticle = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [blurb, setBlurb] = useState('');
    const [content, setContent] = useState('');

    // const handleTitle = (e) => {
    //     setTitle(e.target.value);
    // }
    // const handleBlurb = (e) => {
    //     setBlurb(e.target.value);
    // }
    // const handleContent = (e) => {
    //     setText(e.target.value);
    // }

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
        <div>
            <p>Write your article here!</p>
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
                <button type="submit" disabled={!title && !blurb && !content}>Submit Article</button>
            </form>

        </div>

    )
}

export default WriteArticle;
