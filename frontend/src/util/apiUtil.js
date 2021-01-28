import {fetch} from '../store/csrf';
import {articleAdded, receiveArticles, viewArticle} from '../store/reducers/articles'

// export const fetchAllArticles = () => async (dispatch) => {
//     const res = await fetch('/api/articles');
//     if (!res.ok) throw res;
//     const {articles} = await res.data;
//     // console.log("this is the articles", articles);
//     return articles;
// }

export const fetchArticle = (article_id) => async (dispatch) => {
    const res = await fetch(`/api/articles/${article_id}`);
    if (!res.ok) throw res;
    const {article} = await res.data;
    dispatch(viewArticle(article))
    // console.log("this is the articles", articles);
    return article;
}

export const addArticle = (payload) => async (dispatch) => {
    const res = await fetch('/api/articles', {
        method: "POST",
        body: JSON.stringify(payload)
    })
    if (!res.ok) throw res;
    const { article } = await res.data
    dispatch(articleAdded(article))
    return article;
}
