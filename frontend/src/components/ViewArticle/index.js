import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {addArticle} from '../../util/apiUtil';
import { useHistory } from 'react-router-dom';
import {fetchArticle} from '../../util/apiUtil'

//[TODO]Access the state and render the indvidual article to the page.


const ViewArticle = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const article = useSelector(state => {
    //     return state.article.list.map(articleId =>state.article[article_id])
    // });

    useEffect(() => {
        dispatch(fetchArticle());
    }, [dispatch]);

    // if(!article){
    //     history.push('/');
    // }

    return (
        <>
            <div>
                IT WORKED
                {/* {article.title}
                {article.blurb}
                {article.content} */}
            </div>
        </>

    )

}

export default ViewArticle;
