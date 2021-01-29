import './HomePage.css';
import {useEffect, useState, React} from 'react';
import {fetchAllArticles} from '../../util/apiUtil';
import {useDispatch, useSelector} from 'react-redux';
import {fetch} from '../../store/csrf';
import parser from 'react-html-parser';

function HomePage(){
    // const parser = new DOMParser();
    const [article, setArticle] = useState([]);
    // console.log('useselector', useSelector(state));
    // const stateArticles = useSelector(state=>state.articles);
    // console.log('what is this', stateArticles)
    async function getArticles(){
        const res = await fetch('/api/articles');
        if (!res.ok) throw res;
        const {articles} = await res.data;
        setArticle(articles);
    }

    // useSelector....
    const dispatch = useDispatch();
    // useEffect( () => {
    //     const fetchArticles = async ()=>{
    //         dispatch(await fetchAllArticles());
    //     }
    //     const result = fetchArticles();
    //     setArticle([...article, result]);

    // },[]);
    useEffect( () => {
        getArticles()
    },[]);

    function sortArticles({updatedAt: a1}, {updatedAt: a2}) {
        const d1 = new Date(a1);
        const d2 = new Date(a2);
        return d2.getTime() - d1.getTime();
    }

    article.sort(sortArticles)

    function renderArticle(a) {
        return (
                <div className="article" key={a.id}>
                    <div className="title">{a.title}</div>
                    <div>{a.blurb}</div>
                    <div>{(new Date(a.updatedAt)).toLocaleDateString()}</div>
                    <div>{parser(a.content)}</div>
                </div>
            // <a href={`/articles/${a.id}`}>
            // </a>
        )
    }

    return (
        <div className='homepagebody'>
            {
                article && article.length > 0 &&
                    <div className='main-article'>
                        <div className='header2'>Highlighted Article</div>
                        {renderArticle(article[0])}
                    </div>

            }

            {article.length > 1 && (
                <div className="article-feed">
                    <div className='header2'>Article Feed</div>
                    {article.slice(1).map(art => renderArticle(art))}
                </div>
            )}
            {/* articles.map */}
            {/* probably map with separate divs for each article to be displayed
            need div for title, blurb, (image?), (date?)
            */}

        </div>
    )
}

export default HomePage;
