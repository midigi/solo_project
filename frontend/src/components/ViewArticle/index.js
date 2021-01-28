import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {addArticle} from '../../util/apiUtil';
import { useHistory, useParams } from 'react-router-dom';
import {fetchArticle} from '../../util/apiUtil'


//[TODO]Access the state and render the indvidual article to the page.


const ViewArticle = () => {
    const article_id = Number.parseInt(useParams().article_id);
    const dispatch = useDispatch();
    const history = useHistory();

    const articleSelector = useSelector(state =>
        // console.log("this is the state", Object.values(state.articles)[0].title)
        Object.values(state.articles)

        // .filter(
        //     (article) => article.article_id === article_id
        // )

        // .filter(
        //     (article) => article.article_id === article_id
        // )
         // ({articles}) => {
        //     Object.values(articles).filter(
        //         (title) => title.title === title
        //     )
        // return state.articles.list.map(articleId =>state.article[article_id])
    );

    // const [title, setTitle] = useState(articleSelector ? articleSelector.title : "");

    useEffect(() => {
        dispatch(fetchArticle(article_id))
        // .then((articleSelector) => {
        //     setTitle(articleSelector.title);
        // });
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
                    <div>
                        <div>{article.title}</div>
                        <div>{article.blurb}</div>
                        <div>{article.content}</div>
                    </div>
                ))}

                {/* {articleSelector.map((article) => (
                    <div>
                        {article.title}
                    </div>
                ))} */}
                {/* {article.blurb}
                {article.content} */}
            </div>
        </>

    )

}

export default ViewArticle;
