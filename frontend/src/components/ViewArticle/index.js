import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {addArticle} from '../../util/apiUtil';
import { useHistory, useParams } from 'react-router-dom';
import {fetchArticle} from '../../util/apiUtil'
import Comments from '../../components/Comments/index'

const ViewArticle = () => {
    const article_id = Number.parseInt(useParams().article_id);
    const dispatch = useDispatch();
    const history = useHistory();
    // const showComment = false

    const articleSelector = useSelector(state =>
        // console.log("this is the state", Object.values(state.articles)[0].title)
        Object.values(state.articles)

    );
    const sessionSelector = useSelector(state =>
        // console.log("this is the state", Object.values(state.articles)[0].title)
        Object.values(state.session)
    );

    // const [title, setTitle] = useState(articleSelector ? articleSelector.title : "");

    useEffect(() => {
        dispatch(fetchArticle(article_id))
    }, [dispatch]);

    // if(!article){
    //     history.push('/');
    // }


    return (
        <>
            <div>
                IT WORKED
                {articleSelector &&
                    articleSelector.map(article =>(
                    <div key={article.id}>
                        <div>{article.title}</div>
                        <div>{article.blurb}</div>
                        <div>{article.content}</div>
                    </div>
                ))}
                {sessionSelector &&
                    sessionSelector.map(session => (
                        <div key={session.id}>
                            <div>Written by: {session.username}</div>
                        </div>
                    ))}
                {/* <form>
                    <UserComments />
                </form> */}
                <button >Icon for comments</button>
                <Comments />
            </div>
        </>

    )

}

export default ViewArticle;
