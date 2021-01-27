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
    const [text, setText] = useState('');

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleBlurb = (e) => {
        setBlurb(e.target.value);
    }
    const handleContent = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            title,
            blurb,
            text,
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
                    onChange={(e)=>handleTitle(e)}
                />
                <input
                    placeholder="Blurb"
                    value={blurb}
                    onChange={(e)=>handleBlurb(e)}
                />
                <ReactQuill
                    placeholder="Lorem impsum"
                    value={text}
                    onChange={(e)=>handleContent(e)}
                />
                <button type="submit" onSubmit={handleSubmit} disabled={!!title && !!blurb && !!text}>Submit Article</button>
            </form>

        </div>

    )
}

export default WriteArticle;
