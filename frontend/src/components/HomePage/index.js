import './HomePage.css';
import {useEffect, useState, React} from 'react';
import {fetch} from '../../store/csrf';
import parser from 'react-html-parser';

function HomePage(){
    const [article, setArticle] = useState([]);


    async function getArticles(){
        const res = await fetch('/api/articles');
        if (!res.ok) throw res;
        const {articles} = await res.data;
        setArticle(articles);
    }

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
                    <a href={`/articles/${a.id}`}>
                        <div className="title">{a.title}</div>
                        <div className="blurb">{a.blurb}</div>
                        <div className="date">{(new Date(a.updatedAt)).toLocaleDateString()}</div>
                        <div>{parser(a.content)}</div>
                    </a>
                </div>

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
                    {article.slice(1, 4).map(art => renderArticle(art))}
                </div>
            )}
            {article.length > 1 && (
                <div className="trending">
                    <div className='header2'>Trending Now</div>
                    {article.slice(4).map(art => renderArticle(art))}
                </div>
            )}
        </div>
    )}

export default HomePage;
