import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {addArticle} from '../../util/apiUtil';
import { useHistory, useParams } from 'react-router-dom';
import {fetchArticle} from '../../util/apiUtil';
import Comments from '../../components/Comments/index';
import parser from 'react-html-parser';
import {fetch} from '../../store/csrf';
import WriteComments from '../../components/WriteComments/index';
import './ViewArticle.css';


const ViewArticle = () => {
    const article_id = Number.parseInt(useParams().article_id);
    const dispatch = useDispatch();
    const history = useHistory();
    const [article, setArticle] = useState([]);
    let [openComments, setOpenComments] = useState(true);

    const articleSelector = useSelector(state =>
        Object.values(state.articles)

    );
    const sessionSelector = useSelector(state =>
        Object.values(state.session)
    );

    async function getArticles(){
        const res = await fetch('/api/articles');
        if (!res.ok) throw res;
        const {articles} = await res.data;
        setArticle(articles);
    }

    useEffect(() => {
        getArticles()
        dispatch(fetchArticle(article_id))
    }, [dispatch]);

    // if(!article){
    //     history.push('/');
    // }

    function sortArticles({updatedAt: a1}, {updatedAt: a2}) {
        const d1 = new Date(a1);
        const d2 = new Date(a2);
        return d2.getTime() - d1.getTime();
    }

    article.sort(sortArticles)

    function renderArticle(a) {
        return (
                <div className="article" key={a.id}>
                    <a href={`/articles/${a.id}`}>
                        <div className="title">{a.title}</div>
                        <div className="blurb">{a.blurb}</div>
                        <div className="date">{(new Date(a.updatedAt)).toLocaleDateString()}</div>
                        <div>{parser(a.content)}</div>
                    </a>
                </div>

        )
    }
    const onClick = () => {
        setOpenComments(!openComments)
    }

    return (
        <>
            <div className='article-container'>
                {articleSelector &&
                    articleSelector.map(article =>(
                    <div key={article.id}>
                        <div className='header'>{article.title}</div>
                        <div className='blurb'>{article.blurb}</div>
                        <div>{parser(article.content)}</div>
                        {/* <div>Written by: {article.username}</div> */}
                    </div>
                ))}

                <button className="button" onClick={onClick}>View Comments</button>
                <div className={openComments ? 'comments-container' : 'comments-container hidden'}>
                <Comments />
                <WriteComments/>
                </div>
                <div className='spacing'/>

                {article.length > 1 && (
                <div className="trending">
                    <div className='header2'>Trending Now</div>
                    {article.slice(4,7).map(art => renderArticle(art))}
                </div>)}
            </div>
        </>

    )

}

export default ViewArticle;
