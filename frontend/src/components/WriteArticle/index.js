import ReactQuill from 'react-quill';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

const WriteArticle = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [blurb, setBlurb] = useState('');
    const [text, setText] = useState('');

    const handleTitle = (content) => {
        setTitle(content);
    }

    const handleBlurb = (content) => {
        setBlurb(content);
    }

    const handleContent = (content) => {
        setText(content);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            title,
            blurb,
            text,
        };

        // const submitArticle = await dispatchEvent(thunkactionhere(payload));
        // if (submitArticle) {
        //     hideForm();
        // }
    };

    return (
        <div>
            <p>Write your article here!</p>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Title"
                    value={title}
                    onChange={setTitle}
                />
                <input
                    placeholder="Blurb"
                    value={blurb}
                    onChange={setBlurb}
                />
                <ReactQuill
                    placeholder="Lorem impsum"
                    value={text}
                    onChange={handleContent}
                />
                <button type="submit">Submit Article</button>
            </form>

        </div>

    )
}

export default WriteArticle;
