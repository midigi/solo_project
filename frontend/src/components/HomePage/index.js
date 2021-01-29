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

    return (
        <div className='homepagebody'>
            <div className='header'>Medium - Analytics</div>
            <div className='header'>Highlighted Article
                <div>Image goes here</div>
                <div>Title of highlighted article goes here</div>
                <div>Blurb-quick description</div>
            </div>
            <div>Article Feed</div>
            {/* <script>
                for (const obj in object){
                    console.log(obj.title)
            }
            </script> */}

            {article.length > 1 && (
                article.map(art =>
                    <a href={`/articles/${art.id}`}>
                        <div key={art.id}>
                            <div>{art.title}</div>
                            <div>{art.blurb}</div>
                            <div>{parser(art.content)}</div>
                        </div>
                    </a>
            ))}
            {/* articles.map */}
            {/* probably map with separate divs for each article to be displayed
            need div for title, blurb, (image?), (date?)
            */}

        </div>
    )
}

export default HomePage;
