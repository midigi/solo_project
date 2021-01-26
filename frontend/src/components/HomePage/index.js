import './HomePage.css';
import {useEffect, useState, React} from 'react';
import {fetchAllArticles} from '../../util/apiUtil';
import {useDispatch, useSelector} from 'react-redux';

function HomePage(){
    const [article, setArticle] = useState([]);
    // console.log('useselector', useSelector(state));
    // const stateArticles = useSelector(state=>state.articles);
    // console.log('what is this', stateArticles)

    // useSelector....
    const dispatch = useDispatch();
    useEffect( () => {
        const fetchArticles = async ()=>{
            dispatch(await fetchAllArticles());
        }
        const result = fetchArticles();
        setArticle([...article, result]);

    },[dispatch]);

    return (
        <div className='homepagebody'>
            <div className='header'>Medium - Analytics</div>
            <div className='header'>Highlighted Article
                <div>Image goes here</div>
                <div>Title of highlighted article goes here</div>
                <div>Blurb-quick description</div>
            </div>
            <div>Article Feed</div>
            {article && (
                <div>{article}</div>
            )}
            {/* articles.map */}
            {/* probably map with separate divs for each article to be displayed
            need div for title, blurb, (image?), (date?)
            */}

        </div>
    )
}

export default HomePage;
